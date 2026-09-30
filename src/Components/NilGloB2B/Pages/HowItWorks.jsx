

const steps = [
  {
    number: "01",
    title: "Find Products",
    description:
      "Browse products and categories available for bulk purchasing.",
  },

  {
    number: "02",
    title: "Choose a Supplier",
    description:
      "Review available suppliers and their product offerings.",
  },


  {
    number: "03",
    title: "Request a Quote",
    description:
      "Submit your required quantity and business purchasing requirements.",
  },
  {
    number: "04",
    title: "Place Your Order",
    description:
      "Review the order details and complete the purchasing process.",
  },

   
  {
    number: "03",
    title: "Choose a Shipping Method",
    description:
      "Choose whether your products can be Transportated through Air, Land or sea transport.",
  },

  {
    number: "05",
    title: "Track Your Order",
    description:
      "Use your order information to follow the status of your shipment.",
  },
];

export default function HowItWorks() {
  return (
    <>
  

      <main className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-center text-4xl font-bold">
            How NilB2B Works
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            A simple process for businesses looking to Purchase bulk products
            from trusted suppliers Globally.
          </p>

          <div className="mt-12 space-y-6">

            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >

                <div className="text-2xl font-bold text-cyan-600">
                  {step.number}
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    {step.title}
                  </h2>

                  <p className="mt-2 text-slate-600">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </main>
    </>
  );
}