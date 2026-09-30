export default function StatCard({ title, value, delta, icon }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400">{title}</div>
          <div className="text-2xl font-extrabold mt-1">{value}</div>
        </div>

        <div className="text-sm text-green-600 font-semibold">{delta}</div>
      </div>
    </div>
  );
}
