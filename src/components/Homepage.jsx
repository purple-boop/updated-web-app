import { useEffect, useState } from "react";

const HomePage = () => {
  const slides = [
    "/src/elements/background1.jpg",
    "/src/elements/background2.jpg",
    "/src/elements/background3.avif",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full min-h-[1400px] overflow-hidden">
      {/* BG VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-rose-200/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-10">
        {/* SLIDER */}
        <div className="relative w-[90%] h-[400px] rounded-2xl shadow-xl overflow-hidden mb-28">
          <img
            src={slides[index]}
            className="w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-rose-300/20"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white drop-shadow-xl px-6">
            <h1
              className="text-6xl md:text-6xl font-bold mb-4 tracking-wide"
              style={{
                fontFamily:
                  "Serif, Lucida Calligraphy, Lucida Handwriting, Brush Script MT, cursive",
              }}
            >
              Welcome!
            </h1>

            <p
              className="text-xl md:text-lg font-semibold max-w-[800px] leading-relaxed"
              style={{
                fontFamily:
                  "Serif, Lucida Calligraphy, Lucida Handwriting, Brush Script MT, cursive",
              }}
            >
              Indulge in beautifully crafted cakes and pastries created with
              elegance, sweetness, and a passion for unforgettable moments—
              perfect for every celebration and cherished occasion.
            </p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:scale-110 transition"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:scale-110 transition"
          >
            ❯
          </button>
        </div>

        {/* ⭐ BEST SELLERS BANNER — GRADIENT PINK */}
        <div className="flex justify-center w-full my-3">
          <div className="bg-gradient-to-r from-pink-300 to-rose-300 text-white py-2 px-8 rounded-full shadow-md border border-white select-none">
            <h2
              className=" text-2xl font-bold drop-shadow-sm"
              style={{
                fontFamily:
                  "Serif, Lucida Handwriting, Brush Script MT, cursive",
              }}
            >
              Best Sellers
            </h2>
          </div>
        </div>

        {/* BEST SELLERS CARDS */}
        <div className="max-w-[900px] w-full grid grid-cols-1 md:grid-cols-3 gap-16 px-6 mt-4">
          {[
            {
              img: "/src/elements/cupcake6.jpg",
              title: "Redvelvet Cupcake",
              desc: "Soft red velvet cupcake topped with creamy vanilla frosting.",
            },
            {
              img: "/src/elements/slicecake.jpg",
              title: "Chocolate Cake",
              desc: "Decadent chocolate cake baked to sweet perfection.",
            },
            {
              img: "/src/elements/tart.jpg",
              title: "Raspberry Tart",
              desc: "Fresh raspberries on a buttery tart crust.",
            },
          ].map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        {/* ⭐ WHAT'S NEW BANNER — GRADIENT PINK */}
        <div className="flex justify-center w-full mt-20 mb-3">
          <div className="bg-gradient-to-r from-rose-300 to-pink-300 text-white py-2 px-8 rounded-full shadow-md border border-white select-none">
            <h2
              className="text-2xl font-bold drop-shadow-sm"
              style={{
                fontFamily:
                  "Serif, Lucida Calligraphy, Lucida Handwriting, Brush Script MT, cursive",
              }}
            >
              What's New
            </h2>
          </div>
        </div>

        {/* WHAT'S NEW CARDS */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 mt-4">
          {[
            {
              img: "/src/elements/cupcake.jpg",
              title: "Lemon Cheese Cupcake",
              desc: "Fresh lemon topping with creamy cheesecake base.",
            },
            {
              img: "/src/elements/lemontart.jpg",
              title: "Mini Lemon Meringue Tart",
              desc: "Zesty lemon curd topped with fluffy meringue.",
            },
            {
              img: "/src/elements/donato.jpg",
              title: "Vanilla Bean Cake Donuts",
              desc: "Cake donuts topped with blueberry glaze.",
            },
            {
              img: "/src/elements/tarts2.jpg",
              title: "Mini Cranberry Orange Tarts",
              desc: "Tart cranberry filling with citrus twist.",
            },
            {
              img: "/src/elements/slicecake2.jpg",
              title: "Yellow Velvet Oreo Cheesecake",
              desc: "Rich creamy cheesecake with Oreo crunch.",
            },
          ].map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, title, desc }) => (
  <div className="bg-pink-100 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
    <img src={img} className="w-full h-[150px] object-cover" />
    <div className="p-4 text-center flex flex-col items-center">
      <h3 className="text-lg font-bold mb-1 text-pink-9">{title}</h3>
      <p className="text-gray-700 text-xs">{desc}</p>
    </div>
  </div>
);

export default HomePage;
