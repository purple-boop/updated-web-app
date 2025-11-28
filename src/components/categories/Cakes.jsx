import { useState } from "react";
import supabase from "../../lib/supabaseClient";

// IMAGE IMPORTS
import chocoRoll from "../../elements/chocoRoll.jpg";
import fruitcake from "../../elements/fruitcake.jpg";
import cakes from "../../elements/cakes.jpg";
import roll from "../../elements/roll.jpg";

const Cakes = () => {
  const items = [
    {
      name: "Chocolate Cake Roll",
      price: "₱350",
      desc: "Rich and moist chocolate roll filled with creamy caramel frosting.",
      img: chocoRoll,
    },
    {
      name: "Fresh Strawberry Cake",
      price: "₱480",
      desc: "Soft vanilla sponge layered with strawberry cream and topped with fresh berries.",
      img: fruitcake,
    },
    {
      name: "Berry Heart Cake",
      price: "₱520",
      desc: "Romantic pink cake decorated with berry hearts and whipped cream swirls.",
      img: cakes,
    },
    {
      name: "Mocha Cream Roll",
      price: "₱380",
      desc: "Soft mocha-flavored roll filled with silky coffee cream.",
      img: roll,
    },
  ];

  const [qty, setQty] = useState(items.map(() => 0));

  const handleQtyChange = (index, value) => {
    const num = Math.max(1, Math.min(10, Number(value)));
    const updated = [...qty];
    updated[index] = num;
    setQty(updated);
  };

  // 👍 WORKING ADD TO CART
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
      alert("Error adding to cart");
    } else {
      alert("✔ Successfully added to cart!");
    }
  };

  return (
    <section className="py-16 px-6 bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-10">
        Cakes 🎂
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
                    min="1"
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

export default Cakes;
