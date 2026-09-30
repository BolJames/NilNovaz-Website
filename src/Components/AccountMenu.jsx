import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function AccountMenu({ onNavigate }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };
console.log("AccountMenu authentication:", {
  user,
  isAuthenticated,
});
  return (
    <div ref={menuRef} className="relative">
     <button
  type="button"
  onClick={() => setIsOpen((open) => !open)}
  aria-expanded={isOpen}
  aria-haspopup="menu"
  aria-label={
    isAuthenticated
      ? `Account for ${user?.fullName || "User"}`
      : "Create account"
  }
  className="flex items-center gap-2 rounded-xl px-4 py-2 text-white transition hover:bg-orange-500/10 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
>
  <FaUserCircle className="text-2xl" />

  {isAuthenticated ? (
    <span className="text-sm font-semibold">
      {user?.fullName || "Account"}
    </span>
  ) : (
    <span className="text-sm font-bold">
      Create account
    </span>
  )}
</button>

      {isOpen && (
        <div role="menu" className="absolute right-0 top-full z-[70] mt-2 w-[min(17rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-[#0a0705] py-2 text-white shadow-[0_0_30px_rgba(255,106,0,0.2)]
border border-orange-500/30">
          {isAuthenticated ? (
            <>
              <div className="border-b border-slate-100 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Hello</p>
                <p className="truncate font-bold">{user.fullName}</p>
                <p className="truncate text-sm text-slate-500">{user.email}</p>
              </div>
              <Link to="/account" role="menuitem" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50"><FaUser /> Account & profile</Link>
              <Link to="/orders" role="menuitem" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50"><FaSignInAlt /> My orders</Link>
              <button type="button" role="menuitem" onClick={handleLogout} className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"><FaSignOutAlt /> Logout</button>
            </>
          ) : (
            <>
              <div className="px-4 py-3 font-semibold">Welcome to NilNovaz</div>
              <Link to="/login" role="menuitem" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50"><FaSignInAlt /> Login</Link>
              <Link to="/register" role="menuitem" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50"><FaUser /> Create account</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
