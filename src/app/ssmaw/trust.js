export default function InvestmentSection() {
    return (
        <div className="relative bg-black text-white py-16 px-8">
            {/* Top horizontal line */}
            <div className="w-full border-t border-gray-500 relative"></div>

            {/* Main content - Single row with vertical line */}
            <div className="max-w-7xl mx-auto md:flex items-center gap-12 mt-8">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="md:text-5xl text-white text-[30px] font-bold leading-tight">
                        Trusted by 1 Lakh+ <br /> Learners
                    </h2>
                </div>

                {/* Vertical Line */}
                <div className="h-24 w-[2px] md:block hidden bg-gray-500"></div>

                {/* Right Content */}
                <div className="flex-1">
                    <p className="text-lg">Here’s what they have to say about us…</p>
                </div>
            </div>

            {/* New 4-column grid with only images */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4  gap-6 mt-[70px]">
                {testimonialImages.map((imgSrc, index) => (
                    <div key={index} className="relative">
                        <img src={imgSrc} alt={`Testimonial ${index + 1}`} className="w-full h-auto  object-cover rounded-[20px] shadow-lg border border-gray-800" />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Image array for testimonials
const testimonialImages = [
    "https://www.finnovationz.com/_next/image?url=%2F1%20copy.webp&w=1920&q=75",
    "https://www.finnovationz.com/_next/image?url=%2F2%20copy.webp&w=1920&q=75",
    "https://www.finnovationz.com/_next/image?url=%2F3%20copy.webp&w=1920&q=75",
    "https://www.finnovationz.com/_next/image?url=%2F4%20copy.webp&w=1920&q=75",
   ];
