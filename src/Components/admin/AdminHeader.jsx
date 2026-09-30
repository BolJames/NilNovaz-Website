import { useState } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";

export default function AdminHeader() {
  const [q, setQ] = useState("");

  return (
    <header className="flex items-center justify-between p-4 md:p-6 bg-white/5 backdrop-blur sticky top-0 z-40 border-b border-white/5">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-white text-xl">
          <FaBars />
        </button>
        <div className="text-sm text-white/80">Admin / Dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-white/5 rounded-lg px-3 py-1 gap-2">
          <FaSearch className="text-white/80" />
          <input
            aria-label="Search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search"
            className="bg-transparent outline-none text-white placeholder-white/60"
          />
        </div>

        <button className="relative text-white/90 p-2 rounded-md hover:bg-white/5">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>

        <button className="flex items-center gap-2 text-white/90 p-2 rounded-md hover:bg-white/5">
          <FaUserCircle className="text-2xl" />
          <div className="hidden sm:block text-sm text-white">Admin</div>
        </button>
      </div>
    </header>
  );
}
