// ============================================================
// PRODUCT CARD SKELETON COMPONENT
// ============================================================
// Loading skeleton for product cards
// Provides visual feedback while data is being fetched

import React from "react";
import { motion } from "framer-motion";

const ProductCardSkeleton = () => {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={shimmer}
      animate="animate"
      className="
        rounded-[16px]
        overflow-hidden
        border
        border-cyan-400/20
        bg-gradient-to-r
        from-slate-800
        via-slate-700
        to-slate-800
        shadow-lg
        h-full
      "
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      {/* Image Skeleton */}
      <div className="w-full aspect-square bg-slate-700 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Category Badge Skeleton */}
        <div className="h-6 w-20 bg-slate-600 rounded-full animate-pulse" />

        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-600 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-slate-600 rounded animate-pulse" />
        </div>

        {/* Rating Skeleton */}
        <div className="h-4 w-32 bg-slate-600 rounded animate-pulse" />

        {/* Price Skeleton */}
        <div className="h-5 w-24 bg-slate-600 rounded animate-pulse" />

        {/* Stock Skeleton */}
        <div className="h-3 w-20 bg-slate-600 rounded animate-pulse" />

        {/* Buttons Skeleton */}
        <div className="flex gap-2 pt-2">
          <div className="flex-1 h-10 bg-slate-600 rounded-lg animate-pulse" />
          <div className="w-10 h-10 bg-slate-600 rounded-lg animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCardSkeleton;
