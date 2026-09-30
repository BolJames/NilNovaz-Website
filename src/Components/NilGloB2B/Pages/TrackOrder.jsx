import { useState } from "react";


export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Track order:", orderId);

    // Later:
    // GET /api/orders/:id
  };

  return (
    <>
    

      <main className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-2xl">

          <h1 className="text-4xl font-bold">
            Track Your Order
          </h1>

          <p className="mt-3 text-slate-600">
            Enter your order number to check its status.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl bg-white p-8 shadow-sm"
          >

            <label className="mb-2 block font-medium">
              Order ID
            </label>

            <input
              type="text"
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              placeholder="Enter order ID"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />

            <button
              type="submit"
              className="mt-5 rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white"
            >
              Track Order
            </button>

          </form>

        </div>
      </main>
    </>
  );
}