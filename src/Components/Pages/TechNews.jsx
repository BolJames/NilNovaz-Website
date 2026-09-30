import {
  FaArrowRight,
  FaClock,
  FaNewspaper,
} from "react-icons/fa";

const news = [
  {
    id: 1,
    title: "Artificial Intelligence Continues to Transform Software Development",
    category: "AI",
    time: "Today",
    description:
      "New AI technologies are continuing to change how developers build, test, and maintain software.",
  },

  {
    id: 2,
    title: "Cloud Computing Continues to Expand Across Businesses",
    category: "Cloud",
    time: "Today",
    description:
      "Organizations are increasingly using cloud platforms to deploy applications and manage their infrastructure.",
  },

  {
    id: 3,
    title: "Cybersecurity Becomes a Growing Priority for Businesses",
    category: "Cybersecurity",
    time: "Yesterday",
    description:
      "Businesses are increasing their focus on protecting applications, networks, customer information, and digital infrastructure.",
  },

  {
    id: 4,
    title: "The Growth of Digital Commerce",
    category: "E-Commerce",
    time: "2 days ago",
    description:
      "Digital commerce continues to create new ways for businesses and consumers to connect through online marketplaces.",
  },

  {
    id: 5,
    title: "Developers Continue to Adopt Modern Web Technologies",
    category: "Web Development",
    time: "3 days ago",
    description:
      "Modern JavaScript frameworks, APIs, cloud services, and developer tools continue to evolve rapidly.",
  },

  {
    id: 6,
    title: "Technology Opportunities Across Africa",
    category: "Africa Tech",
    time: "4 days ago",
    description:
      "Technology startups and digital businesses are creating new opportunities across African markets.",
  },
];

export default function TechNews() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            <FaNewspaper />
            NilNovaz Tech News
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Technology News & Trends
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Stay informed about developments in artificial intelligence,
            software, cybersecurity, cloud computing, e-commerce, and
            emerging technologies.
          </p>

        </div>
      </section>

      {/* News */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-end justify-between">

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Latest Tech News
              </h2>

              <p className="mt-2 text-slate-600">
                Technology developments and trends worth following.
              </p>
            </div>

          </div>

          <div className="space-y-5">

            {news.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg md:p-8"
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center">

                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-2xl text-cyan-600">
                    <FaNewspaper />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                        {item.category}
                      </span>

                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <FaClock />
                        {item.time}
                      </span>

                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                  {/* Read */}
                  <button
                    type="button"
                    className="flex items-center gap-2 whitespace-nowrap font-semibold text-cyan-600 transition group-hover:text-cyan-700"
                  >
                    Read more
                    <FaArrowRight />
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}