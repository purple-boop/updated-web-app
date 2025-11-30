import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";

const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // 🔹 Get logged-in user
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  const fetchCart = async () => {
    if (!user) return; // Wait for user

    const { data, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id) // ⭐ REQUIRED
      .order("id", { ascending: false });

    if (!error) setCartItems(data);
  };

  const handleRemove = async (id) => {
    const { error } = await supabase.from("cart").delete().eq("id", id);

    if (!error) {
      alert("Removed from cart");
      fetchCart();
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    fetchCart();
  }, [user]);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white shadow rounded flex gap-4 justify-between items-center"
              >
                <div className="flex gap-4">
                  <img
                    src={item.img}
                    className="w-20 h-20 object-cover rounded"
                    alt={item.product_name}
                  />
                  <div>
                    <p className="font-bold">{item.product_name}</p>
                    <p className="text-pink-600 font-semibold">₱{item.price}</p>
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

          <div className="bg-white p-4 shadow rounded text-right">
            <p className="text-xl font-bold">
              Total: <span className="text-pink-600">₱{totalPrice}</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Carts;
