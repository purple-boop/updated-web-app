// const HomePage = () => {
//   return (
//     <section className="w-full bg-rose-200 py-10 md:py-16 px-4">
//       <div className="w-[95%] max-w-[1200px] mx-auto">
//         <div className="relative overflow-hidden rounded-2xl shadow-lg">
//           <img
//             src="/src/elements/background.jpg"
//             alt="cake"
//             className="w-full h-[280px] sm:h-[380px] md:h-[520px] lg:h-[680px] xl:h-[780px] object-cover"
//           />

//           <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
//             <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
//               WELCOME!
//             </h1>

//             <p className="max-w-xl text-[10px] sm:text-sm md:text-base leading-relaxed font-light drop-shadow-lg">
//               Your paragraph text should paint a vivid picture in the minds of
//               your readers...
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePage;

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

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[1400px] overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* PINK OVERLAY */}
      <div className="absolute inset-0 bg-rose-200/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-10">
        {/* SLIDER */}
        <div className="relative w-[75%] h-[400px] rounded-2xl shadow-xl overflow-hidden mb-28">
          <img
            src={slides[index]}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* TEXT INSIDE SLIDER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white drop-shadow-lg px-6">
            <h1
              className="text-6xl md:text-6xl font-bold mb-4"
              style={{
                fontFamily:
                  "Serif, Lucida Calligraphy, Lucida Handwriting, cursive",
              }}
            >
              Welcome!
            </h1>

            <p
              className="text-xl md:text-1xl font-bold max-w-[750px] leading-relaxed"
              style={{
                fontFamily:
                  "Serif, Lucida Calligraphy, Lucida Handwriting, cursive",
              }}
            >
              Indulge in beautifully crafted cakes and pastries created with
              elegance, sweetness, and a passion for unforgettable moments—
              perfect for every celebration and cherished occasion.
            </p>
          </div>

          {/* SLIDER BUTTONS */}
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

        {/* BEST SELLERS TITLE */}
        <h2
          className="text-3xl font-bold text-white drop-shadow-lg mb-1"
          style={{
            fontFamily:
              "Serif, Lucida Calligraphy, Lucida Handwriting, cursive",
          }}
        >
          Best Sellers
        </h2>

        {/* BEST SELLERS CARDS */}
        <div className="max-w-[900px] w-full grid grid-cols-1 md:grid-cols-3 gap-16 px-6 mt-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/cupcake6.jpg"
              className="w-full h-[150px] object-cover"
            />

            {/* Centered details */}
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">Redvelvet Cupcake</h3>
              <p className="text-gray-700 text-xs">
                Soft red velvet cupcake topped with creamy vanilla frosting.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/slicecake.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">Chocolate Cake</h3>
              <p className="text-gray-700 text-xs">
                Decadent chocolate cake baked to sweet perfection.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/tart.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">Raspberry Tart</h3>
              <p className="text-gray-700 text-xs">
                Fresh raspberries on a buttery tart crust.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT'S NEW TITLE */}
        <h2
          className="text-3xl font-bold text-white drop-shadow-lg mt-20 mb-1"
          style={{
            fontFamily:
              "Serif, Lucida Calligraphy, Lucida Handwriting, cursive",
          }}
        >
          What's New
        </h2>

        {/* WHAT'S NEW CARDS — 5 ITEMS */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 mt-4">
          {/* NEW 1 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/cupcake.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">Lemon Cheese Cupcake</h3>
              <p className="text-gray-700 text-xs">
                Fresh lemon topping with creamy cheesecake base.
              </p>
            </div>
          </div>

          {/* NEW 2 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/tarts.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">
                Mini Lemon Meringue Tart
              </h3>
              <p className="text-gray-700 text-xs">
                A bite-sized tart filled with zesty lemon curd and topped with
                fluffy toasted meringue.
              </p>
            </div>
          </div>

          {/* NEW 3 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/donuts.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">
                Vanilla Bean Cake Donuts
              </h3>
              <p className="text-gray-700 text-xs">
                Vanilla Bean Cake Donuts with Blueberry Glaze
              </p>
            </div>
          </div>

          {/* NEW 4 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/tarts2.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">
                Mini Cranberry Orange Tarts
              </h3>
              <p className="text-gray-700 text-xs">
                Tangy cranberry filling paired with a bright orange twist in a
                buttery mini tart shell.
              </p>
            </div>
          </div>

          {/* NEW 5 */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
            <img
              src="/src/elements/slicecake2.jpg"
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-1">
                Yellow Velvet Oreo Cheesecake
              </h3>
              <p className="text-gray-700 text-xs">
                A perfect blend of creamy and rich flavors for cheesecake
                lovers. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
