import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCreditCard, FaMagic, FaSearch, FaShieldAlt, FaTag, FaTruck, FaBoxes} from "react-icons/fa";
import ProductGrid from "../Products/ProductGrid";
import ProductFilters from "../Products/ProductFilters";
import ProductCard from "../Products/ProductCard";
import * as productService from "../../services/productService";

const productSections = {
  stationery: { title: "Stationery & office supplies", description: "Thoughtful essentials for your desk, classroom, and next big idea.", matches: (p) => ["Stationery", "Stationary"].includes(p.category) },
  computers: { title: "Computers", description: "Reliable systems made for focused work and effortless play.", matches: (p) => p.category === "Technology" && p.subcategory === "Computers" },
  electronics: { title: "Electronics", description: "The accessories that make every setup feel complete.", matches: (p) => p.category === "Technology" && p.subcategory === "Accessories" },
  networking: { title: "Networking devices", description: "Keep your team, home, and devices connected with confidence.", matches: (p) => p.category === "Technology" && p.subcategory === "Networking" },
};

const benefits = [
  { icon: FaTruck, title: "Fast delivery", text: "Quick, careful dispatch on every order." },
  { icon: FaShieldAlt, title: "Quality assured", text: "Products checked for quality and authenticity." },
  { icon: FaCreditCard, title: "Secure payments", text: "Simple checkout with trusted payment options." },
];

