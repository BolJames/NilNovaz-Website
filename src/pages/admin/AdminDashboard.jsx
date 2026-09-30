const stats = [
  { label: "Users", value: "12,430" },
  { label: "Products", value: "284" },
  { label: "Orders", value: "1,240" },
  { label: "Courses", value: "58" },
];

 function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">Admin Dashboard</p>
            <h1 className="text-3xl font-bold text-slate-900">NilNovaz Control Center</h1>
          </div>
          <button className="rounded-xl bg-[#04113a] px-4 py-2 font-semibold text-white">Create Content</button>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-3 text-3xl font-bold text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">System Overview</h2>
            <div className="space-y-4">
              {[
                "New registrations this week: 142",
                "Pending product approvals: 9",
                "Course enrollments rising by 12%",
                "Scholarship applications reviewed: 26",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Management Areas</h2>
            <div className="space-y-3 text-sm">
              {[
                "Users",
                "Products",
                "Orders",
                "Courses",
                "Enrollments",
                "Opportunities",
                "Applications",
                "News & Blogs",
                "Media",
                "Internships",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;