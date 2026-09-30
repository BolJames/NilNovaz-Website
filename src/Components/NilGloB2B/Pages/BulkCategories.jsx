import { Link } from "react-router-dom";


const categories = [
  {
    name: "Stationery",
    slug: "stationery",
  },

  {
    name: "Electronics",
    slug: "electronics",
  },

  {
    name: "Computer Accessories",
    slug: "computer-accessories",
  },

  {
    name: "Office Equipment",
    slug: "office-equipment",
  },

  {
    name: "Mobile Accessories",
    slug: "mobile-accessories",
  },

  {
    name: "Clothing",
    slug: "clothing",
  },

  {
    name: "Home & Living",
    slug: "home-living",
  },

  {
    name: "Construction Materials",
    slug: "construction-materials",
  },
];

export default function BulkCategories() {
  return (
    <>
     

      <main className="bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-4xl font-bold text-slate-900">
            Bulk Categories
          </h1>

          <p className="mt-3 text-slate-600">
            Browse products available for bulk and wholesale purchasing.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

           {categories.map((category) => (
  <div
    key={category.slug}
    className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >

    <h2 className="text-xl font-bold text-slate-900">
      {category.name}
    </h2>

    <p className="mt-2 text-sm text-slate-500">
      Browse products available in this category.
    </p>

    <Link
      to={`/b2b/bulk-products/${category.slug}`}
      className="mt-5 inline-block font-semibold text-cyan-600 hover:text-cyan-700"
    >
      Browse products →
    </Link>

  </div>
))}

          </div>

        </div>
      </main>
    </>
  );
}