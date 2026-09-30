import { Link } from "react-router-dom";
import B2BSearchBar from "./B2BSearchBar";


export default function B2BHome() {
  return (
    <>
   


      <main className="bg-slate-50 ">

        {/* Hero */}
        <section className="px-6 py-20">
          
          <div className="mx-auto max-w-7xl">

            <span className="text-sm font-extrabold uppercase tracking-wider text-red-600">
              WELCOME TO  NILB2B
            </span>

            

            <h1 className="mt-4 max-w-4xl text-3xl font-bold text-slate-900 md:text-4xl">
             Find Manufacturers, Explore Bulk Products, Place your Order from the comfort of your home, we do the rest for you.
            </h1>
        
            <p className="mt-6 max-w-2xl text-lg font-semibold text-black">
              Source products in bulk from suppliers and manufacturers
              through the NilB2B. we help your business buy in bulk from anywhere in the world and track your cargo till your destination.
            </p>
      <>

      {/* B2B Search */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <B2BSearchBar />
        </div>
      </div>
      </>
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/b2b/categories"
                className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
              >
                Browse Bulk Products
              </Link>

              <Link
                to="/b2b/request-quote"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100"
              >
                Request a Quote
              </Link>

            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

            <Link
              to="/b2b/categories"
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900">
                Bulk Categories
              </h2>

              <p className="mt-3 text-slate-600">
                Find products available for business and wholesale purchasing.
              </p>
            </Link>

            <Link
              to="/b2b/suppliers"
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900">
                Suppliers
              </h2>

              <p className="mt-3 text-slate-600">
                Discover suppliers and manufacturers available through the
                marketplace.
              </p>
            </Link>

            <Link
              to="/b2b/deals"
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900">
                Bulk Deals
              </h2>

              <p className="mt-3 text-slate-600">
                Explore products with bulk pricing and business offers.
              </p>
            </Link>

          </div>
        </section>

      </main>
      
    </>
  );
}