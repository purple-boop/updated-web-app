// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ session }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-rose-300 text-white py-4 shadow-md sticky top-0 z-50">
//       <div className="w-[90%] mx-auto flex items-center justify-between">
//         {/* LEFT SECTION (Desktop) */}
//         <div className="hidden md:flex flex-1">
//           <ul className="flex w-full justify-between items-center font-medium pr-10">
//             <li className="cursor-pointer">
//               <img
//                 className="h-10 w-10 rounded-full object-cover"
//                 src="/src/elements/search.png"
//                 alt="Search"
//               />
//             </li>
//             <li className="hover:text-rose-100 cursor-pointer">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="hover:text-rose-100 cursor-pointer">
//               <Link to="/products">All Products</Link>
//             </li>
//           </ul>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-3xl active:scale-90 transition"
//           onClick={() => setOpen(!open)}
//         >
//           <i className="ri-menu-line"></i>
//         </button>

//         {/* CENTER LOGO */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src="./src/elements/logo.png"
//             className="h-12 rounded-full"
//             alt="Logo"
//           />
//         </div>

//         {/* RIGHT SECTION (Desktop) */}
//         <div className="hidden md:flex flex-1">
//           <ul className="flex w-full justify-between items-center font-medium pl-10">
//             <li className="hover:text-rose-100 cursor-pointer">
//               <Link to="/faqs">FAQs</Link>
//             </li>
//             <li className="hover:text-rose-100 cursor-pointer">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="cursor-pointer hover:opacity-80">
//               <Link to="/cart">
//                 <img
//                   className="h-7 w-7 rounded-full object-cover"
//                   src="/src/elements/cart.png"
//                   alt="Cart"
//                 />
//               </Link>
//             </li>
//             <li>
//               <Link to="/login">
//                 {!session ? (
//                   <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100">
//                     Login
//                   </button>
//                 ) : (
//                   <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100">
//                     Log Out
//                   </button>
//                 )}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* MOBILE DROPDOWN */}
//       <div
//         className={`md:hidden bg-rose-200 text-rose-900 px-6 overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[350px] py-4" : "max-h-0"
//         }`}
//       >
//         <p className="cursor-pointer font-medium py-2">
//           <Link to="/">Home</Link>
//         </p>
//         <p className="cursor-pointer font-medium py-2">
//           <Link to="/products">All Products</Link>
//         </p>
//         <p className="cursor-pointer font-medium py-2">
//           <Link to="/faqs">FAQs</Link>
//         </p>
//         <p className="cursor-pointer font-medium py-2">
//           <Link to="/about">About Us</Link>
//         </p>

//         <div className="flex items-center justify-between gap-4 mt-4">
//           <Link to="/cart">
//             <img
//               className="h-10 w-10 rounded-full object-cover"
//               src="/src/elements/cart.png"
//               alt="Cart"
//             />
//           </Link>

//           <Link to="/login">
//             <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100">
//               Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-rose-300 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* LEFT SECTION (Desktop) */}
        <div className="hidden md:flex flex-1">
          <ul className="flex w-full justify-between items-center font-semibold text-[20px] pr-10">
            {/* LOGIN MOVED TO LEFT */}
            <li>
              <Link to="/login">
                {!session ? (
                  <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100 text-[18px]">
                    Login
                  </button>
                ) : (
                  <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100 text-[18px]">
                    Log Out
                  </button>
                )}
              </Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer">
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
            className="h-14 rounded-full"
            alt="Logo"
          />
        </div>

        {/* RIGHT SECTION (Desktop) */}
        <div className="hidden md:flex flex-1">
          <ul className="flex w-full justify-between items-center font-semibold text-[20px] pl-10">
            <li className="hover:text-rose-100 cursor-pointer">
              <Link to="/faqs">FAQs</Link>
            </li>

            <li className="hover:text-rose-100 cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>

            {/* CART MOVED TO RIGHT */}
            <li className="cursor-pointer hover:opacity-80">
              <Link to="/cart">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/src/elements/cart.png"
                  alt="Cart"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-rose-200 text-rose-900 px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[350px] py-4" : "max-h-0"
        }`}
      >
        {/* LOGIN MOVED TO TOP ON MOBILE */}
        <div className="flex justify-start mb-4">
          <Link to="/login">
            <button className="px-4 py-1 bg-white text-rose-400 rounded-full font-semibold hover:bg-rose-100 text-[18px]">
              Login
            </button>
          </Link>
        </div>

        <p className="cursor-pointer font-semibold text-[20px] py-2">
          <Link to="/">Home</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[20px] py-2">
          <Link to="/products">All Products</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[20px] py-2">
          <Link to="/faqs">FAQs</Link>
        </p>

        <p className="cursor-pointer font-semibold text-[20px] py-2">
          <Link to="/about">About Us</Link>
        </p>

        {/* CART MOVED TO BOTTOM OF MOBILE */}
        <div className="flex justify-start mt-4">
          <Link to="/cart">
            <img
              className="h-10 w-10 rounded-full object-cover"
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
