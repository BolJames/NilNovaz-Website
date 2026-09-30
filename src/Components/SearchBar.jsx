import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;

    // Later this can call your backend API
    console.log("Searching:", query);

    alert(`Searching for: ${query}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-xl"
    >
      <div className="relative flex items-center">

        {/* Search Icon */}
        <FaSearch className="absolute left-5 text-gray-400 text-lg" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search services, products, courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            w-full
            h-12
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            pl-14
            pr-28
            text-white
            placeholder:text-gray-400
            outline-none
            transition-all
            duration-300
            focus:border-[#FBFC13]
            focus:ring-2
            focus:ring-[#FBFC13]/40
            focus:shadow-[0_0_25px_rgba(251,252,19,0.25)]
          "
        />

        {/* Clear Button */}
        {query && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setQuery("")}
            className="
              absolute
              right-24
              text-gray-400
              hover:text-white
            "
          >
            <FaTimes />
          </motion.button>
        )}

        {/* Search Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(19, 46, 252, 0.57)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="
            absolute
            right-1
            h-10
            px-5
            rounded-full
            bg-[#FBFC13]
            text-[#010535]
            font-semibold
            shadow-lg
            transition-all
          "
        >
          Search
        </motion.button>

      </div>
    </motion.div>
  );
}

export default SearchBar;