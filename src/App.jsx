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
import LandingPage from "./components/LandingPage.jsx";

function App() {
  const [session, setSession] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  // Handle login session + Terms popup
  useEffect(() => {
    // Load current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for login / logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);

      if (event === "SIGNED_IN") {
        // Show Terms ONCE per login session
        const hasSeenTerms = sessionStorage.getItem("hasSeenTerms");
        if (!hasSeenTerms) {
          setShowTerms(true);
          sessionStorage.setItem("hasSeenTerms", "true");
        }
      }

      if (event === "SIGNED_OUT") {
        // Clear so it appears again next login
        sessionStorage.removeItem("hasSeenTerms");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar session={session} />

      <Routes>
        {/* LANDING / HOME */}
        <Route
          path="/"
          element={session ? <Homepage /> : <LandingPage session={session} />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login session={session} setSession={setSession} />}
        />

        {/* PRODUCT ROUTES */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/cakes" element={<Cakes />} />
        <Route path="/products/cookies" element={<Cookies />} />
        <Route path="/products/croissants" element={<Croissants />} />
        <Route path="/products/cupcakes" element={<Cupcakes />} />
        <Route path="/products/donuts" element={<Donuts />} />
        <Route path="/products/macaroons" element={<Macaroons />} />

        {/* CHECKOUT & PAYMENT */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* CART - Protected */}
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Carts />
            </RequireAuth>
          }
        />

        {/* PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>

      {/* TERMS POPUP - only shows once per login */}
      <TermsModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        user={session?.user}
      />

      {/* FOOTER */}
      <Footer onOpenTerms={() => setShowTerms(true)} />
    </Router>
  );
}

export default App;
