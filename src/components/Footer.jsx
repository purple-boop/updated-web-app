const Footer = ({ onOpenTerms }) => {
  return (
    <footer
      className="
        bg-gradient-to-r from-rose-300 to-pink-300 py-4 shadow-inner border-t-2 border-rose-200
        fixed bottom-0 left-0 w-full z-50
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col md:flex-row
          justify-center md:justify-between
          items-center
          px-6 gap-10
        "
      >
        {/* LEFT — CONTACT & SOCIALS */}
        <div className="flex flex-col gap-3 text-white items-center md:items-start drop-shadow-sm">
          <h3 className="text-xl font-bold tracking-wide">CONTACT US</h3>

          <div className="flex gap-4 mt-1">
            <img
              src="/src/elements/fb.avif"
              className="h-8 w-8 rounded-full shadow-md border border-white hover:scale-110 transition"
            />
            <img
              src="/src/elements/ig.avif"
              className="h-8 w-8 rounded-full shadow-md border border-white hover:scale-110 transition"
            />
            <img
              src="/src/elements/tiktok.png"
              className="h-8 w-8 rounded-full shadow-md border border-white hover:scale-110 transition"
            />
          </div>
        </div>

        {/* RIGHT — INLINE LINKS */}
        <div className="flex gap-8 text-white font-semibold text-lg">
          <span className="cursor-pointer hover:text-rose-100 transition drop-shadow-sm">
            <a href="/customer-service">Customer Service</a>
          </span>

          <span
            className="cursor-pointer hover:text-rose-100 transition drop-shadow-sm"
            onClick={onOpenTerms}
          >
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
