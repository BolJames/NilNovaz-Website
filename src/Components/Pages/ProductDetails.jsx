// ============================================================
// PRODUCT DETAILS PAGE
// ============================================================
// Detailed product page with:
// - Large product image
// - Full product information
// - Rating and reviews
// - Add to cart functionality
// - Related products
// - Buy now functionality

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import ProductCard from "../Products/ProductCard";
import * as productService from "../../services/productService";
import {
  formatLocalizedCurrency,
  calculateDiscount,
} from "../../utils/currencyFormatter";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [notification, setNotification] = useState("");

  // Load product details
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        const prod = await productService.getProductBySlug(slug);
        setProduct(prod);

        // Load related products
        const related = await productService.getRelatedProducts(prod.id);
        setRelatedProducts(related);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  const handleAddToCart = async () => {
    if (!product || product.comingSoon) return;

    setIsAddingToCart(true);
    addItem(product, quantity);
    setNotification("✓ Added to cart!");

    setTimeout(() => {
      setIsAddingToCart(false);
      setTimeout(() => setNotification(""), 2000);
    }, 600);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => {
      navigate("/products/cart");
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          <p className="text-white mt-4">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all"
          >
            <FaArrowLeft /> Back to Store
          </Link>
        </div>
      </div>
    );
  }

  const discount = calculateDiscount(product.originalPrice, product.price);
  const inStock = product.available && !product.comingSoon;

  return (
    <div className="min-h-screen py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-8 text-gray-400 text-sm"
        >
          <Link to="/products" className="hover:text-cyan-300 transition-colors">
            Store
          </Link>
          <span>/</span>
          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-cyan-300 transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </motion.div>

        {/* Product Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div
              className="
                relative
                w-full
                aspect-square
                rounded-[20px]
                overflow-hidden
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-slate-800
                to-slate-900
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Discount Badge */}
              {discount > 0 && !product.comingSoon && (
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-gradient-to-r
                    from-[#FBFC13]
                    to-yellow-500
                    text-black
                    font-bold
                    px-4
                    py-2
                    rounded-lg
                    shadow-lg
                  "
                >
                  Save {discount}%
                </div>
              )}

              {/* Coming Soon Overlay */}
              {product.comingSoon && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="bg-cyan-500/90 text-white font-bold px-6 py-3 rounded-lg text-center">
                    Coming Soon
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category & SKU */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                  {product.subcategory}
                </span>
                <span className="text-xs text-gray-400">SKU: {product.sku}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating > 0 && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={
                        i < Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-gray-400 text-sm">
                  ({product.reviews} reviews)
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-cyan-300">
                  {formatLocalizedCurrency(product.price, product.currency)}
                </span>
                {discount > 0 && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatLocalizedCurrency(product.originalPrice, product.currency)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400">
                Inclusive of all taxes and charges
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {inStock ? (
                <>
                  <FaCheckCircle className="text-green-400 text-lg" />
                  <span className="text-green-400 font-semibold">
                    In Stock • {product.stock} available
                  </span>
                </>
              ) : product.comingSoon ? (
                <>
                  <FaTimesCircle className="text-cyan-400 text-lg" />
                  <span className="text-cyan-400 font-semibold">
                    Coming Soon
                  </span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-400 text-lg" />
                  <span className="text-red-400 font-semibold">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            {!product.comingSoon && inStock && (
              <div className="flex items-center gap-4">
                <label className="text-white font-semibold">Quantity:</label>
                <div className="flex items-center border border-cyan-400/30 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1))
                      )
                    }
                    className="w-16 h-10 bg-transparent text-center text-white outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={inStock && !isAddingToCart ? { scale: 1.02 } : {}}
                whileTap={inStock && !isAddingToCart ? { scale: 0.98 } : {}}
                onClick={handleAddToCart}
                disabled={!inStock || isAddingToCart}
                className={`
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-4
                  px-6
                  rounded-lg
                  font-bold
                  text-lg
                  transition-all
                  ${
                    inStock
                      ? "bg-gradient-to-r from-[#FBFC13] to-yellow-500 text-black hover:shadow-[0_0_30px_rgba(251,252,19,.6)]"
                      : "bg-gray-700 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                <FaShoppingCart />
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </motion.button>

              {inStock && !product.comingSoon && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  className="
                    flex-1
                    py-4
                    px-6
                    rounded-lg
                    bg-cyan-500/20
                    text-cyan-300
                    border
                    border-cyan-400/50
                    font-bold
                    text-lg
                    hover:bg-cyan-500/30
                    transition-all
                  "
                >
                  Buy Now
                </motion.button>
              )}
            </div>

            {/* Notification */}
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-500/20 border border-green-400/50 text-green-400 px-4 py-3 rounded-lg text-center font-semibold"
              >
                {notification}
              </motion.div>
            )}

            {/* Shipping Info */}
            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-lg p-4 space-y-2">
              <h4 className="font-bold text-cyan-300">Shipping & Delivery</h4>
              <p className="text-sm text-gray-400">
                Free delivery on orders above ₹500. Estimated delivery: 3-5 business days.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              {relatedProducts.map((relProduct, index) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Back to Store */}
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all font-semibold"
          >
            <FaArrowLeft /> Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
