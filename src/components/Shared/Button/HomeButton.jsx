import React from "react";

const HomeButton = ({ children,className }) => {
  return (
    <button className={`cursor-pointer bg-linear-to-tl from-[#f9a300] to-[#facc15] shadow-[0px_4px_32px_0_rgba(99,102,241,.10)] px-6 py-2 rounded-full border border-amber-500 text-black font-medium group ${className} text-sm md:text-lg font-semibold md:font-bold`}>
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
      </div>
    </button>
  );
};

export default HomeButton;
