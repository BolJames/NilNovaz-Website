import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { FaTachometerAlt, FaUsers, FaTools, FaBoxOpen, FaGraduationCap, FaBullhorn, FaCog } from "react-icons/fa";

const items = [
  { to: "/admin", label: "Dashboard", icon: FaTachometerAlt },
  { to: "/admin/users", label: "Users", icon: FaUsers },
  { to: "/admin/services", label: "Services", icon: FaTools },
  { to: "/admin/products", label: "Products", icon: FaBoxOpen },
  { to: "/admin/education", label: "Education", icon: FaGraduationCap },
  { to: "/admin/opportunities", label: "Opportunities", icon: FaBullhorn },
  { to: "/admin/settings", label: "Settings", icon: FaCog },
];

export default function AdminSidebar() {
  return (
    <div className="h-screen sticky top-0 bg-[#04113a] text-white flex flex-col">
      <div className="px-6 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <Logo />
          </div>
          <div>
            <div className="font-extrabold text-lg">NilNovaz</div>
            <div className="text-sm text-yellow-400">Admin</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  end={it.to === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors ${
                      isActive ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg" : "text-white/90"
                    }`
                  }
                >
                  <Icon />
                  <span className="font-medium">{it.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 py-6 border-t border-white/5">
        <button className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold">Add Item</button>
      </div>
    </div>
  );
}
