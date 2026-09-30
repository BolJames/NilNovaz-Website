import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const B2BCartContext = createContext(null);

const STORAGE_KEY = "nilnovaz-b2b-cart";

const readCart = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function B2BCartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readCart());

  /* Save cart whenever it changes */
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  /* ---------------------------------------------
     ADD ITEM
  --------------------------------------------- */
  const addItem = (product, quantity = null) => {
    if (!product) return;

    const minimumQuantity = Number(product.minOrder) || 1;
    const stock = Number(product.stock) || Infinity;

    const requestedQuantity =
      Number(quantity) || minimumQuantity;

    const quantityToAdd = Math.max(
      requestedQuantity,
      minimumQuantity
    );

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        const newQuantity =
          existingItem.quantity + quantityToAdd;

        if (newQuantity > stock) {
          return currentItems;
        }

        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: Math.min(quantityToAdd, stock),
        },
      ];
    });
  };

  /* ---------------------------------------------
     UPDATE QUANTITY
  --------------------------------------------- */
  const updateQuantity = (productId, quantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== productId) {
          return item;
        }

        const minimumQuantity =
          Number(item.minOrder) || 1;

        const stock =
          Number(item.stock) || Infinity;

        const newQuantity = Math.max(
          minimumQuantity,
          Math.min(Number(quantity) || minimumQuantity, stock)
        );

        return {
          ...item,
          quantity: newQuantity,
        };
      })
    );
  };

  /* ---------------------------------------------
     REMOVE ITEM
  --------------------------------------------- */
  const removeItem = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  /* ---------------------------------------------
     CLEAR CART
  --------------------------------------------- */
  const clearCart = () => {
    setCartItems([]);
  };

  /* ---------------------------------------------
     TOTAL QUANTITY
  --------------------------------------------- */
  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  /* ---------------------------------------------
     CART TOTAL
  --------------------------------------------- */
  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  const value = {
    cartItems,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    cartCount,
    cartTotal,
  };

  return (
    <B2BCartContext.Provider value={value}>
      {children}
    </B2BCartContext.Provider>
  );
}

export function useB2BCart() {
  const context = useContext(B2BCartContext);

  if (!context) {
    throw new Error(
      "useB2BCart must be used inside B2BCartProvider"
    );
  }

  return context;
}