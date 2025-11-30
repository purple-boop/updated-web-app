import React from "react";

function About() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/elements/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="flex items-center justify-center gap-10">
          {/* LEFT IMAGE */}
          <img
            src="/src/elements/aboutus1.jpg"
            alt="Chocolate Cake"
            className="hidden md:block w-56 h-56 md:w-64 md:h-100 object-cover rounded-xl shadow-2xl"
          />

          {/* ABOUT US BOX */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-10 md:p-12 shadow-2xl max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500 mb-6">
              About Us
            </h1>

            <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-5 text-left">
              <p>
                Our shop started with a heartfelt passion — creating sweet
                treats that bring joy to everyday life. What began as a humble
                kitchen project has grown into a beloved bakery, known for its
                handcrafted cakes, beautiful designs, and unforgettable flavors.
              </p>

              <p>
                We believe every dessert carries a story. Each cake we make is
                crafted with patience, premium ingredients, and attention to
                every detail. From classic favorites to unique signature
                creations, we pour love and creativity into everything we bake.
              </p>

              <p>
                Over the years, we’ve been part of countless birthdays,
                anniversaries, weddings, and celebrations — a privilege we
                cherish deeply. Seeing our customers smile is what inspires us
                to keep improving and exploring more flavors and designs.
              </p>

              <p>
                As we continue to grow, our commitment remains the same: to
                create desserts that don’t just taste amazing, but also create
                beautiful memories. Thank you for choosing us to be part of your
                sweetest moments. We look forward to serving you with even more
                delightful creations.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/src/elements/aboutus2.jpg"
            alt="Red Velvet Cake"
            className="hidden md:block w-56 h-56 md:w-64 md:h-100 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
