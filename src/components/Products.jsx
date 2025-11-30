import { Link } from "react-router-dom";

// 🖼️ Import Images
import croissantImg from "../elements/croissant.jpg";
import cakeImg from "../elements/pic.jpg";
import cpckeImg from "../elements/cpcke.jpg";
import donutsImg from "../elements/donuts.jpg";
import macaroonsImg from "../elements/macaroons.jpg";
import cookiesImg from "../elements/cooki.jpg";

const Products = () => {
  const products = [
    {
      name: "Croissants",
      desc: "Freshly baked flaky French pastries.",
      img: croissantImg,
      btn: "Explore Croissants",
      link: "/products/croissants",
    },
    {
      name: "Cakes",
      desc: "Crafted with premium ingredients and love.",
      img: cakeImg,
      btn: "View Cakes",
      link: "/products/cakes",
    },
    {
      name: "Cupcakes",
      desc: "Perfect for celebrations and cravings.",
      img: cpckeImg,
      btn: "Explore Cupcakes",
      link: "/products/cupcakes",
    },
    {
      name: "Donuts",
      desc: "Soft, sweet, and freshly glazed daily.",
      img: donutsImg,
      btn: "View Donuts",
      link: "/products/donuts",
    },
    {
      name: "Macaroons",
      desc: "Delicate and colorful sweet treats.",
      img: macaroonsImg,
      btn: "View Macaroons",
      link: "/products/macaroons",
    },
    {
      name: "Cookies",
      desc: "Soft, chewy, and freshly baked cookies.",
      img: cookiesImg,
      btn: "Explore Cookies",
      link: "/products/cookies",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ⭐ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 py-16 px-6">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12">
          Our Best Sellers 🍰
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h2 className="font-bold text-xl text-pink-700">{item.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                <Link to={item.link}>
                  <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition">
                    {item.btn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
