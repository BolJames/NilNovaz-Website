// ============================================================
// PRODUCT SERVICE LAYER
// ============================================================
// This service layer handles all product-related operations.
// Currently uses mock data from products.js
// Can be replaced with API calls to backend without changing UI components
//
// Usage in components:
// import * as productService from './services/productService';
// const products = await productService.getProducts();

import products from "../data/products";

/**
 * Simulates API delay for realistic async behavior
 * Remove this in production when using real API
 */
const API_DELAY = 300; // milliseconds

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ============================================================
// PRODUCT FETCHING
// ============================================================

/**
 * Get all products
 * Future: GET /api/products
 */
export const getProducts = async () => {
  try {
    await sleep(API_DELAY);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Get a single product by slug
 * Future: GET /api/products/:slug
 */
export const getProductBySlug = async (slug) => {
  try {
    await sleep(API_DELAY);
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      throw new Error(`Product not found: ${slug}`);
    }
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

/**
 * Get product by ID
 * Future: GET /api/products/:id
 */
export const getProductById = async (id) => {
  try {
    await sleep(API_DELAY);
    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Product not found: ${id}`);
    }
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

/**
 * Get all products by category
 * Future: GET /api/products/category/:category
 */
export const getProductsByCategory = async (category) => {
  try {
    await sleep(API_DELAY);
    return products.filter((p) => p.category === category);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

/**
 * Get products by subcategory
 * Future: GET /api/products/subcategory/:subcategory
 */
export const getProductsBySubcategory = async (subcategory) => {
  try {
    await sleep(API_DELAY);
    return products.filter((p) => p.subcategory === subcategory);
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    throw error;
  }
};

/**
 * Get featured products
 * Future: GET /api/products/featured
 */
export const getFeaturedProducts = async () => {
  try {
    await sleep(API_DELAY);
    return products.filter((p) => p.featured === true && p.available === true);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
};

/**
 * Get available products (in stock)
 * Future: GET /api/products?available=true
 */
export const getAvailableProducts = async () => {
  try {
    await sleep(API_DELAY);
    return products.filter((p) => p.available === true && p.comingSoon === false);
  } catch (error) {
    console.error("Error fetching available products:", error);
    throw error;
  }
};

/**
 * Get coming soon products
 * Future: GET /api/products?comingSoon=true
 */
export const getComingSoonProducts = async () => {
  try {
    await sleep(API_DELAY);
    return products.filter((p) => p.comingSoon === true);
  } catch (error) {
    console.error("Error fetching coming soon products:", error);
    throw error;
  }
};

// ============================================================
// PRODUCT SEARCH & FILTERING
// ============================================================

/**
 * Search products by query
 * Searches in name, description, category, and SKU
 * Future: GET /api/products/search?q=query
 */
export const searchProducts = async (query) => {
  try {
    if (!query || query.trim().length === 0) {
      return products;
    }

    await sleep(API_DELAY);
    const lowerQuery = query.toLowerCase();
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.subcategory.toLowerCase().includes(lowerQuery) ||
        p.sku.toLowerCase().includes(lowerQuery)
      );
    });
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

/**
 * Filter products by criteria
 * Future: GET /api/products/filter?category=...&maxPrice=...&rating=...
 */
export const filterProducts = async (filters = {}) => {
  try {
    await sleep(API_DELAY);
    let filtered = [...products];

    // Filter by category
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category)
      );
    }

    // Filter by subcategory
    if (filters.subcategories && filters.subcategories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.subcategories.includes(p.subcategory)
      );
    }

    // Filter by price range
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    // Filter by rating
    if (filters.minRating !== undefined) {
      filtered = filtered.filter((p) => p.rating >= filters.minRating);
    }

    // Filter by availability
    if (filters.availability) {
      if (filters.availability.includes("inStock")) {
        filtered = filtered.filter((p) => p.available && !p.comingSoon);
      }
      if (filters.availability.includes("outOfStock")) {
        filtered = filtered.filter((p) => !p.available && !p.comingSoon);
      }
      if (filters.availability.includes("comingSoon")) {
        filtered = filtered.filter((p) => p.comingSoon);
      }
    }

    // Sort results
    if (filters.sortBy) {
      filtered = sortProducts(filtered, filters.sortBy);
    }

    return filtered;
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error;
  }
};

/**
 * Sort products
 * Options: featured, price-low-high, price-high-low, rating, newest
 */
export const sortProducts = (productList, sortBy) => {
  const sorted = [...productList];

  switch (sortBy) {
    case "featured":
      sorted.sort((a, b) => b.featured - a.featured);
      break;
    case "price-low-high":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high-low":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      // Assuming newer products have higher IDs or index in array
      sorted.reverse();
      break;
    default:
      return sorted;
  }

  return sorted;
};

// ============================================================
// PRODUCT INFORMATION
// ============================================================

/**
 * Get all unique categories
 */
export const getCategories = async () => {
  try {
    const categories = [...new Set(products.map((p) => p.category))];
    return categories.sort();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

/**
 * Get all unique subcategories for a category
 */
export const getSubcategoriesByCategory = async (category) => {
  try {
    const subcategories = [
      ...new Set(
        products.filter((p) => p.category === category).map((p) => p.subcategory)
      ),
    ];
    return subcategories.sort();
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};

/**
 * Get price range
 */
export const getPriceRange = async () => {
  try {
    const prices = products.map((p) => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  } catch (error) {
    console.error("Error fetching price range:", error);
    throw error;
  }
};

/**
 * Get related products (same category or subcategory)
 */
export const getRelatedProducts = async (productId, limit = 4) => {
  try {
    const product = products.find((p) => p.id === productId);
    if (!product) return [];

    await sleep(API_DELAY);
    
    const related = products.filter(
      (p) =>
        p.id !== productId &&
        (p.category === product.category || p.subcategory === product.subcategory)
    );

    return related.slice(0, limit);
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw error;
  }
};

/**
 * Get product recommendations
 * Can be based on ratings, featured status, or random selection
 */
export const getProductRecommendations = async (limit = 6) => {
  try {
    await sleep(API_DELAY);
    
    // Get featured products first
    const featured = products.filter(
      (p) => p.featured && p.available && !p.comingSoon
    );
    
    // Fill up to limit with highest-rated products
    const highestRated = products
      .filter((p) => !p.comingSoon && p.available)
      .sort((a, b) => b.rating - a.rating);

    const recommendations = [...featured];
    for (const product of highestRated) {
      if (recommendations.length >= limit) break;
      if (!recommendations.find((p) => p.id === product.id)) {
        recommendations.push(product);
      }
    }

    return recommendations.slice(0, limit);
  } catch (error) {
    console.error("Error fetching product recommendations:", error);
    throw error;
  }
};
