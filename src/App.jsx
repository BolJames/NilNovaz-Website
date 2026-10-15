import { useEffect } from "react";
import Lenis from "lenis";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import ProductDetails from "./Components/Pages/ProductDetails";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Education from "./Components/Pages/Education";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contacts";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Layout from "./Components/Layout";
import AdminLayout from "./Components/admin/AdminLayout";
import AccountPage from "./pages/AccountPage";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";
import CookiePolicy from "./Components/Pages/CookiePolicy";
import SoftwareDevelopmentRequest from "./Components/Pages/SoftwareDevelopmentRequest";
import CareerOpportunities from "./Components/Pages/CareerOpportunities";
import Blogs from "./Components/Pages/Blog";
import TechNews from "./Components/Pages/TechNews";
import { CartProvider } from "./context/CartContext";
import "./App.css";

import B2BHome from "./Components/NilGloB2B/Pages/B2Bhome";
import BulkCategories from "./Components/NilGloB2B/Pages/BulkCategories";
import Suppliers from "./Components/NilGloB2B/Pages/Suppliers";
import Deals from "./Components/NilGloB2B/Pages/Deals";
import RequestQuote from "./Components/NilGloB2B/Pages/RequestQuote";
import TrackOrder from "./Components/NilGloB2B/Pages/TrackOrder";
import HowItWorks from "./Components/NilGloB2B/Pages/HowItWorks";
import BulkProducts from "./Components/NilGloB2B/Pages/BulkProducts";
import BulkCart from "./Components/NilGloB2B/Pages/BulkCart";
import BusinessProfile from "./Components/NilGloB2B/Pages/BusinessProfile";
import Payment from "./Components/NilGloB2B/Pages/B2BPayment";
import B2BSearchBar from "./Components/NilGloB2B/Pages/B2BSearchBar";
import ShippingCompanies from "./Components/NilGloB2B/Pages/ShippingCompanies";
import B2BLayout from "./Components/NilGloB2B/Pages/B2BLayout";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentRequest />} />
            <Route path="/opportunities/careers" element={<CareerOpportunities />} />
            <Route path="/opportunities/global" element={<CareerOpportunities />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/products/cart" element={<Cart />} />
            <Route path="/products/checkout" element={<Checkout />} />
          </Route>

          <Route element={<B2BLayout />}>
            <Route path="/b2b" element={<B2BHome />} />
            <Route path="/b2b/categories" element={<BulkCategories />} />
            <Route path="/b2b/suppliers" element={<Suppliers />} />
            <Route path="/b2b/deals" element={<Deals />} />
            <Route path="/b2b/shipping-companies" element={<ShippingCompanies />} />
            <Route path="/b2b/request-quote" element={<RequestQuote />} />
            <Route path="/b2b/track-order" element={<TrackOrder />} />
            <Route path="/b2b/how-it-works" element={<HowItWorks />} />
            <Route path="/b2b/bulk-products/:category" element={<BulkProducts />} />
            <Route path="/b2b/cart" element={<BulkCart />} />
            <Route path="/b2b/business-profile" element={<BusinessProfile />} />
            <Route path="/b2b/payment" element={<Payment />} />
            <Route path="/b2b/searchbar" element={<B2BSearchBar />} />
          </Route>

          <Route path="/education" element={<Education />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/technews" element={<TechNews />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />

          <Route path="/orders" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Users management coming soon.</div>} />
            <Route path="products" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Products management coming soon.</div>} />
            <Route path="orders" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Orders management coming soon.</div>} />
            <Route path="courses" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Courses management coming soon.</div>} />
            <Route path="opportunities" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Opportunities management coming soon.</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
