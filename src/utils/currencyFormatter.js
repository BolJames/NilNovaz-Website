// ============================================================
// CURRENCY FORMATTER UTILITY
// ============================================================
// Handles currency formatting for different locales and currencies
// Designed to be flexible for future multi-currency support

const currencySymbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  KES: "KSh",
  GHS: "₵",
  NGN: "₦",
};

const currencyFormats = {
  INR: { locale: "en-IN", currency: "INR" },
  USD: { locale: "en-US", currency: "USD" },
  EUR: { locale: "en-EU", currency: "EUR" },
  GBP: { locale: "en-GB", currency: "GBP" },
  KES: { locale: "en-KE", currency: "KES" },
  GHS: { locale: "en-GH", currency: "GHS" },
  NGN: { locale: "en-NG", currency: "NGN" },
};

const currencyToUsd = {
  USD: 1,
  INR: 1 / 83,
  EUR: 1.08,
  GBP: 1.27,
  KES: 1 / 129,
  GHS: 1 / 15,
  NGN: 1 / 1550,
};

const countryCurrencies = {
  KE: "KES",
  GH: "GHS",
  NG: "NGN",
  IN: "INR",
  GB: "GBP",
  AT: "EUR",
  BE: "EUR",
  CY: "EUR",
  DE: "EUR",
  EE: "EUR",
  ES: "EUR",
  FI: "EUR",
  FR: "EUR",
  GR: "EUR",
  IE: "EUR",
  IT: "EUR",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  MT: "EUR",
  NL: "EUR",
  PT: "EUR",
  SI: "EUR",
  SK: "EUR",
};

const getCountryCode = () => {
  if (typeof navigator === "undefined") return "US";

  const localeCountry = navigator.language?.match(/[-_]([A-Z]{2})$/i)?.[1];
  if (localeCountry) return localeCountry.toUpperCase();

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === "Africa/Nairobi") return "KE";

  return "US";
};

export const getLocationCurrency = () => countryCurrencies[getCountryCode()] || "USD";

export const formatLocalizedCurrency = (amount, sourceCurrency = "USD") => {
  if (!amount && amount !== 0) return "";

  const targetCurrency = getLocationCurrency();
  const sourceRate = currencyToUsd[sourceCurrency] || currencyToUsd.USD;
  const targetRate = currencyToUsd[targetCurrency] || currencyToUsd.USD;
  const convertedAmount = amount * sourceRate / targetRate;

  return formatCurrency(convertedAmount, targetCurrency);
};

/**
 * Formats a price value with currency symbol
 * @param {number} amount - The price amount
 * @param {string} currency - Currency code (default: INR)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = "INR") => {
  if (!amount && amount !== 0) return "";

  try {
    const format = currencyFormats[currency] || currencyFormats.INR;
    const formatter = new Intl.NumberFormat(format.locale, {
      style: "currency",
      currency: format.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  } catch (error) {
    // Fallback if locale is not supported
    const symbol = currencySymbols[currency] || "₹";
    return `${symbol}${amount.toLocaleString("en-IN")}`;
  }
};

/**
 * Returns just the currency symbol
 * @param {string} currency - Currency code
 * @returns {string} Currency symbol
 */
export const getCurrencySymbol = (currency = "INR") => {
  return currencySymbols[currency] || "₹";
};

/**
 * Formats a price for display (amount only, no symbol)
 * Used in product cards where symbol is shown separately
 * @param {number} amount - The price amount
 * @param {string} currency - Currency code
 * @returns {string} Formatted amount string
 */
export const formatPrice = (amount, currency = "INR") => {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

/**
 * Calculate discount percentage
 * @param {number} originalPrice - Original price
 * @param {number} currentPrice - Current/sale price
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) {
    return 0;
  }
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Get list of supported currencies
 * @returns {array} Array of currency codes
 */
export const getSupportedCurrencies = () => {
  return Object.keys(currencySymbols);
};

/**
 * Format price with discount information
 * @param {number} currentPrice - Current price
 * @param {number} originalPrice - Original price before discount
 * @param {string} currency - Currency code
 * @returns {object} Object with formatted prices and discount info
 */
export const formatPriceWithDiscount = (
  currentPrice,
  originalPrice,
  currency = "INR"
) => {
  const discount = calculateDiscount(originalPrice, currentPrice);
  return {
    currentPrice: formatCurrency(currentPrice, currency),
    originalPrice: originalPrice > currentPrice ? formatCurrency(originalPrice, currency) : null,
    discount: discount > 0 ? `${discount}%` : null,
    symbol: getCurrencySymbol(currency),
    hasDiscount: discount > 0,
  };
};
