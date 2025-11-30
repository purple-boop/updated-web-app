import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";

import ck1 from "../../elements/ck1.jpg";
import ck2 from "../../elements/ck2.jpg";
import ck3 from "../../elements/ck3.jpg";
import ck4 from "../../elements/ck4.jpg";

const Cookies = () => {
  // ✔ REAL SUPABASE PRODUCT IDs (21–24)
  const items = [
    {
      id: 21,
      name: "Caramel Crunch Cookie",
      price: 85,
      desc: "Soft-baked cookie filled with caramel and topped with white chocolate drizzle.",
      img: ck1,
    },
    {
      id: 22,
      name: "Pistachio Bliss Cookie",
      price: 120,
      desc: "Chewy premium cookie loaded with pistachios and a rich nutty flavor.",
      img: ck4,
    },
    {
      id: 23,
      name: "Red Velvet White Choco Cookie",
      price: 110,
      desc: "Moist red velvet cookie packed with creamy white chocolate filling.",
      img: ck3,
    },
    {
      id: 24,
      name: "S’mores Melt Cookie",
      price: 95,
      desc: "Gooey s’mores cookie with toasted marshmallow, chocolate chunks, and graham bits.",
      img: ck2,
    },
  ];

  const [qty, setQty] = useState(items.map(() => 0));
  const [user, setUser] = useState(null);

  // Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    getUser();
  }, []);

  // Qty input handler
  const handleQtyChange = (index, value) => {
    let num = Number(value);
    if (num < 0) num = 0;
    if (num > 10) num = 10;

    const updated = [...qty];
    updated[index] = num;
    setQty(updated);
  };

  // ✔ FIXED ADD TO CART — ONLY VALID COLUMNS
  const handleAddToCart = async (item, selectedQty) => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    if (selectedQty < 1) {
      alert("Please enter quantity first 😊");
      return;
    }

    const { error } = await supabase.from("cart").insert([
      {
        user_id: user.id,
        product_id: item.id, // ✔ Correct FK (21–24)
        qty: selectedQty,
      },
    ]);

    if (error) {
      console.log("Add to cart error:", error);
      alert("❌ Error adding to cart");
    } else {
      alert("✔ Successfully added to cart!");
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
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
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          Cookies 🍪
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <div className="flex gap-6">
                <div className="w-1/2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-lg w-full h-56 object-cover shadow-md"
                  />
                </div>

                <div className="w-1/2 flex flex-col justify-center text-center">
                  <h2 className="text-xl font-bold text-pink-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
                  <p className="text-pink-600 font-bold text-xl mt-2">
                    ₱{item.price}
                  </p>

                  <div className="flex justify-center items-center gap-3 mt-4">
                    <button
                      onClick={() => handleAddToCart(item, qty[index])}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      Add to Cart
                    </button>

                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={qty[index]}
                      onChange={(e) => handleQtyChange(index, e.target.value)}
                      className="w-14 p-1 border border-pink-300 rounded-lg text-center focus:outline-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cookies;
