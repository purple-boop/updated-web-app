const PaymentSuccess = () => {
  return (
    <section className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✔ Payment Successful!
      </h1>

      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order is being prepared.
      </p>

      <a
        href="/"
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg"
      >
        Back to Home
      </a>
    </section>
  );
};

export default PaymentSuccess;
