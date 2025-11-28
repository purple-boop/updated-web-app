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
import Carts from "./components/Carts.jsx";
import TermsCondition from "./components/TermsCondition.jsx";
import CustomerService from "./components/CustomerService.jsx";

// Pages (Categories)
import Cakes from "./components/categories/Cakes.jsx";
import Cookies from "./components/categories/Cookies.jsx";
import Croissants from "./components/categories/Croissants.jsx";
import Cupcakes from "./components/categories/Cupcakes.jsx";
import Donuts from "./components/categories/Donuts.jsx";
import Macaroons from "./components/categories/Macaroons.jsx";

function App() {
  const [session, setSession] = useState(null);

  return (
    <Router>
      <Navbar session={session} setSession={setSession} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* PRODUCTS MAIN PAGE */}
        <Route path="/products" element={<Products />} />

        {/* PRODUCT CATEGORY PAGES */}
        <Route path="/products/cakes" element={<Cakes />} />
        <Route path="/products/cookies" element={<Cookies />} />
        <Route path="/products/croissants" element={<Croissants />} />
        <Route path="/products/cupcakes" element={<Cupcakes />} />
        <Route path="/products/donuts" element={<Donuts />} />
        <Route path="/products/macaroons" element={<Macaroons />} />

        <Route
          path="/login"
          element={<Login session={session} setSession={setSession} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
