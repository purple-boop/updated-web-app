import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // 🔐 GET CURRENT USER
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user || null);
  };

  // 🛒 FETCH CART + JOIN PRODUCTS TABLE
  const fetchCart = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("cart")
      .select(
        `
        id,
        qty,
        product_id,
        products (
          id,
          name,
          price,
          image
        )
      `
      )
      .eq("user_id", user.id)
      .order("id", { ascending: false });

    if (error) {
      console.log("Fetch cart error:", error);
      return;
    }

    console.log("CART RESULT:", data); // Debugging
    setCartItems(data);
  };

  // ❌ REMOVE ITEM
  const handleRemove = async (id) => {
    const { error } = await supabase.from("cart").delete().eq("id", id);

    if (error) {
      alert("Error removing item.");
      console.log(error);
    } else {
      alert("Removed from cart.");
      fetchCart();
    }
  };

  // 💰 TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.products?.price || 0) * Number(item.qty),
    0
  );

  // Load user once
  useEffect(() => {
    getCurrentUser();
  }, []);

  // Load cart after user loads
  useEffect(() => {
    fetchCart();
  }, [user]);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">🛒 My Cart</h1>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* LIST ITEMS */}
          <div className="grid gap-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white shadow rounded flex justify-between items-center gap-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.products?.image}
                    className="w-20 h-20 object-cover rounded"
                    alt={item.products?.name}
                  />

                  <div>
                    <p className="font-bold">{item.products?.name}</p>
                    <p className="text-pink-600 font-semibold">
                      ₱{item.products?.price}
                    </p>
                    <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="bg-white p-4 shadow rounded text-right">
            <p className="text-xl font-bold">
              Total:{" "}
              <span className="text-pink-600">
                ₱{totalPrice.toLocaleString()}
              </span>
            </p>
          </div>

          {/* CHECKOUT BUTTON */}
          <div className="text-right mt-4">
            <button
              onClick={() => (window.location.href = "/checkout")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Carts;
