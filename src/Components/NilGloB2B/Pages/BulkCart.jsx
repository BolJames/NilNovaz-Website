import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const initialCart = [
  {
    id: 1,
    name: "A4 Printing Paper",
    supplier: "Global Paper Supplier",
    price: 850,
    unit: "ream",
    quantity: 10,
    minOrder: 10,
  },
  {
    id: 2,
    name: "Ballpoint Pens",
    supplier: "Office Supplies Ltd",
    price: 450,
    unit: "box",
    quantity: 20,
    minOrder: 20,
  },
];

export default function BulkCart() {
  const [cartItems, setCartItems] = useState(initialCart);

  // Increase product quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease product quantity
  // Quantity cannot go below the supplier's minimum order quantity.
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > item.minOrder
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // Remove product from B2B cart
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-600">
              NilB2B
            </p>

            <h1 className="text-3xl font-bold text-slate-900">
              Bulk Shopping Cart
            </h1>

            <p className="mt-2 text-slate-600">
              Review your bulk products before placing your business order.
            </p>
          </div>

          <Link
            to="/b2b/categories"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

        </div>

        {cartItems.length === 0 ? (

          /* Empty Cart */
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-400">
              🛒
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              Your B2B cart is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-slate-500">
              Browse our bulk marketplace and add products to your business
              cart.
            </p>

            <Link
              to="/b2b/categories"
              className="mt-6 inline-block rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              Browse Bulk Products
            </Link>

          </div>

        ) : (

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    {/* Product Placeholder */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-3xl">
                      📦
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">

                      <h2 className="text-lg font-semibold text-slate-900">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Supplier: {item.supplier}
                      </p>

                      <p className="mt-2 font-semibold text-cyan-600">
                        ₹{item.price.toLocaleString()} / {item.unit}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Minimum order: {item.minOrder} {item.unit}s
                      </p>

                    </div>

                    {/* Quantity */}
                    <div className="flex items-center rounded-xl border border-slate-300">

                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-3 text-slate-600 hover:bg-slate-100"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="text-xs" />
                      </button>

                      <span className="min-w-12 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-3 text-slate-600 hover:bg-slate-100"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-xs" />
                      </button>

                    </div>

                    {/* Item Total */}
                    <div className="text-right">

                      <p className="font-bold text-slate-900">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-slate-600">
                  <span>Products</span>
                  <span>
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Total Units</span>
                  <span>
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between">

                    <span className="font-semibold text-slate-900">
                      Estimated Subtotal
                    </span>

                    <span className="text-xl font-bold text-cyan-600">
                      ₹{subtotal.toLocaleString()}
                    </span>

                  </div>
                </div>

              </div>

              <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-700">
                Final shipping costs, taxes, supplier terms and negotiated
                pricing may be confirmed before the order is finalized.
              </p>

              {/* Checkout */}
            <Link
            to="/b2b/payment"
             className="mt-5 flex w-full items-center justify-center rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
                >
              Proceed to Business Checkout
            </Link>

              {/* Quote */}
              <Link
                to="/b2b/request-quote"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-600 px-5 py-3 font-semibold text-cyan-600 transition hover:bg-cyan-50"
              >
                <FaFileInvoiceDollar />
                Request Bulk Quote
              </Link>

            </aside>

          </div>

        )}

      </div>
    </section>
  );
}