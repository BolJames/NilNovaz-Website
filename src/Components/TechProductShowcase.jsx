// ============================================================
// TECH PRODUCTS SHOWCASE
// ============================================================
// Displays upcoming technology products on the home page
// Gives users a preview of what's coming next

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaLock } from "react-icons/fa";
import * as productService from "../services/productService";
import { formatLocalizedCurrency } from "../utils/currencyFormatter";

const TechProductShowcase = () => {
  const navigate = useNavigate();
  const [comingSoonProducts, setComingSoonProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await productService.getComingSoonProducts();
        setComingSoonProducts(products.slice(0, 4)); // Show only 4 products
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="future-tech-section relative py-20 md:py-28 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40"
          >
            <span className="text-cyan-300 font-semibold text-sm">COMING SOON</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Future Tech Products
          </h2>
          <p className="text-lg text-cyan-200 max-w-2xl mx-auto">
            Explore upcoming technology solutions designed for the modern professional
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {comingSoonProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="reference-card future-tech-card
                  relative
                  rounded-[16px]
                  overflow-hidden
                  border
                  border-cyan-400/30
                  bg-gradient-to-br
                  from-white/10
                  to-white/5
                  backdrop-blur-xl
                  p-6
                  h-full
                  flex
                  flex-col
                  hover:border-cyan-400/60
                  transition-all
                  duration-300
                  group-hover:shadow-[0_0_40px_rgba(0,217,255,.2)]
                "
              >
                {/* Image */}
                <div className="future-tech-card__image relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 h-40 flex items-center justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-4xl opacity-30">📦</div>
                  )}

                  {/* Coming Soon Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaLock size={10} />
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Category */}
                  <p className="text-xs font-semibold text-cyan-400 uppercase mb-2">
                    {product.category}
                  </p>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-4 flex-1 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={12}
                            className={i < Math.round(product.rating) ? "" : "opacity-30"}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        {product.reviews} reviews
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-1">Expected Price</p>
                    <p className="text-2xl font-bold text-cyan-300">
                      {formatLocalizedCurrency(product.price, product.currency)}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled
                  className="
                    w-full
                    py-3
                    rounded-lg
                    bg-gradient-to-r
                    from-cyan-500/30
                    to-blue-600/30
                    text-cyan-300
                    border
                    border-cyan-400/40
                    font-semibold
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    transition-all
                  "
                >
                  Coming Soon
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in learning more about our upcoming technology products? Visit our store to see all available stationery items and stay tuned for the latest releases.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              bg-gradient-to-r
              from-[#FBFC13]
              to-yellow-500
              text-black
              font-bold
              rounded-lg
              hover:shadow-[0_0_30px_rgba(251,252,19,.6)]
              transition-all
            "
          >
            Visit Our Store <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechProductShowcase;
