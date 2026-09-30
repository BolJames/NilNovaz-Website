import { categories, currencies, orders, products, rfqs, shippingOptions, suppliers } from '../data/mockData';

const delay = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 180));

export const apiClient = {
  get: (endpoint) => delay(endpointData(endpoint)),
  post: (endpoint, payload) => delay({ success: true, data: payload, endpoint }),
  put: (endpoint, payload) => delay({ success: true, data: payload, endpoint }),
  delete: (endpoint, id) => delay({ success: true, id, endpoint }),
};

function endpointData(endpoint) {
  const map = {
    '/products': products,
    '/categories': categories,
    '/suppliers': suppliers,
    '/orders': orders,
    '/rfqs': rfqs,
    '/payments': [],
    '/shipments': shippingOptions,
    '/currencies': currencies,
    '/auth': { status: 'mock' },
  };

  return map[endpoint] ?? [];
}

export const productService = {
  list: () => apiClient.get('/products'),
  getById: (id) => apiClient.get('/products').then((items) => items.find((item) => item.id === id) || null),
  getByCategory: (slug) =>
    apiClient.get('/products').then((items) => {
      if (!slug) return items;
      return items.filter((item) => item.category.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase());
    }),
};

export const supplierService = {
  list: () => apiClient.get('/suppliers'),
  getById: (id) => apiClient.get('/suppliers').then((items) => items.find((item) => item.id === id) || null),
};

export const categoryService = {
  list: () => apiClient.get('/categories'),
};

export const orderService = {
  list: () => apiClient.get('/orders'),
};

export const quotationService = {
  list: () => apiClient.get('/rfqs'),
  submit: (payload) => apiClient.post('/rfqs', { ...payload, status: 'Draft' }),
};

export const shippingService = {
  getOptions: () => apiClient.get('/shipments'),
  calculateShipping: ({ originCountry, destinationCountry, destinationCity, productWeight, quantity, shippingMethod }) => {
    const base = {
      originCountry,
      destinationCountry,
      destinationCity,
      productWeight,
      quantity,
      shippingMethod,
      estimate: 'Mock pricing only',
      total: 280 + (productWeight || 0) * 2 + (quantity || 0) * 0.5,
      currency: 'USD',
    };
    return delay(base);
  },
};

export const paymentService = {
  getAvailableMethods: ({ buyerCountry, supplierCountry, currency, orderAmount }) => {
    const methods = [
      'Bank Transfer',
      'Card',
      'Escrow',
      'Supplier-specific payment',
      'Mobile Money',
    ];

    return delay({
      buyerCountry,
      supplierCountry,
      currency,
      orderAmount,
      methods: methods.filter((method) => (orderAmount > 2000 ? method !== 'Mobile Money' : true)),
    });
  },
};

export const currencyService = {
  list: () => apiClient.get('/currencies'),
  getExchangeRate: (fromCurrency, toCurrency) => {
    const rates = {
      USD: { USD: 1, SSP: 4800, INR: 83.5, AED: 3.67, CNY: 7.25 },
      SSP: { USD: 0.000208, SSP: 1, INR: 0.0174, AED: 0.00076, CNY: 0.00151 },
      INR: { USD: 0.01196, SSP: 57.5, INR: 1, AED: 0.044, CNY: 0.0868 },
      AED: { USD: 0.272, SSP: 1307, INR: 22.8, AED: 1, CNY: 1.98 },
      CNY: { USD: 0.138, SSP: 662, INR: 11.53, AED: 0.505, CNY: 1 },
    };

    return delay({ fromCurrency, toCurrency, rate: rates[fromCurrency]?.[toCurrency] ?? 1 });
  },
};

export const authService = {
  login: (payload) => delay({ success: true, user: { role: 'buyer', ...payload } }),
  signup: (payload) => delay({ success: true, user: { role: 'buyer', ...payload } }),
};

export const marketplaceService = {
  products: productService.list,
  product: productService.getById,
  suppliers: supplierService.list,
  categories: categoryService.list,
  shipping: shippingService.getOptions,
  submitRFQ: quotationService.submit,
};
