import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function B2BSearchBar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      return;
    }

    // Send the search term to the B2B products page.
    navigate(
      `/b2b/categories?search=${encodeURIComponent(trimmedSearch)}`
    );
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      role="search"
    >
      <div className="flex items-center overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100">

        {/* Search Icon */}
        <div className="pl-4 text-slate-400">
          <FaSearch />
        </div>

        {/* Search Input */}
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search bulk products, suppliers..."
          aria-label="Search B2B products and suppliers"
          className="min-w-0 flex-1 px-3 py-3 text-sm text-slate-800 outline-none"
        />

        {/* Clear Button */}
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="px-3 text-slate-400 hover:text-slate-700"
          >
            <FaTimes />
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          Search
        </button>

      </div>
    </form>
  );
}