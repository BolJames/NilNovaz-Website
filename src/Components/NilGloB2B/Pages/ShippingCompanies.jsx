import { FaShippingFast, FaGlobe, FaTruck } from "react-icons/fa";

const shippingCompanies = [
  {
    id: 1,
    name: "DHL",
    description: "International express shipping and logistics.",
    countries: "Worldwide",
    services: ["Express", "Air Freight", "Sea Freight"],
  },
  {
    id: 2,
    name: "FedEx",
    description: "International parcel delivery and freight services.",
    countries: "Worldwide",
    services: ["Express", "Freight", "International Shipping"],
  },
  {
    id: 3,
    name: "UPS",
    description: "Global package delivery and supply-chain services.",
    countries: "Worldwide",
    services: ["Express", "Freight", "Cargo"],
  },
  {
    id: 4,
    name: "Maersk",
    description: "Global ocean transportation and logistics.",
    countries: "Worldwide",
    services: ["Sea Freight", "Container Shipping", "Logistics"],
  },
  {
    id: 5,
    name: "Aramex",
    description: "International shipping and logistics solutions.",
    countries: "Middle East & Worldwide",
    services: ["Express", "Freight", "Logistics"],
  },
  {
    id: 6,
    name: "Local Logistics Partner",
    description: "Regional delivery and transportation services.",
    countries: "Africa & Regional Markets",
    services: ["Road Freight", "Local Delivery", "Cargo"],
  },
];

export default function ShippingCompanies() {
  return (
    <section className="bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <FaShippingFast className="text-2xl" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Shipping Companies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Choose from available shipping and logistics partners for
            delivering your bulk orders.
          </p>
        </div>

        {/* Companies */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shippingCompanies.map((company) => (
            <div
              key={company.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Company Icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FaTruck className="text-xl" />
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Available
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-bold text-slate-900">
                {company.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {company.description}
              </p>

              {/* Countries */}
              <div className="mt-5 flex items-start gap-2">
                <FaGlobe className="mt-1 shrink-0 text-cyan-600" />

                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Coverage
                  </p>

                  <p className="text-sm text-slate-700">
                    {company.countries}
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase text-slate-400">
                  Services
                </p>

                <div className="flex flex-wrap gap-2">
                  {company.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Select Shipping Company
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}