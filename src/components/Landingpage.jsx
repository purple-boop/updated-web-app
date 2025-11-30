// LandingPage.jsx
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LandingPage({ session }) {
  if (session) return <Navigate to="/" replace />;

  const slides = [
    "/src/elements/landingpage3.jpg",
    "/src/elements/landingpage5.jpg",
    "/src/elements/landingpage4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-2xl">
      {/* SLIDING BACKGROUND */}
      <div className="absolute inset-0 top-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4">
          Marah's Bakeshop!
        </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow mb-8">
          Freshly baked treats, pastries, cakes & more — made with love.
        </p>

        <Link to="/login">
          <button className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full shadow-lg text-xl transition transform hover:scale-110">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
