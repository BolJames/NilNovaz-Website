// ============================================================
// CHECKOUT PAGE
// ============================================================
// Checkout flow with:
// - Shipping information
// - Payment method selection
// - Order review
// - Place order functionality

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheck,
  FaLock,
  FaCreditCard,
  FaWallet,
  FaUniversity,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { formatLocalizedCurrency } from "../../utils/currencyFormatter";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, tax, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    // Customer Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Shipping Address
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",

    // Payment
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Your cart is empty
          </h1>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all"
          >
            <FaArrowLeft /> Back to Store
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate order number
    const orderNum = `NN${Date.now()}`;
    setOrderNumber(orderNum);
    setOrderPlaced(true);
    clearCart();

    setIsProcessing(false);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <FaCheck className="text-4xl text-green-400" />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-3">
            Order Confirmed!
          </h1>

          <p className="text-gray-400 mb-6">
            Thank you for your order. We're preparing your items for shipment.
          </p>

          <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-gray-400 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-cyan-300 font-mono mb-4">
              {orderNumber}
            </p>

            <p className="text-sm text-gray-400 mb-2">Total Amount</p>
            <p className="text-2xl font-bold text-white">
              {formatLocalizedCurrency(total, "USD")}
            </p>

            <div className="mt-6 pt-6 border-t border-cyan-400/10">
              <p className="text-sm text-gray-400">
                A confirmation email has been sent to{" "}
                <span className="text-cyan-300">{formData.email}</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate("/products")}
              className="w-full py-3 bg-gradient-to-r from-[#FBFC13] to-yellow-500 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(251,252,19,.6)] transition-all"
            >
              Continue Shopping
            </button>
            <Link
              to="/orders"
              className="block w-full py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold rounded-lg hover:bg-cyan-500/30 transition-all"
            >
              View Orders
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/products/cart"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-6"
          >
            <FaArrowLeft /> Back to Cart
          </Link>
          <h1 className="text-4xl font-extrabold text-white">Checkout</h1>
        </motion.div>

        {/* Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Step 1: Shipping Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-[16px] border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= 1
                      ? "bg-cyan-500 text-black"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {currentStep > 1 ? <FaCheck /> : "1"}
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Shipping Information
                </h2>
              </div>

              {currentStep >= 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                  />

                  <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, Suite, etc. (Optional)"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                  />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white outline-none focus:border-cyan-400/50 transition-all"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold rounded-lg hover:bg-cyan-500/30 transition-all mt-6"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}
            </motion.div>

            {/* Step 2: Payment */}
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-[16px] border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-cyan-500 text-black">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { id: "card", label: "Credit / Debit Card", icon: FaCreditCard },
                    { id: "upi", label: "UPI", icon: FaWallet },
                    { id: "bank", label: "Bank Transfer", icon: FaUniversity },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center gap-3 p-4 rounded-lg border border-cyan-400/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-all"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-cyan-400"
                      />
                      <method.icon className="text-cyan-400" />
                      <span className="text-white font-semibold">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>

                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 mb-6 pb-6 border-b border-cyan-400/10">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          cardNumber: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            expiryDate: e.target.value,
                          }))
                        }
                        className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            cvv: e.target.value,
                          }))
                        }
                        className="px-4 py-3 rounded-lg bg-white/10 border border-cyan-400/20 text-white placeholder-gray-500 outline-none focus:border-cyan-400/50 transition-all"
                      />
                    </div>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full py-4 bg-gradient-to-r from-[#FBFC13] to-yellow-500 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(251,252,19,.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FaLock size={16} />
                  {isProcessing ? "Processing..." : "Place Order"}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="h-fit sticky top-24"
          >
            <div className="rounded-[16px] border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-cyan-400/10">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-gray-400">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-white font-semibold">
                      {formatLocalizedCurrency(item.price * item.quantity, item.currency)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-cyan-400/10">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatLocalizedCurrency(subtotal, "USD")}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (5%)</span>
                  <span>{formatLocalizedCurrency(tax, "USD")}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Delivery</span>
                  <span className="text-green-400">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold text-cyan-300">
                <span>Total</span>
                  <span>{formatLocalizedCurrency(total, "USD")}</span>
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-400/20 rounded-lg text-sm text-green-400 flex items-center gap-2">
                <FaLock /> Secure checkout powered by Razorpay
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
