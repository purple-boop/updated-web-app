import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    loadUser();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      if (!user) return;

      const { data } = await supabase
        .from("cart")
        .select(
          `
          id,
          qty,
          product_id,
          products (
            name,
            price,
            image
          )
        `
        )
        .eq("user_id", user.id);

      setItems(data || []);
    };

    loadCart();
  }, [user]);

  const total = items.reduce((sum, i) => sum + i.qty * i.products.price, 0);

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg p-4 shadow mb-6">
            {items.map((i) => (
              <div key={i.id} className="flex justify-between border-b py-3">
                <span>
                  {i.products.name} (x{i.qty})
                </span>
                <span>₱{i.products.price * i.qty}</span>
              </div>
            ))}

            <h2 className="text-xl font-bold text-right mt-4">
              Total: ₱{total}
            </h2>
          </div>

          <button
            onClick={() => navigate("/payment")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-semibold"
          >
            Continue to Payment
          </button>
        </>
      )}
    </section>
  );
};

export default Checkout;
