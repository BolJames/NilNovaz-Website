// ============================================================
// SHOPPING CART PAGE
// ============================================================
// Displays shopping cart with:
// - Cart items
// - Quantity adjustment
// - Remove items
// - Order summary
// - Proceed to checkout

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTrash, FaShoppingBag, FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { formatLocalizedCurrency } from "../../utils/currencyFormatter";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, subtotal, tax, total, isEmpty } =
    useCart();

  if (isEmpty) {
    return (
      <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <FaShoppingBag className="text-5xl text-cyan-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-gray-400 mb-8">
            Start shopping to add items to your cart
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FBFC13] to-yellow-500 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(251,252,19,.6)] transition-all"
          >
            Continue Shopping <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-400">
            {items.length} item{items.length !== 1 ? "s" : ""} in your cart
          </p>
        </motion.div>

        {/* Cart Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2 space-y-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="
                  rounded-[16px]
                  border
                  border-cyan-400/20
                  bg-gradient-to-br
                  from-white/5
                  to-white/10
                  backdrop-blur-xl
                  p-6
                  flex
                  gap-4
                  hover:border-cyan-400/50
                  transition-all
                "
              >
                {/* Product Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <Link
                    to={`/products/${item.slug}`}
                    className="text-lg font-bold text-white hover:text-cyan-300 transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                  <p className="text-cyan-400 font-semibold">
                    {formatLocalizedCurrency(item.price, item.currency)} each
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 w-fit mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="w-8 h-8 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center text-white font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded flex items-center justify-center bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <span className="text-2xl font-bold text-cyan-300">
                    {formatLocalizedCurrency(item.price * item.quantity, item.currency)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <FaTrash size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="h-fit sticky top-24"
          >
            <div
              className="
                rounded-[16px]
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-white/5
                to-white/10
                backdrop-blur-xl
                p-6
                space-y-6
              "
            >
              {/* Summary Title */}
              <h2 className="text-2xl font-bold text-white">Order Summary</h2>

              {/* Price Breakdown */}
              <div className="space-y-3 border-t border-cyan-400/10 pt-6">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatLocalizedCurrency(subtotal, "USD")}</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Tax & Charges (5%)</span>
                  <span>{formatLocalizedCurrency(tax, "USD")}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>Delivery</span>
                  <span>
                    {subtotal > 500 ? (
                      <span className="text-green-400">Free</span>
                    ) : (
                      "₹99"
                    )}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div
                className="
                  flex
                  justify-between
                  items-center
                  border-t
                  border-cyan-400/10
                  pt-6
                  text-xl
                  font-bold
                  text-cyan-300
                "
              >
                <span>Total</span>
                <span>{formatLocalizedCurrency(total, "USD")}</span>
              </div>

              {/* Promo Code (Optional) */}
              <div className="pt-4 border-t border-cyan-400/10">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="
                    w-full
                    py-2
                    px-3
                    rounded-lg
                    bg-white/10
                    border
                    border-cyan-400/20
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:border-cyan-400/50
                    transition-all
                    text-sm
                  "
                />
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/products/checkout")}
                className="
                  w-full
                  py-4
                  rounded-lg
                  bg-gradient-to-r
                  from-[#FBFC13]
                  to-yellow-500
                  text-black
                  font-bold
                  text-lg
                  hover:shadow-[0_0_30px_rgba(251,252,19,.6)]
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Proceed to Checkout <FaArrowRight />
              </motion.button>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="
                  w-full
                  py-3
                  text-center
                  rounded-lg
                  bg-cyan-500/20
                  text-cyan-300
                  border
                  border-cyan-400/30
                  font-semibold
                  hover:bg-cyan-500/30
                  transition-all
                "
              >
                Continue Shopping
              </Link>

              {/* Info */}
              <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-3 text-xs text-gray-400 text-center">
                ✓ Free delivery on orders above ₹500
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