const StoreProducts = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({});
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const activeSection = productSections[searchParams.get("section")];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await productService.getProducts();
        setAllProducts(products);
        setDisplayedProducts(products.filter((product) => product.available && !product.comingSoon));
        setCategories(await productService.getCategories());
        setPriceRange(await productService.getPriceRange());
      } catch (error) { console.error("Error loading products:", error); }
      finally { setIsLoading(false); }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const applyFilters = async () => {
      try {
        setIsLoading(true);
        let filtered = searchQuery.trim() ? await productService.searchProducts(searchQuery) : [...allProducts];
        if (activeSection) filtered = filtered.filter(activeSection.matches);
        if (activeFilters.categories?.length) filtered = filtered.filter((p) => activeFilters.categories.includes(p.category));
        if (activeFilters.availability?.length) {
          filtered = filtered.filter((p) => (activeFilters.availability.includes("comingSoon") && p.comingSoon) || (activeFilters.availability.includes("outOfStock") && !p.available && !p.comingSoon) || (activeFilters.availability.includes("inStock") && p.available && !p.comingSoon));
        } else if (!activeSection) filtered = filtered.filter((p) => p.available && !p.comingSoon);
        if (activeFilters.minPrice !== undefined) filtered = filtered.filter((p) => p.price >= activeFilters.minPrice);
        if (activeFilters.maxPrice !== undefined) filtered = filtered.filter((p) => p.price <= activeFilters.maxPrice);
        if (activeFilters.sortBy) filtered = productService.sortProducts(filtered, activeFilters.sortBy);
        setDisplayedProducts(filtered);
      } catch (error) { console.error("Error applying filters:", error); }
      finally { setIsLoading(false); }
    };
    applyFilters();
  }, [searchQuery, activeFilters, allProducts, activeSection]);

  const featuredProducts = useMemo(() => allProducts.filter((p) => p.featured && p.available && !p.comingSoon).slice(0, 5), 
  
  [allProducts]);

  return <main 
  
      className=
      "products-page relative overflow-hidden text-slate-100"
 >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden bg-[#120b08]">
      <div className="absolute -left-20 top-8 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-red-700/25 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,166,77,.18),transparent_42%)]"/>
    </div>
    <section className="relative px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} 
      
      className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full 
      border border-white/15 bg-white/10 px-4 py-2
       text-xs font-bold uppercase tracking-[0.16em] 
       text-cyan-100 backdrop-blur-sm">
      <FaMagic className="text-amber-300" /> Curated for every workspace</span>
      <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
        Find your next everyday essential.</h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      A considered collection of stationery, office supplies, and technology for people who make things happen.
      
      </p>
      
      </motion.div>
      <motion.label initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }} 
      className="group mx-auto mt-9 flex max-w-3xl items-center rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-slate-950/25
     transition focus-within:ring-4 focus-within:ring-cyan-300/30"><FaSearch className="ml-3 text-slate-400 transition group-focus-within:text-blue-600" />
     <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by product, category, or SKU" 
     className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base" />
     <span className="hidden rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-500 sm:block">Search</span></motion.label>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} 
      className="mt-6 flex flex-wrap justify-center gap-3"><button onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })} 
      className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold 
      
      text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-200">
        
        Shop collection <FaArrowRight /></button><button onClick={() => document.getElementById("stationery")?.scrollIntoView({ behavior: "smooth" })} 
        className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">Browse stationery</button></motion.div>
    </div></section>
  
    <section id="catalog" className="products-catalog relative px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl p-5 sm:p-7 lg:p-10">
      
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
      className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600"><FaTag />
         The collection</span><h2 className="mt-2 text-3xl font-black tracking-tight 
         text-white/90 sm:text-4xl">{activeSection?.title || "Shop all products"}</h2>
         <p className="mt-2 text-yellow-400 text-3x1 font-extrabold">{activeSection?.description || 
         "Quality tools for your study, work, and everyday life."}</p></div><p className="rounded-full 
         bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">{displayedProducts.length} 
         item{displayedProducts.length !== 1 ? "s" : ""}</p></motion.div>
         
         <div className="space-y-6"><aside className="products-filters">
          <ProductFilters categories={categories} priceRange={priceRange} onFilterChange={setActiveFilters} />
          </aside><ProductGrid products={displayedProducts} isLoading={isLoading} 
         emptyMessage={searchQuery ? `No products found for “${searchQuery}”` : "No products match your filters"} /></div></div></section>
    {!searchQuery && !Object.keys(activeFilters).length && featuredProducts.length > 0 && <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between gap-5"><div>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Loved by customers</span>
        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl text-white/90">Featured picks</h2></div><button onClick={() => navigate("/products")} 
        className="hidden items-center gap-2 text-sm font-bold text-blue-700 sm:flex">View all <FaArrowRight /></button></div>
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 lg:grid-cols-7 lg:gap-3">{featuredProducts.map((p, i) => <ProductCard key={p.id} product={p} 
        index={i} />)}</div></div>
        
    </section>}

    <section className="px-4 pb-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl 
    space-y-16">{Object.entries(productSections).map(([id, section]) => { const products = allProducts.filter(section.matches).slice(0, 5); 
    return products.length ? <motion.section key={id} id={id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, margin: "-80px" }} className="scroll-mt-24"><div className="mb-7 flex items-end justify-between gap-4"><div>
      <h2 className="text-2xl font-extrabold text-white/90 tracking-tight sm:text-3xl">{section.title}</h2><p className="mt-2 text-yellow-400 font-extrabold text-2xl">{section.description}</p>
      </div><span className="hidden text-sm font-semibold text-pink-500 sm:block">{products.length} picks</span></div><div 
      className="grid grid-cols-5 gap-1.5 sm:gap-2 lg:grid-cols-7 lg:gap-3">{products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>
      </motion.section> : null; })}</div></section>
    <section className="products-benefits px-4 py-10 sm:px-6"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
      {benefits.map(({ icon: Icon, title, text }) => <motion.div whileHover={{ y: -3 }} key={title} 
      className="products-benefit-card flex items-start gap-4 rounded-2xl p-5"><span 
      className="products-benefit-card__icon grid h-11 w-11 shrink-0 place-items-center rounded-xl"><Icon /></span><div>
        <h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-5">{text}</p></div></motion.div>)}</div>
        </section>
  
 <div className="products-bulk w-full px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center gap-5 md:gap-6 shadow-lg">

  {/* Icon */}
  <div className="products-bulk__icon flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center">
    <FaBoxes className="text-2xl" />
  </div>

  {/* Content */}
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-lg md:text-xl font-extrabold">
      Need to order in bulk?
    </h3>

    <p className="mt-1 text-sm md:text-base font-extrabold">
      Get competitive pricing and dedicated support for wholesale and bulk orders.
    </p>
  </div>

  {/* Button */}
  <button
    onClick={() => navigate("/b2b")}
    className="flex-shrink-0 inline-flex items-center justify-center gap-2
               px-5 py-2.5 rounded-lg
               products-bulk__button
               font-semibold text-sm
               hover:bg-gray-100
               transition-all duration-200
               hover:shadow-md
               active:scale-95"
               h-50
  >
    Explore NilB2B
    <span>→</span>
  </button>

</div>
  </main>;
};

export default StoreProducts;
