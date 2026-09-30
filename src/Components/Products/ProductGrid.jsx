// ============================================================
// PRODUCT GRID COMPONENT
// ============================================================
// Displays products in a responsive grid layout
// Features:
// - Responsive grid (1-5 columns depending on screen size)
// - Loading skeleton state
// - Empty state handling
// - Error state handling
// - Smooth animations

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = ({
  products = [],
  isLoading = false,
  error = null,
  emptyMessage = "No products found.",
}) => {
  // Show skeletons while loading
  if (isLoading) {
    return (
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
          sm:gap-5
        "
      >
        {[...Array(8)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          col-span-full
          py-16
          px-6
          text-center
          bg-red-500/10
          border
          border-red-500/30
          rounded-[16px]
        "
      >
        <h3 className="text-xl font-bold text-red-400 mb-2">
          Error Loading Products
        </h3>
        <p className="text-red-300 text-sm">{error.message}</p>
      </motion.div>
    );
  }

  // Show empty state
  if (!products || products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          col-span-full
          py-16
          px-6
          text-center
          bg-slate-900/50
          border
          border-cyan-400/20
          rounded-[16px]
        "
      >
        <svg
          className="w-16 h-16 mx-auto mb-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="text-lg font-semibold text-gray-300 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-500 text-sm">
          Try changing your search or filters to find what you're looking for.
        </p>
      </motion.div>
    );
  }

  // Render product grid
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4
        sm:gap-5
      "
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
