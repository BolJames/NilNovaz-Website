import { useState } from "react";


export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Later this will send the request to:
    // POST /api/b2b/quotes

    setSubmitted(true);
  };

  return (
    <>
 
      <main className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-4xl font-bold text-slate-900">
            Request a Quote
          </h1>

          <p className="mt-3 text-slate-600">
            Tell us what products and quantities your business needs.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5 rounded-2xl bg-white p-8 shadow-sm"
          >

            <div>
              <label className="mb-2 block font-medium">
                Product
              </label>

              <input
                type="text"
                required
                placeholder="e.g. A4 printing paper"
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                required
                placeholder="e.g. 500"
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Additional information
              </label>

              <textarea
                rows="5"
                placeholder="Describe your requirements..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              Submit Request
            </button>

            {submitted && (
              <p className="font-medium text-green-600">
                Your quote request has been submitted.
              </p>
            )}

          </form>

        </div>
      </main>
    </>
  );
}