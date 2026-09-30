import StatCard from "../../Components/admin/StatCard";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const sampleData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Users",
      data: [12, 19, 30, 40, 55, 70],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.08)",
      fill: true,
    },
  ],
};

 function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Users" value="12,430" delta="+3.2%" />
        <StatCard title="Active Courses" value="58" delta="+1.1%" />
        <StatCard title="Published Opportunities" value="24" delta="-0.4%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 border shadow-sm">
          <h3 className="font-semibold mb-4">User Growth</h3>
          <div className="h-60">
            <Line data={sampleData} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-4 text-sm text-slate-600">
            <li>
              <div className="font-medium">John registered</div>
              <div className="text-xs">5 minutes ago</div>
            </li>
            <li>
              <div className="font-medium">New scholarship published</div>
              <div className="text-xs">18 minutes ago</div>
            </li>
            <li>
              <div className="font-medium">New course created</div>
              <div className="text-xs">1 hour ago</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;