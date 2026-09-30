import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaSlidersH, FaTimes } from "react-icons/fa";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low-high", label: "Price: low to high" },
  { value: "price-high-low", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" },
  { value: "newest", label: "Newest arrivals" },
];

const ProductFilters = ({ categories = [], priceRange = { min: 0, max: 100000 }, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({ categories: [], availability: [], minPrice: priceRange.min, maxPrice: priceRange.max, sortBy: "featured" });
  useEffect(() => setFilters((current) => ({ ...current, minPrice: current.minPrice || priceRange.min, maxPrice: current.maxPrice || priceRange.max })), [priceRange.min, priceRange.max]);
  const update = (next) => { setFilters(next); onFilterChange(next); };
  const toggle = (key, value) => update({ ...filters, [key]: filters[key].includes(value) ? filters[key].filter((item) => item !== value) : [...filters[key], value] });
  const reset = () => update({ categories: [], availability: [], minPrice: priceRange.min, maxPrice: priceRange.max, sortBy: "featured" });
  const activeCount = filters.categories.length + filters.availability.length + Number(filters.minPrice > priceRange.min) + Number(filters.maxPrice < priceRange.max) + Number(filters.sortBy !== "featured");
  const content = <div className="space-y-7">
    <div><p className="mb-3 text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">Sort by</p><select value={filters.sortBy} onChange={(e) => update({ ...filters, sortBy: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">{sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
    <FilterGroup label="Category">{categories.map((category) => <CheckOption key={category} checked={filters.categories.includes(category)} onChange={() => toggle("categories", category)} label={category} />)}</FilterGroup>
    <FilterGroup label="Price range"><div className="space-y-4"><RangeInput label="Minimum" value={filters.minPrice} min={priceRange.min} max={filters.maxPrice} onChange={(value) => update({ ...filters, minPrice: Number(value) })} /><RangeInput label="Maximum" value={filters.maxPrice} min={filters.minPrice} max={priceRange.max} onChange={(value) => update({ ...filters, maxPrice: Number(value) })} /></div></FilterGroup>
    <FilterGroup label="Availability"><CheckOption checked={filters.availability.includes("inStock")} onChange={() => toggle("availability", "inStock")} label="In stock" /><CheckOption checked={filters.availability.includes("outOfStock")} onChange={() => toggle("availability", "outOfStock")} label="Out of stock" /><CheckOption checked={filters.availability.includes("comingSoon")} onChange={() => toggle("availability", "comingSoon")} label="Coming soon" /></FilterGroup>
    {activeCount > 0 && <button onClick={reset} className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"><FaTimes /> Reset filters</button>}
  </div>;
  return <><button onClick={() => setIsOpen(!isOpen)} className="products-filter-toggle flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold"><span className="flex items-center gap-2"><FaSlidersH /> Filters {activeCount > 0 && `(${activeCount})`}</span><FaChevronDown className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} /></button><div className="products-filter-panel hidden rounded-2xl p-5 lg:block"><div className="mb-6 flex items-center gap-2 text-base font-black"><FaSlidersH /> Refine results</div>{content}</div><AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="products-filter-panel mt-3 overflow-hidden rounded-2xl p-5 lg:hidden">{content}</motion.div>}</AnimatePresence></>;
};

const FilterGroup = ({ label, children }) => <div className="border-t border-slate-200 pt-6"><p className="mb-3 text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">{label}</p><div className="space-y-2.5">{children}</div></div>;
const CheckOption = ({ checked, onChange, label }) => <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-slate-600"><input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-slate-300 accent-blue-600" />{label}</label>;
const RangeInput = ({ label, value, min, max, onChange }) => <label className="block"><span className="mb-2 flex justify-between text-xs font-semibold text-slate-500"><span>{label}</span><span>₹{Number(value).toLocaleString()}</span></span><input type="range" min={min} max={max} value={value} onChange={(e) => onChange(e.target.value)} className="w-full accent-blue-600" /></label>;

export default ProductFilters;
