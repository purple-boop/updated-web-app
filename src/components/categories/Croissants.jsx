import { useState } from "react";
import supabase from "../../lib/supabaseClient";

// IMAGE IMPORTS
import csant from "../../elements/csant.jpg";
import csantberry from "../../elements/csantberry.jpg";
import plaincrosini from "../../elements/plaincrosini.jpg";
import crosini from "../../elements/crosini.jpg";

const Croissants = () => {
  const items = [
    {
      name: "Savory Bacon Veggie Croissant",
      price: "₱145",
      desc: "Stuffed with fresh veggies, crispy bacon, and creamy dressing — perfect for a hearty snack.",
      img: csant,
    },
    {
      name: "Strawberry Cream Croissant",
      price: "₱160",
      desc: "Light, flaky pastry filled with whipped cream and sweet fresh strawberries.",
      img: csantberry,
    },
    {
      name: "Classic Plain Croissant",
      price: "₱95",
      desc: "Golden, buttery, and perfectly flaky — the traditional French croissant.",
      img: plaincrosini,
    },
    {
      name: "Almond Choco Croissant",
      price: "₱155",
      desc: "A rich croissant filled with chocolate and topped with almond crunch.",
      img: crosini,
    },
  ];

  const [qty, setQty] = useState(items.map(() => 0));

  const handleQtyChange = (index, value) => {
    const num = Math.max(1, Math.min(10, Number(value))); // limit 1–10
    const updated = [...qty];
    updated[index] = num;
    setQty(updated);
  };

  // ✔ ADD TO CART FUNCTION
  const handleAddToCart = async (item, qty) => {
    if (qty === 0) {
      alert("Please select quantity");
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
      alert("Something went wrong adding to cart!");
    } else {
      alert("✔ Successfully added to cart!");
    }
  };

  return (
    <section className="py-16 px-6 bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-10">
        Croissants 🥐
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
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
                <h2 className="text-xl font-bold text-pink-700">{item.name}</h2>
                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
                <p className="text-pink-600 font-bold text-xl mt-2">
                  {item.price}
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
    </section>
  );
};

export default Croissants;
