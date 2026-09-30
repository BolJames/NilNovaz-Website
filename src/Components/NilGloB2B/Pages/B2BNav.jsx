import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaBuilding,
  FaTimes,
  FaChevronDown,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import {useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

/* =========================================================
   B2B NAVIGATION ITEMS
========================================================= */

const b2bItems = [
  {
    label: "B2B Home",
    to: "/b2b",
  },
  {
    label: "Bulk Categories",
    to: "/b2b/categories",
  },
  {
    label: "Suppliers",
    to: "/b2b/suppliers",
  },
  {
    label: "Deals",
    to: "/b2b/deals",
  },
  {
    label: "Shipping Companies",
    to: "/b2b/shipping-companies",
  },
  {
    label: "Request a Quote",
    to: "/b2b/request-quote",
  },
  {
    label: "How It Works",
    to: "/b2b/how-it-works",
  },
  {
    label: "Track Order",
    to: "/b2b/track-order",
  },
];

/* =========================================================
   LANGUAGES
========================================================= */

const languages = [
  { code: "en", name: "English" },
  { code: "sw", name: "Swahili" },
  { code: "ar", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "zh", name: "Chinese" },
  { code: "hi", name: "Hindi" },
];

/* =========================================================
   ORDERING COUNTRIES
========================================================= */

const orderingCountries = [
  { code: "SS", name: "South Sudan" },
  { code: "KE", name: "Kenya" },
  { code: "UG", name: "Uganda" },
  { code: "TZ", name: "Tanzania" },
  { code: "RW", name: "Rwanda" },
  { code: "AE", name: "Dubai, UAE" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "ET", name: "Ethiopia" },
  { code: "US", name: "United States" },
];

/* =========================================================
   B2B NAVBAR
========================================================= */

export default function B2BNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  /* -------------------------------------------------------
     MOBILE MENU
  ------------------------------------------------------- */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* -------------------------------------------------------
     BUSINESS PROFILE
  ------------------------------------------------------- */

  const [businessProfile, setBusinessProfile] = useState(() => {
    try {
      const savedProfile = localStorage.getItem(
        "nilnovaz-business-profile"
      );

      if (!savedProfile) {
        return null;
      }

      const profile = JSON.parse(savedProfile);

      if (profile?.companyName?.trim()) {
        return profile;
      }

      return null;
    } catch {
      return null;
    }
  });

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const hasBusinessProfile = Boolean(businessProfile);
  useEffect(() => {
  const loadBusinessProfile = () => {
    try {
      const savedProfile = localStorage.getItem(
        "nilnovaz-business-profile"
      );

      if (!savedProfile) {
        setBusinessProfile(null);
        return;
      }

      const profile = JSON.parse(savedProfile);

      if (profile?.companyName?.trim()) {
        setBusinessProfile(profile);
      } else {
        setBusinessProfile(null);
      }
    } catch (error) {
      console.error("Failed to load business profile:", error);
      setBusinessProfile(null);
    }
  };

  window.addEventListener(
    "business-profile-updated",
    loadBusinessProfile
  );

  return () => {
    window.removeEventListener(
      "business-profile-updated",
      loadBusinessProfile
    );
  };
}, []);

  /* -------------------------------------------------------
     LANGUAGE
  ------------------------------------------------------- */

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("nilnovaz-b2b-language") || "en";
  });

  /* -------------------------------------------------------
     ORDERING COUNTRY
  ------------------------------------------------------- */

  const [orderingCountry, setOrderingCountry] = useState(() => {
    return localStorage.getItem("nilnovaz-b2b-country") || "";
  });

  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = async () => {
    try {
      await logout();

      setProfileMenuOpen(false);
      setMobileMenuOpen(false);

      navigate("./B2Bhome.jsx");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  /* =======================================================
     LANGUAGE CHANGE
  ======================================================= */

  const handleLanguageChange = (event) => {
    const value = event.target.value;

    setLanguage(value);

    localStorage.setItem(
      "nilnovaz-b2b-language",
      value
    );
  };

  /* =======================================================
     COUNTRY CHANGE
  ======================================================= */

  const handleCountryChange = (event) => {
    const value = event.target.value;

    setOrderingCountry(value);

    localStorage.setItem(
      "nilnovaz-b2b-country",
      value
    );
  };

  /* =======================================================
     CLOSE PROFILE MENU
  ======================================================= */

  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  /* =======================================================
     MOBILE NAVIGATION CLICK
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="w-full">

      {/* =====================================================
          MOBILE HEADER
          Visible ONLY below md (768px)
      ====================================================== */}

      <div className="flex md:hidden items-center justify-between border-b border-slate-200 bg-white px-4 py-3">

        <div className="font-bold text-lg text-slate-800">
          NilB2B
        </div>

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((open) => !open)
          }
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:bg-slate-100"
          aria-label="Toggle B2B navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls="b2b-mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* =====================================================
          MOBILE DROPDOWN
          Visible ONLY below md
      ====================================================== */}

      {mobileMenuOpen && (
        <div
          id="b2b-mobile-menu"
          className="block md:hidden w-full border-b border-slate-200 bg-white shadow-lg"
        >

          <nav
            className="flex w-full flex-col p-3"
            aria-label="B2B mobile navigation"
          >

            {b2bItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* -------------------------------------------------
              LANGUAGE
          -------------------------------------------------- */}

          <div className="flex items-center rounded-lg border border-slate-200 bg-white">

            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
              className="cursor-pointer appearance-none bg-transparent px-3 py-2 pr-7 text-sm font-medium text-slate-700 outline-none"
            >

              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              ))}

            </select>

            <FaChevronDown className="pointer-events-none -ml-6 mr-2 text-[10px] text-slate-400" />

          </div>


          
          {/* -------------------------------------------------
              ORDERING COUNTRY
          -------------------------------------------------- */}

          <div className="flex items-center rounded-lg border border-slate-200 bg-white">

            <select
              value={orderingCountry}
              onChange={handleCountryChange}
              aria-label="Countries to Order From"
              className="cursor-pointer appearance-none bg-transparent px-3 py-2 pr-7 text-sm font-medium text-slate-700 outline-none"
            >

              <option value="" disabled>
                Countries to Order From
              </option>

              {orderingCountries.map((country) => (
                <option
                  key={country.code}
                  value={country.code}
                >
                  {country.name}
                </option>
              ))}

            </select>

            <FaChevronDown className="pointer-events-none -ml-6 mr-2 text-[10px] text-slate-400" />

          </div>


            {/* MOBILE CART */}

            <Link
              to="/b2b/cart"
              onClick={closeMobileMenu}
              className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700 shadow-sm transition hover:bg-cyan-100"
            >
              <FaShoppingCart className="text-cyan-600" />

              <span className="absolute -right-1 -top-1 rounded-full bg-cyan-600 px-1.5 py-0.5 text-[9px] font-bold leading-none text-white">
              0
            </span>
            
            </Link>

            {/* MOBILE BUSINESS PROFILE */}
              
          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setProfileMenuOpen((open) => !open)
              }
              aria-expanded={profileMenuOpen}
              aria-haspopup="menu"
              aria-label={
                hasBusinessProfile
                  ? "Business Profile"
                  : "Create your Business Profile"
              }
              className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition ${
                hasBusinessProfile
                  ? "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                  : "border-slate-300 bg-white text-slate-600 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
              }`}
            >

              <FaBuilding />

              {!hasBusinessProfile && (
                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
              )}

            </button>

            {/* PROFILE DROPDOWN */}

            {profileMenuOpen && (
              <div
                className="absolute right-0 top-12 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
                role="menu"
              >

                {/* HEADER */}

                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                        <FaBuilding />
                      </div>

                      <div>

                        <p className="text-xs font-medium text-slate-500">
                          NilB2B
                        </p>

                        <h3 className="font-semibold text-slate-900">
                          {hasBusinessProfile
                            ? businessProfile?.companyName
                            : "Business Account"}
                        </h3>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={closeProfileMenu}
                      className="text-slate-400 hover:text-slate-700"
                      aria-label="Close business menu"
                    >
                      <FaTimes />
                    </button>

                  </div>

                </div>

                {/* NO PROFILE */}

                {!hasBusinessProfile && (
                  <div className="p-4">

                    <p className="mb-4 text-sm leading-6 text-slate-600">
                      Create a business profile to purchase
                      products in bulk, request quotes, and
                      manage your business orders.
                    </p>

                    <Link
                      to="/b2b/business-profile"
                      onClick={closeProfileMenu}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                    >
                      <FaBuilding />
                      Create your Business Profile
                    </Link>

                  </div>
                )}

                {/* PROFILE EXISTS */}

                {hasBusinessProfile && (
                  <div className="p-2">

                    <Link
                      to="/b2b/business-profile"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaBuilding className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          Business Profile
                        </p>

                        <p className="text-xs text-slate-500">
                          Manage your company
                        </p>
                      </div>

                    </Link>

                    <Link
                      to="/b2b/orders"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaShoppingCart className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          Business Orders
                        </p>

                        <p className="text-xs text-slate-500">
                          View your bulk orders
                        </p>
                      </div>

                    </Link>

                    <Link
                      to="/b2b/cart"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaShoppingCart className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          B2B Bulk Cart
                        </p>

                        <p className="text-xs text-slate-500">
                          View your bulk products
                        </p>
                      </div>

                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt />

                      <div>
                        <p className="font-semibold">
                          Logout
                        </p>

                        <p className="text-xs text-red-400">
                          Sign out of your account
                        </p>
                      </div>

                    </button>

                  </div>
                )}

              </div>
            )}

          </div>
           
          </nav>

        </div>
      )}

      {/* =====================================================
          DESKTOP NAVBAR
          Visible ONLY from md (768px) upward
      ====================================================== */}

      <div className="hidden md:block border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-9xl flex-wrap items-center gap-2 px-4 pb-3">

          {/* -------------------------------------------------
              B2B NAVIGATION LINKS
          -------------------------------------------------- */}

          <nav
            className="flex flex-wrap items-center gap-1"
            aria-label="B2B navigation"
          >

            {b2bItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

          {/* -------------------------------------------------
              LANGUAGE
          -------------------------------------------------- */}

          <div className="flex items-center rounded-lg border border-slate-200 bg-white">

            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
              className="cursor-pointer appearance-none bg-transparent px-3 py-2 pr-7 text-sm font-medium text-slate-700 outline-none"
            >

              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              ))}

            </select>

            <FaChevronDown className="pointer-events-none -ml-6 mr-2 text-[10px] text-slate-400" />

          </div>

          {/* -------------------------------------------------
              ORDERING COUNTRY
          -------------------------------------------------- */}

          <div className="flex items-center rounded-lg border border-slate-200 bg-white">

            <select
              value={orderingCountry}
              onChange={handleCountryChange}
              aria-label="Countries to Order From"
              className="cursor-pointer appearance-none bg-transparent px-3 py-2 pr-7 text-sm font-medium text-slate-700 outline-none"
            >

              <option value="" disabled>
                Countries to Order From
              </option>

              {orderingCountries.map((country) => (
                <option
                  key={country.code}
                  value={country.code}
                >
                  {country.name}
                </option>
              ))}

            </select>

            <FaChevronDown className="pointer-events-none -ml-6 mr-2 text-[10px] text-slate-400" />

          </div>

          {/* -------------------------------------------------
              B2B CART
          -------------------------------------------------- */}

          <Link
            to="/b2b/cart"
            title="B2B Bulk Cart"
            aria-label="B2B Bulk Cart"
            className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700 shadow-sm transition hover:bg-cyan-100"
          >

            <FaShoppingCart />

            <span className="absolute -right-1 -top-1 rounded-full bg-cyan-600 px-1.5 py-0.5 text-[9px] font-bold leading-none text-white">
              0
            </span>

            <span className="pointer-events-none absolute right-0 top-full z-50 mt-2 w-max rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
              B2B Bulk Cart
            </span>

          </Link>

          {/* -------------------------------------------------
              BUSINESS PROFILE
          -------------------------------------------------- */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setProfileMenuOpen((open) => !open)
              }
              aria-expanded={profileMenuOpen}
              aria-haspopup="menu"
              aria-label={
                hasBusinessProfile
                  ? "Business Profile"
                  : "Create your Business Profile"
              }
              className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition ${
                hasBusinessProfile
                  ? "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                  : "border-slate-300 bg-white text-slate-600 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
              }`}
            >

              <FaBuilding />

              {!hasBusinessProfile && (
                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
              )}

            </button>

            {/* PROFILE DROPDOWN */}

            {profileMenuOpen && (
              <div
                className="absolute right-0 top-12 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
                role="menu"
              >

                {/* HEADER */}

                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                        <FaBuilding />
                      </div>

                      <div>

                        <p className="text-xs font-medium text-slate-500">
                          NilB2B
                        </p>

                        <h3 className="font-semibold text-slate-900">
                          {hasBusinessProfile
                            ? businessProfile?.companyName
                            : "Business Account"}
                        </h3>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={closeProfileMenu}
                      className="text-slate-400 hover:text-slate-700"
                      aria-label="Close business menu"
                    >
                      <FaTimes />
                    </button>

                  </div>

                </div>

                {/* NO PROFILE */}

                {!hasBusinessProfile && (
                  <div className="p-4">

                    <p className="mb-4 text-sm leading-6 text-slate-600">
                      Create a business profile to purchase
                      products in bulk, request quotes, and
                      manage your business orders.
                    </p>

                    <Link
                      to="/b2b/business-profile"
                      onClick={closeProfileMenu}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                    >
                      <FaBuilding />
                      Create your Business Profile
                    </Link>

                  </div>
                )}

                {/* PROFILE EXISTS */}

                {hasBusinessProfile && (
                  <div className="p-2">

                    <Link
                      to="/b2b/business-profile"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaBuilding className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          Business Profile
                        </p>

                        <p className="text-xs text-slate-500">
                          Manage your company
                        </p>
                      </div>

                    </Link>

                    <Link
                      to="/b2b/orders"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaShoppingCart className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          Business Orders
                        </p>

                        <p className="text-xs text-slate-500">
                          View your bulk orders
                        </p>
                      </div>

                    </Link>

                    <Link
                      to="/b2b/cart"
                      onClick={closeProfileMenu}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaShoppingCart className="text-cyan-600" />

                      <div>
                        <p className="font-semibold">
                          B2B Bulk Cart
                        </p>

                        <p className="text-xs text-slate-500">
                          View your bulk products
                        </p>
                      </div>

                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt />

                      <div>
                        <p className="font-semibold">
                          Logout
                        </p>

                        <p className="text-xs text-red-400">
                          Sign out of your account
                        </p>
                      </div>

                    </button>

                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}