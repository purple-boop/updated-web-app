// CustomerService.jsx
const CustomerService = () => {
  return (
    <section className="relative py-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/src/elements/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-rose-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 text-center mb-6">
          Customer Service 💗
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          We're here to help! For any concerns or inquiries, feel free to reach
          out. Our team will respond as soon as possible.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-rose-100">
            <h2 className="text-xl font-bold text-pink-600 mb-2">📞 Hotline</h2>
            <p className="text-gray-700">+63 912 345 6789</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-rose-100">
            <h2 className="text-xl font-bold text-pink-600 mb-2">📧 Email</h2>
            <p className="text-gray-700">bakeshop.support@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-rose-100">
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              🕒 Available
            </h2>
            <p className="text-gray-700">Mon–Sun | 8:00 AM – 10:00 PM</p>
          </div>
        </div>

        {/* Form */}
        <form className="mt-12 grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-rose-200 rounded-xl focus:outline-pink-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-rose-200 rounded-xl focus:outline-pink-500"
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 border border-rose-200 rounded-xl focus:outline-pink-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition shadow-md"
          >
            Send Message 💌
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerService;
