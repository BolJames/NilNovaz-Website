import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCreditCard,
  FaUniversity,
  FaMobileAlt,
  FaFileInvoiceDollar,
  FaLock,
} from "react-icons/fa";

const cartItems = [
  {
    id: 1,
    name: "A4 Printing Paper",
    supplier: "Global Paper Supplier",
    price: 850,
    unit: "ream",
    quantity: 10,
  },
  {
    id: 2,
    name: "Ballpoint Pens",
    supplier: "Office Supplies Ltd",
    price: 450,
    unit: "box",
    quantity: 20,
  },
];

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    country: "South Sudan",
    city: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;

  const total = subtotal + shipping;

  // Handle form changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Temporary checkout handler.
  // Later this will send the order to the backend.
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("B2B order:", {
      cartItems,
      business: formData,
      paymentMethod,
      total,
    });

    alert(
      "Your B2B order has been submitted. Payment processing will be connected to the backend."
    );
  };

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/b2b/cart"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700"
          >
            <FaArrowLeft />
            Back to B2B Cart
          </Link>

          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
            NilB2B
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Business Checkout
          </h1>

          <p className="mt-2 text-slate-600">
            Complete your business and payment information to place your bulk
            order.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-3">

            {/* LEFT SIDE */}
            <div className="space-y-6 lg:col-span-2">

              {/* Business Information */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-xl font-bold text-slate-900">
                  Business Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name *
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="James Trading Ltd"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Contact Person *
                    </label>

                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Business Phone *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+211..."
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Business Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="business@example.com"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                </div>
              </div>

              {/* Shipping Information */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-xl font-bold text-slate-900">
                  Shipping Information
                </h2>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Country *
                    </label>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    >
                      <option>South Sudan</option>
                      <option>Kenya</option>
                      <option>Uganda</option>
                      <option>Ethiopia</option>
                      <option>India</option>
                      <option>United Arab Emirates</option>
                      <option>China</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      City *
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Juba"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Delivery Address *
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete delivery address"
                      rows="4"
                      required
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    Payment Method
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Select how your business would like to pay.
                  </p>
                </div>

                <div className="space-y-3">

                  {/* Card */}
                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                      paymentMethod === "card"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaCreditCard className="text-cyan-600" />

                    <div>
                      <p className="font-semibold text-slate-900">
                        Credit / Debit Card
                      </p>
                      <p className="text-sm text-slate-500">
                        Pay securely using a card.
                      </p>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                      paymentMethod === "bank"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaUniversity className="text-cyan-600" />

                    <div>
                      <p className="font-semibold text-slate-900">
                        Bank Transfer
                      </p>
                      <p className="text-sm text-slate-500">
                        Receive bank transfer instructions after ordering.
                      </p>
                    </div>
                  </label>

                  {/* Mobile Money */}
                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                      paymentMethod === "mobile-money"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile-money"
                      checked={paymentMethod === "mobile-money"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaMobileAlt className="text-cyan-600" />

                    <div>
                      <p className="font-semibold text-slate-900">
                        Mobile Money
                      </p>
                      <p className="text-sm text-slate-500">
                        Pay using a supported mobile money provider.
                      </p>
                    </div>
                  </label>

                  {/* Invoice */}
                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                      paymentMethod === "invoice"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="invoice"
                      checked={paymentMethod === "invoice"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    <FaFileInvoiceDollar className="text-cyan-600" />

                    <div>
                      <p className="font-semibold text-slate-900">
                        Request Invoice / Purchase Order
                      </p>

                      <p className="text-sm text-slate-500">
                        Submit your order for business payment processing.
                      </p>
                    </div>
                  </label>

                </div>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <div className="mt-6 rounded-xl border border-slate-200 p-5">

                    <h3 className="mb-4 font-semibold text-slate-900">
                      Card Details
                    </h3>

                    <div className="space-y-4">

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Card Number
                        </label>

                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="0000 0000 0000 0000"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Expiry Date
                          </label>

                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            CVV
                          </label>

                          <input
                            type="password"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="***"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                          />
                        </div>

                      </div>

                    </div>

                  </div>
                )}

              </div>

            </div>

            {/* RIGHT SIDE */}
            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              {/* Products */}
              <div className="mt-6 space-y-4">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4"
                  >
                    <div>
                      <p className="font-medium text-slate-900">
                        {item.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {item.quantity} {item.unit}
                      </p>
                    </div>

                    <p className="font-semibold text-slate-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}

              </div>

              <div className="my-6 border-t border-slate-200" />

              <div className="space-y-3">

                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>To be confirmed</span>
                </div>

              </div>

              <div className="my-5 border-t border-slate-200" />

              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">
                  Estimated Total
                </span>

                <span className="text-2xl font-bold text-cyan-600">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-4 font-semibold text-white transition hover:bg-cyan-700"
              >
                <FaLock />
                Place Business Order
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Your payment information will be securely processed once a
                payment provider is connected.
              </p>

            </aside>

          </div>
        </form>
      </div>
    </section>
  );
}