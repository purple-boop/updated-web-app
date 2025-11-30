import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";

import mc1 from "../../elements/mc1.jpg";
import mc2 from "../../elements/mc2.jpg";
import mc3 from "../../elements/mc3.jpg";
import mc4 from "../../elements/mc4.jpg";

const Macaroons = () => {
  // ✔ REAL SUPABASE IDs (17–20)
  const items = [
    {
      id: 17,
      name: "Pistachio Macaroon",
      price: 85,
      desc: "Crunchy shell with a smooth pistachio cream filling.",
      img: mc1,
    },
    {
      id: 18,
      name: "Raspberry Macaroon",
      price: 95,
      desc: "Sweet and tart raspberry filling wrapped in a delicate cookie shell.",
      img: mc2,
    },
    {
      id: 19,
      name: "Lemon Macaroon",
      price: 90,
      desc: "Bright and zesty lemon cream inside a crisp yellow macaroon.",
      img: mc3,
    },
    {
      id: 20,
      name: "Holiday Macaroon",
      price: 110,
      desc: "Festive macaroon with creamy filling and Christmas-themed design.",
      img: mc4,
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

  const handleQtyChange = (index, value) => {
    let num = Number(value);

    if (num < 0) num = 0;
    if (num > 10) num = 10;

    const updated = [...qty];
    updated[index] = num;
    setQty(updated);
  };

  // ✔ FIXED ADD TO CART
  const handleAddToCart = async (item, quantity) => {
    if (!user) {
      alert("⚠️ Please log in first!");
      return;
    }

    if (quantity < 1) {
      alert("⚠️ Please enter quantity first!");
      return;
    }

    const { error } = await supabase.from("cart").insert([
      {
        user_id: user.id,
        product_id: item.id, // ✔ Correct FK (17–20)
        qty: quantity,
      },
    ]);

    if (error) {
      console.log(error);
      alert("❌ Error adding to cart!");
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

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 py-16 px-6">
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          Macaroons 🥮
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

export default Macaroons;
