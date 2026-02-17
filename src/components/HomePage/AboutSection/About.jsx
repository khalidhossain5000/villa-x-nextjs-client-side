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
          <div className="xl:mt-22 xl:-translate-x-1/2 bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-stone-800 max-w-2xl xl:py-30 xl:px-22 p-14 xl:p-0 shadow-xl rounded-lg">
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <p className="text-xs tracking-widest text-gray-900 dark:text-[#f5f9ff] uppercase">
                Welcome to Villax
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6 text-center lg:text-left dark:text-[#f5f9ff]">
              Luxury vacation <br />{" "}
              <span className="font-playfair">rentals worldwide</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-900 dark:text-[#f5f9ff] leading-relaxed mb-6">
              Discover premium stays designed for comfort and elegance.
              Experience world-class amenities, breathtaking views, and
              unforgettable moments in every destination.
            </p>

            <p className="text-gray-900 dark:text-[#f5f9ff] leading-relaxed mb-8">
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


<button
  class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
>
  <div
    class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]"
  >
    <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
  </div>
  <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
  <div
    class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"
  ></div>
  <div
    class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"
  ></div>
  <div
    class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"
  ></div>
  <div
    class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"
  ></div>
  <div class="relative flex items-center justify-center gap-2">
    <span
      class="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter"
    >
      Gradient Button
    </span>
  </div>
  <div
    class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"
  ></div>
</button>

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
