import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheck, FaEye, FaShoppingBag, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { calculateDiscount, formatLocalizedCurrency } from "../../utils/currencyFormatter";

const ProductCard = ({ product, index = 0 }) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const discount = calculateDiscount(product.originalPrice, product.price);
  const isComingSoon = product.comingSoon;
  const inStock = product.available && !isComingSoon;

  const addToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!inStock || isAdding) return;
    setIsAdding(true);
    addItem(product, 1);
    window.setTimeout(() => setIsAdding(false), 1100);
  };

  return (
    <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }} whileHover={{ y: -4 }} className="group h-full bg-[oklch(70.2%_0.183_293.541)]">
      <Link to={`/products/${product.slug}`} className="block h-full overflow-hidden rounded-lg border border-slate-200 bg-[oklch(90.1%_0.058_230.902)] shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/80 sm:rounded-xl lg:rounded-2xl">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 p-1.5 sm:p-2 lg:p-3">
          <motion.img whileHover={{ scale: 1.07 }} transition={{ duration: 0.45 }} src={product.image} alt={product.name} loading="lazy" className="product-card__image h-full w-full object-contain" />
          {discount > 0 && !isComingSoon && <span className="absolute left-1 top-1 rounded-full bg-rose-500 px-1 py-0.5 text-[7px] font-extrabold text-white sm:left-2 sm:top-2 sm:px-1.5 sm:text-[9px] lg:px-2 lg:py-1 lg:text-[10px]">-{discount}%</span>}
          {isComingSoon && <span className="absolute left-1 top-1 rounded-full bg-slate-900 px-1 py-0.5 text-[7px] font-bold text-white sm:left-2 sm:top-2 sm:px-1.5 sm:text-[9px]">Soon</span>}
          <span className="absolute bottom-2 right-2 hidden h-7 w-7 place-items-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm backdrop-blur transition group-hover:grid"><FaEye size={11} /></span>
        </div>
        <div className="flex min-h-[88px] flex-col p-1.5 sm:min-h-[112px] sm:p-2 lg:min-h-[144px] lg:p-3">
          <span className="hidden w-fit rounded-full bg-[oklch(70.5%_0.213_47.604)] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-blue-700 sm:block lg:text-[9px]">{product.subcategory || product.category}</span>
          <h3 className="line-clamp-2 text-[8px] font-bold leading-3 text-slate-800 transition-colors group-hover:text-blue-700 sm:mt-1 sm:text-[10px] sm:leading-4 lg:mt-2 lg:text-[13px] lg:leading-[18px]">{product.name}</h3>
          {product.rating > 0 && <div className="mt-1 hidden items-center gap-1 text-[9px] sm:flex"><span className="flex gap-0.5 text-amber-400"><FaStar /><span className="font-bold text-slate-600">{product.rating.toFixed(1)}</span></span><span className="hidden text-slate-400 lg:inline">({product.reviews})</span></div>}
          <div className="mt-auto pt-1 sm:pt-2"><div className="flex items-baseline gap-1"><span className="text-[9px] font-black text-slate-900 sm:text-[11px] lg:text-base">{formatLocalizedCurrency(product.price, product.currency)}</span>{discount > 0 && <span className="hidden text-[8px] text-slate-400 line-through lg:inline">{formatLocalizedCurrency(product.originalPrice, product.currency)}</span>}</div>
            <div className="mt-1 sm:mt-2"><button onClick={addToCart} disabled={!inStock || isAdding} aria-label={`Add ${product.name} to cart`} className={`flex w-full items-center justify-center gap-1 rounded-md px-1 py-1 text-[8px] font-bold transition sm:rounded-lg sm:py-1.5 sm:text-[10px] lg:rounded-xl lg:py-2 lg:text-xs ${inStock ? "bg-[oklch(84.1%_0.238_128.85)] text-white hover:bg-blue-700" : "cursor-not-allowed bg-slate-100 text-slate-400"}`}>{isAdding ? <><FaCheck /> <span className="hidden sm:inline">Added</span></> : <><FaShoppingBag /> <span className="hidden sm:inline">{isComingSoon ? "Soon" : inStock ? "Add" : "Sold out"}</span></>}</button></div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
