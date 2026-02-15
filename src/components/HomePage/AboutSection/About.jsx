import React from "react";
import aboutImg from "../../../assets/Home/about/about.jpg";
const About = () => {
  return (
    <section className="bg-[#ebf3f5] relative">
      <div className="flex relative">
        <div
          style={{ backgroundImage: `url(${aboutImg.src})` }}
          className="w-full xl:w-[60%] py-22 bg-cover bg-center"
        ></div>
        <div className="xl:w-[40%]">
          {/* Content Card */}
          <div className="xl:mt-22 xl:-translate-x-1/2 bg-white max-w-2xl xl:py-30 xl:px-22 p-14 xl:p-0 shadow-xl rounded-lg">
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <p className="text-xs tracking-widest text-gray-500 uppercase">
                Welcome to Villax
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6 text-center lg:text-left">
              Luxury vacation <br /> <span className="font-playfair">rentals worldwide</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover premium stays designed for comfort and elegance.
              Experience world-class amenities, breathtaking views, and
              unforgettable moments in every destination.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Book with confidence and explore curated properties crafted to
              elevate your travel experience.
            </p>

            {/* Button */}
            <button className="group inline-flex items-center">
              <span className="bg-[#8FA6A9] text-white px-6 py-3 text-sm tracking-wide uppercase">
                Learn More
              </span>
              <span className="border border-[#8FA6A9] px-4 py-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-800 group-hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
