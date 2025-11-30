// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./lib/supabaseClient";

// Components
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import About from "./components/About.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Products from "./components/Products.jsx";
import CustomerService from "./components/CustomerService.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import RequireAdmin from "./components/RequireAdmin.jsx";

// ADMIN FILES
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AdminAddProduct from "./components/admin/AdminAddProduct.jsx";
import AdminOrders from "./components/admin/AdminOrders.jsx";
import AdminProducts from "./components/admin/AdminProducts.jsx";
import AdminUsers from "./components/admin/AdminUsers.jsx";

import Carts from "./components/Carts.jsx";

// Categories
import Cakes from "./components/categories/Cakes.jsx";
import Cookies from "./components/categories/Cookies.jsx";
import Croissants from "./components/categories/Croissants.jsx";
import Cupcakes from "./components/categories/Cupcakes.jsx";
import Donuts from "./components/categories/Donuts.jsx";
import Macaroons from "./components/categories/Macaroons.jsx";

// Checkout & Payment
import Checkout from "./components/Checkout.jsx";
import Payment from "./components/Payment.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

// Terms Modal
import TermsModal from "./components/TermsModal.jsx";

// Public Landing Page
import LandingPage from "./components/Landingpage.jsx";

function App() {
  const [session, setSession] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  // Handle login session + Terms popup
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);

      if (event === "SIGNED_IN") {
        const hasSeenTerms = sessionStorage.getItem("hasSeenTerms");
        if (!hasSeenTerms) {
          setShowTerms(true);
          sessionStorage.setItem("hasSeenTerms", "true");
        }
      }

      if (event === "SIGNED_OUT") {
        sessionStorage.removeItem("hasSeenTerms");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar session={session} />

      <Routes>
        {/* HOME / LANDING */}
        <Route
          path="/"
          element={session ? <Homepage /> : <LandingPage session={session} />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login session={session} setSession={setSession} />}
        />

        {/* ================== ADMIN ROUTES ================== */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/add" element={<AdminAddProduct />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        {/* ================== PUBLIC PRODUCT ROUTES ================== */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/cakes" element={<Cakes />} />
        <Route path="/products/cookies" element={<Cookies />} />
        <Route path="/products/croissants" element={<Croissants />} />
        <Route path="/products/cupcakes" element={<Cupcakes />} />
        <Route path="/products/donuts" element={<Donuts />} />
        <Route path="/products/macaroons" element={<Macaroons />} />

        {/* ================== CHECKOUT & PAYMENT ================== */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* CART — Protected */}
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Carts />
            </RequireAuth>
          }
        />

        {/* STATIC PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>

      {/* TERMS POPUP */}
      <TermsModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        user={session?.user}
      />

      <Footer onOpenTerms={() => setShowTerms(true)} />
    </Router>
  );
}

export default App;
