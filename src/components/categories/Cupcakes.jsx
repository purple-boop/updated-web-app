import { useState } from "react";
import supabase from "../../lib/supabaseClient";

import cc1 from "../../elements/cc1.jpg";
import cc2 from "../../elements/cc2.jpg";
import cc3 from "../../elements/cc3.jpg";
import cc4 from "../../elements/cc4.jpg";

const Cupcakes = () => {
  const items = [
    {
      name: "Nutty Choco Delight",
      price: "₱85",
      desc: "Rich chocolate cupcake topped with crushed nuts and a swirl of whipped cream.",
      img: cc1,
    },
    {
      name: "Strawberry Velvet Cupcake",
      price: "₱120",
      desc: "Red velvet cupcake filled with sweetness and topped with fresh strawberry goodness.",
      img: cc2,
    },
    {
      name: "Blueberry Swirl Cupcake",
      price: "₱125",
      desc: "Soft vanilla cupcake bursting with blueberry flavor and creamy blueberry icing.",
      img: cc3,
    },
    {
      name: "Biscoff Crumble Cupcake",
      price: "₱135",
      desc: "Moist cupcake topped with creamy Biscoff frosting and cookie crumble for extra crunch.",
      img: cc4,
    },
  ];

  // ⭐ Default qty = 0 for all products
  const [qty, setQty] = useState(items.map(() => 0));

  const handleQtyChange = (index, value) => {
    let num = Number(value);

    // Allow blank as 0
    if (value === "" || num === 0) {
      const updated = [...qty];
      updated[index] = 0;
      return setQty(updated);
    }

    // Block negative values and limit to 10
    num = Math.max(1, Math.min(10, num));

    const updated = [...qty];
    updated[index] = num;
    setQty(updated);
  };

  const handleAddToCart = async (item, qty) => {
    if (qty === 0) {
      alert("⚠️ Please select quantity before adding to cart");
      return;
    }

    const { error } = await supabase.from("cart").insert([
      {
        product_name: item.name,
        price: parseFloat(item.price.replace("₱", "")),
        qty: qty,
        img: item.img,
      },
    ]);

    if (error) {
      alert("❌ Error adding to cart");
      console.log(error);
    } else {
      alert("✔ Successfully added to cart!");
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 py-16 px-6">
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          Cupcakes 🧁
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <div className="flex gap-6">
                {/* IMAGE */}
                <div className="w-1/2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-lg w-full h-56 object-cover shadow-md"
                  />
                </div>

                {/* DETAILS */}
                <div className="w-1/2 flex flex-col justify-center text-center">
                  <h2 className="text-xl font-bold text-pink-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
                  <p className="text-pink-600 font-bold text-xl mt-2">
                    {item.price}
                  </p>

                  {/* BUTTONS */}
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

export default Cupcakes;
