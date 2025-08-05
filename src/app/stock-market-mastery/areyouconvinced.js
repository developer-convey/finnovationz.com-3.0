export default function AreYouConvinced({ scrollToContact }) {
  return (
    <section className="relative w-full py-12 px-6 bg-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Pattern (Left) */}
        <svg
          className="absolute left-0 top-0 md:w-48 w-[150px] h-[150px] md:h-48 md:rotate-0 opacity-50 sm:transform  -translate-x-1/2 rotate-12 -translate-y-1/2"
          viewBox="0 0 200 200"
        >
          <pattern id="dots-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#A7DAF5"></circle>
          </pattern>
          <rect width="200" height="200" fill="url(#dots-pattern)"></rect>
        </svg>

        {/* Small Pattern (Center) */}
        <svg
          className="absolute md:left-[700px] left-[50%] top-[10px] rotate-12  w-20 h-20 opacity-50 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <rect width="100" height="100" fill="url(#dots-pattern)"></rect>
        </svg>

        <svg
          className="absolute md:left-[500px] left-[30%] top-[140px] rotate-12 w-20 h-20 opacity-50 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <rect width="100" height="100" fill="url(#dots-pattern)"></rect>
        </svg>

        {/* Rotated Pattern (Right) */}
        <svg
          className="absolute right-[-100px] md:right-0 md:bottom-0 md:w-48 w-[150px] h-[150px] md:h-48 opacity-50 rotate-12"
          viewBox="0 0 200 200"
        >
          <rect width="200" height="200" fill="url(#dots-pattern)"></rect>
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 md:w-[1080px] mx-auto items-center max-w-6xl">
        {/* Left Text */}
        <h2 className="text-2xl md:text-2xl font-semibold text-gray-900 text-center md:text-left">
          Are You Convinced?
        </h2>

        {/* Button */}
        <button onClick={scrollToContact} className="w-full md:w-[250px] px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition-all">
          Yes, Book My Seat
        </button>
      </div>
    </section>
  );
}