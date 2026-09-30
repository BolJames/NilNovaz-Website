
// 1. IMPORTS

// React Hook used to run code when the App component loads.
import { useEffect } from "react";// useEffect is a React Hook that allows you to perform side effects in function components. 
// It runs after the component renders and can be used for tasks like fetching data, setting up subscriptions, or manually changing the DOM.
import Lenis from "lenis";// Lenis is a library that provides smooth scrolling.
// React Router components used to create navigation between pages.
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// 2. IMPORT WEBSITE PAGES
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
import { CartProvider } from "./context/CartContext";// 3. IMPORT CART CONTEXT
import "./App.css";// 4. IMPORT GLOBAL CSS, App.css contains styles that apply to the application.


// ============================================================
// 5. MAIN APP COMPONENT
// ============================================================

// 3 .Import NilB2B landing pages
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

  // ==========================================================
  // 6. LENIS SMOOTH SCROLLING
  // ==========================================================

  // useEffect runs after the App component is rendered.
  //
  // We use it here because Lenis needs to interact with
  // the browser's scrolling system.
  useEffect(() => {

    // Create a new Lenis smooth-scroll instance.
    const lenis = new Lenis({

      // Controls the smoothness/duration of scrolling.
      // Higher values generally make scrolling feel slower
      // and smoother.
      duration: 1.2,
      smoothWheel: true, // Enables smooth scrolling when using the mouse wheel.
    });


    // ========================================================
    // 7. ANIMATION FRAME FUNCTION
    // ========================================================

    // This function continuously updates Lenis.
    //
    // "time" is provided automatically by
    // requestAnimationFrame().
    function raf(time) {
      lenis.raf(time);// Tell Lenis to update the current scroll position.
      requestAnimationFrame(raf);// Ask the browser to run this function again on the next animation frame
                                 
    }


    // Start the animation loop.
    requestAnimationFrame(raf);


    // 8. CLEANUP
  

    // This function runs when the App component is removed.
    //
    // It destroys the Lenis instance so that:
    // - memory isn't wasted
    // - animation loops don't continue running
    // - smooth scrolling is properly cleaned up
    return () => {
      lenis.destroy();
    };

  // Empty dependency array [] means:
  //
  // Run this effect only once when App is mounted.
  }, []);


  // ==========================================================
  // 9. RETURN THE WEBSITE
  // ==========================================================

  return (
  
    // ========================================================
    // 10. CART PROVIDER
    // ========================================================
    
    // Wrap the entire app with CartProvider to enable
    // shopping cart functionality across all pages
    <CartProvider>
      {/* ========================================================
          11. BROWSER ROUTER
          ======================================================== */}

      {/* 
        BrowserRouter enables URL-based navigation in React.

        Example:

        /           -> Home
        /about      -> About
        /services   -> Services
        /products   -> Products
      */}
      <BrowserRouter>

      {/* ====================================================
          11. ROUTES CONTAINER
          ==================================================== */}

      {/* 
        Routes contains all the different routes/pages
        available in the application.
      */}
      <Routes>


        {/* ==================================================
            12. SHARED LAYOUT
            ================================================== */}

        {/* 
          Layout is a parent route.

          Anything placed inside Layout's <Outlet />
          will be displayed inside the Layout.

          This is useful for components that should appear
          on every page, such as:

          Navbar
          Footer
          Background animations
        */}
        <Route element={<Layout />}>


          {/* ================================================
              13. HOME ROUTE
              ================================================ */}

          {/* 
            When the user visits:

            http://localhost:5173/

            React displays the Home component.
          */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* ================================================
              14. ABOUT ROUTE
              ================================================ */}

          {/* 
            URL:

            /about

            Displays the About page.
          */}
          <Route
            path="/about"
            element={<About />}
          />


          {/* ================================================
              15. SERVICES ROUTE
              ================================================ */}

          {/* 
            URL:

            /services

            Displays the Services page.
          */}
          <Route
            path="/services"
            element={<Services />}
          />

          <Route path="/services/software-development" element={<SoftwareDevelopmentRequest />} />
          <Route path="/opportunities/careers" element={<CareerOpportunities />} />
          <Route path="/opportunities/global" element={<CareerOpportunities />} />


          {/* ================================================
              16. PRODUCTS ROUTE
              ================================================ */}

          {/* 
            URL:

            /products

            Displays the Products store page.
          */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* ================================================
              16A. PRODUCT DETAILS ROUTE
              ================================================ */}

          {/* 
            URL:

            /products/:slug

            Displays detailed information for a specific product.
          */}
          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />

          {/* ================================================
              16B. SHOPPING CART ROUTE
              ================================================ */}

          {/* 
            URL:

            /products/cart

            Displays the shopping cart.
          */}
          <Route
            path="/products/cart"
            element={<Cart />}
          />

          {/* ================================================
              16C. CHECKOUT ROUTE
              ================================================ */}

          {/* 
            URL:

            /products/checkout

            Displays the checkout page for placing orders.
          */}
          <Route
            path="/products/checkout"
            element={<Checkout />}
          />
 {/* End of Layout route */}
        </Route>

        
   {/* B2B pages */}
        
  <Route element={<B2BLayout />}>

  <Route path="/b2b" element={<B2BHome />} />

  <Route
    path="/b2b/categories"
    element={<BulkCategories />}
  />

  <Route
    path="/b2b/suppliers"
    element={<Suppliers />}
  />

  <Route
    path="/b2b/deals"
    element={<Deals />}
  />

  <Route
    path="/b2b/shipping-companies"
    element={<ShippingCompanies />}
  />

  <Route
    path="/b2b/request-quote"
    element={<RequestQuote />}
  />

  <Route
    path="/b2b/track-order"
    element={<TrackOrder />}
  />

  <Route
    path="/b2b/how-it-works"
    element={<HowItWorks />}
  />

  <Route
    path="/b2b/bulk-products/:category"
    element={<BulkProducts />}
  />

  <Route
    path="/b2b/cart"
    element={<BulkCart />}
  />

  <Route
    path="/b2b/business-profile"
    element={<BusinessProfile />}
  />

  <Route
    path="/b2b/payment"
    element={<Payment />}
  />

  <Route
    path="/b2b/searchbar"
    element={<B2BSearchBar />}
  />

</Route>
          {/* ================================================
              17. EDUCATION ROUTE
              ================================================ */}

          {/* 
            URL:

            /education

            Displays the Education page.
          */}
          <Route
            path="/education"
            element={<Education />}
          />
          
            <Route path="/blogs" element={<Blogs />} />

              <Route path="/technews" element={<TechNews />} />

          {/* ================================================
              18. CONTACT ROUTE
              ================================================ */}

          {/* 
            URL:

            /contacts

            Displays the Contact page.
          */}
          <Route
            path="/contacts"
            element={<Contact />}
          />

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
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="users" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Users management coming soon.</div>} />
          <Route path="products" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Products management coming soon.</div>} />
          <Route path="orders" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Orders management coming soon.</div>} />
          <Route path="courses" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Courses management coming soon.</div>} />
          <Route path="opportunities" element={<div className="rounded-2xl border border-slate-200 bg-white p-6">Opportunities management coming soon.</div>} />
        </Route>

      {/* End of Routes */}
      </Routes>


    {/* End of BrowserRouter */}
    </BrowserRouter>
    </CartProvider>
  
  );
}


// ============================================================
// 19. EXPORT APP
// ============================================================

// Export App so that main.jsx can import and render it.
export default App;