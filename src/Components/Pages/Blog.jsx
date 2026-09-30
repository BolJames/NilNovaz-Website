import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "How Technology Is Changing Businesses in Africa",
    excerpt:
      "Explore how modern software, digital platforms, and online services are creating new opportunities for African businesses.",
    category: "Technology",
    author: "NilNovaz Team",
    date: "September 10, 2026",
  },

  {
    id: 2,
    title: "Why Businesses Need a Digital Presence",
    excerpt:
      "A strong digital presence can help businesses reach customers, improve communication, and build their brands.",
    category: "Business",
    author: "NilNovaz Team",
    date: "September 5, 2026",
  },

  {
    id: 3,
    title: "Getting Started with Software Development",
    excerpt:
      "A beginner-friendly look at the technologies and skills required to start building modern software applications.",
    category: "Software Development",
    author: "NilNovaz Team",
    date: "August 28, 2026",
  },

  {
    id: 4,
    title: "The Future of E-Commerce in Africa",
    excerpt:
      "How online marketplaces and digital payment systems are changing the way businesses buy and sell products.",
    category: "E-Commerce",
    author: "NilNovaz Team",
    date: "August 20, 2026",
  },

  {
    id: 5,
    title: "Understanding Artificial Intelligence",
    excerpt:
      "An introduction to artificial intelligence and how businesses and developers can use AI-powered technologies.",
    category: "Artificial Intelligence",
    author: "NilNovaz Team",
    date: "August 15, 2026",
  },

  {
    id: 6,
    title: "Why Learning Technology Skills Matters",
    excerpt:
      "Technology skills are becoming increasingly important for students, entrepreneurs, and professionals.",
    category: "Education",
    author: "NilNovaz Team",
    date: "August 8, 2026",
  },
];

export default function Blogs() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            NilNovaz Blog
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Ideas, Insights & Technology
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Explore articles about technology, software development,
            business, digital transformation, and opportunities.
          </p>

        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Latest Articles
            </h2>

            <p className="mt-2 text-slate-600">
              Insights and ideas from the NilNovaz team.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image Placeholder */}
                <div className="flex h-52 items-center justify-center bg-slate-200">
                  <span className="font-medium text-slate-400">
                    Blog Image
                  </span>
                </div>

                <div className="p-6">

                  {/* Category */}
                  <span className="text-sm font-semibold text-cyan-600">
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {blog.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500">

                    <span className="flex items-center gap-2">
                      <FaUser />
                      {blog.author}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {blog.date}
                    </span>

                  </div>

                  {/* Read More */}
                  <button
                    type="button"
                    className="mt-6 flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    Read article
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