import { Link } from "react-router-dom";

// 🖼️ Import Images
import croissantImg from "../elements/croissant.jpg";
import cakeImg from "../elements/pic.jpg";
import cupcakeImg from "../elements/cupcake.jpg";
import donutsImg from "../elements/donuts.jpg";
import macaroonsImg from "../elements/macaroons.jpg";
import cookiesImg from "../elements/cooki.jpg";

const Products = () => {
  const products = [
    {
      name: "Croissants",
      desc: "Indulge in our heavenly sweet treats.",
      img: croissantImg,
      btn: "Explore Pastries",
      link: "/products/croissants",
    },
    {
      name: "Cakes",
      desc: "Freshly baked with premium ingredients.",
      img: cakeImg,
      btn: "View Selection",
      link: "/products/cakes",
    },
    {
      name: "Cupcakes",
      desc: "Crafted for your special celebrations.",
      img: cupcakeImg,
      btn: "Get Custom Cake",
      link: "/products/cupcakes",
    },
    {
      name: "Donuts",
      desc: "Freshly baked with premium ingredients.",
      img: donutsImg,
      btn: "View Selection",
      link: "/products/donuts",
    },
    {
      name: "Macaroons",
      desc: "Freshly baked with premium ingredients.",
      img: macaroonsImg,
      btn: "View Selection",
      link: "/products/macaroons",
    },
    {
      name: "Cookies",
      desc: "Indulge in our heavenly sweet treats.",
      img: cookiesImg,
      btn: "Explore Pastries",
      link: "/products/cookies",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ⭐ BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
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
