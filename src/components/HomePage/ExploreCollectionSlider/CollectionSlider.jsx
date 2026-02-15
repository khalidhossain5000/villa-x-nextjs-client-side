import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";

const CollectionSlider = () => {
  return (
    <div className="container mx-auto">
        {/* title and button */}
      <div className="flex items-center justify-between ">
        {/* Small Label */}
        <div className="title">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-gray-400"></div>
            <p className="text-xs tracking-widest text-gray-500 uppercase font-playfair">
              Recently Added
            </p>
          </div>

          <HomeTitle title={"Explore Collections"} className={"font-raleway"} />
        </div>
        {/* button */}
        <div>
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
  );
};

export default CollectionSlider;
