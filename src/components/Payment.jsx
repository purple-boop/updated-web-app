import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    loadUser();
  }, []);

  const handlePayment = async () => {
    // DUMMY PAYMENT (always success)
    alert("✔ Payment successful!");

    // Clear user cart
    await supabase.from("cart").delete().eq("user_id", user.id);

    navigate("/payment-success");
  };

  return (
    <section className="p-6 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Payment</h1>

      <p className="mb-6 text-gray-700">
        This is a dummy payment screen. Click the button below to simulate a
        successful payment.
      </p>

      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-xl font-semibold"
      >
        Pay Now (Dummy)
      </button>
    </section>
  );
};

export default Payment;
