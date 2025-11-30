import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-rose-300 to-pink-300 text-white py-4 shadow-lg sticky top-0 z-50 border-b-2 border-rose-200">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* LEFT SECTION (Desktop) */}
        <div className="hidden md:flex flex-1">
          <ul className="flex w-full justify-between items-center font-semibold text-[19px] pr-10">
            <li>
              <Link to="/login">
                {!session ? (
                  <button className="px-5 py-2 bg-white text-rose-500 rounded-full font-semibold shadow-sm hover:bg-rose-100 transition-all">
                    Login
                  </button>
                ) : (
                  <button className="px-5 py-2 bg-white text-rose-500 rounded-full font-semibold shadow-sm hover:bg-rose-100 transition-all">
                    Log Out
                  </button>
                )}
              </Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer transition">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer transition">
              <Link to="/products">All Products</Link>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-4xl active:scale-90 transition"
          onClick={() => setOpen(!open)}
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* CENTER LOGO */}
        <div className="flex-1 flex justify-center">
          <img
            src="./src/elements/logo.png"
            className="h-14 rounded-full shadow-md border-2 border-white"
            alt="Logo"
          />
        </div>

        {/* RIGHT SECTION (Desktop) */}
        <div className="hidden md:flex flex-1">
          <ul className="flex w-full justify-between items-center font-semibold text-[19px] pl-10">
            <li className="hover:text-rose-100 cursor-pointer transition">
              <Link to="/faqs">FAQs</Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer transition">
              <Link to="/about">About Us</Link>
            </li>

            <li className="cursor-pointer hover:opacity-80 transition">
              <Link to="/cart">
                <img
                  className="h-9 w-9 rounded-full object-cover border border-white shadow"
                  src="/src/elements/cart.png"
                  alt="Cart"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-rose-200 text-rose-900 px-6 overflow-hidden shadow-inner rounded-b-xl transition-all duration-300 ${
          open ? "max-h-[350px] py-4" : "max-h-0"
        }`}
      >
        {/* LOGIN MOBILE */}
        <div className="flex justify-start mb-4">
          <Link to="/login">
            <button className="px-5 py-2 bg-white text-rose-500 rounded-full font-semibold shadow-sm hover:bg-rose-100 transition">
              Login
            </button>
          </Link>
        </div>

        <p className="cursor-pointer font-semibold text-[19px] py-2 hover:text-rose-500 transition">
          <Link to="/">Home</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[19px] py-2 hover:text-rose-500 transition">
          <Link to="/products">All Products</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[19px] py-2 hover:text-rose-500 transition">
          <Link to="/faqs">FAQs</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[19px] py-2 hover:text-rose-500 transition">
          <Link to="/about">About Us</Link>
        </p>

        {/* CART MOBILE */}
        <div className="flex justify-start mt-4">
          <Link to="/cart">
            <img
              className="h-12 w-12 rounded-full object-cover border border-white shadow"
              src="/src/elements/cart.png"
              alt="Cart"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
