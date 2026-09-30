
const suppliers = [
  {
    name: "Supplier One",
    location: "India",
    category: "Stationery",
  },

  {
    name: "Supplier Two",
    location: "China",
    category: "Electronics",
  },

  {
    name: "Supplier Three",
    location: "Dubai",
    category: "General Merchandise",
  },



    {
    name: "Supplier four",
    location: "India",
    category: "Stationery",
  },
  
  {
    name: "Supplier five",
    location: "China",
    category: "Electronics",
  },

  {
    name: "Supplier six",
    location: "Dubai",
    category: "General Merchandise",
  },



];

export default function Suppliers() {
  return (
    <>
 
      <main className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-4xl font-bold text-slate-900">
            Suppliers
          </h1>

          <p className="mt-3 text-slate-600">
            Discover suppliers available through NilNovaz B2B.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {suppliers.map((supplier) => (
              <div
                key={supplier.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold">
                  {supplier.name}
                </h2>

                <p className="mt-3 text-slate-600">
                  Location: {supplier.location}
                </p>

                <p className="text-slate-600">
                  Category: {supplier.category}
                </p>

                <button className="mt-5 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                  View Supplier
                </button>
              </div>
            ))}

          </div>

        </div>
      </main>
    </>
  );
}