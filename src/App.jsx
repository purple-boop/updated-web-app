// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// Components
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/Homepage.jsx";
import About from "./components/About.jsx";
import Faqs from "./components/Faqs.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Products from "./components/Products.jsx";
import CustomerService from "./components/CustomerService.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

// Pages
import Carts from "./components/Carts.jsx";

// Categories
import Cakes from "./components/categories/Cakes.jsx";
import Cookies from "./components/categories/Cookies.jsx";
import Croissants from "./components/categories/Croissants.jsx";
import Cupcakes from "./components/categories/Cupcakes.jsx";
import Donuts from "./components/categories/Donuts.jsx";
import Macaroons from "./components/categories/Macaroons.jsx";

// ⭐ Terms Modal
import TermsModal from "./components/TermsModal.jsx";

function App() {
  const [session, setSession] = useState(null);

  // ⭐ Popup controller
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Router>
      <Navbar session={session} setSession={setSession} />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/cakes" element={<Cakes />} />
        <Route path="/products/cookies" element={<Cookies />} />
        <Route path="/products/croissants" element={<Croissants />} />
        <Route path="/products/cupcakes" element={<Cupcakes />} />
        <Route path="/products/donuts" element={<Donuts />} />
        <Route path="/products/macaroons" element={<Macaroons />} />

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login session={session} setSession={setSession} />}
        />

        {/* PROTECTED CART PAGE */}
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Carts />
            </RequireAuth>
          }
        />

        {/* INFO PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>

      {/* ⭐ POPUP MODAL */}
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />

      {/* ⭐ FOOTER that opens modal */}
      <Footer onOpenTerms={() => setShowTerms(true)} />
    </Router>
  );
}

export default App;
