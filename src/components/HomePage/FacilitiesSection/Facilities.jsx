"use client";
import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
import leftImg from "../../../assets/Home/facilites/left-img.webp";
import rightImg from "../../../assets/Home/facilites/right.webp";
import Image from "next/image";
import CountUp from "@/components/Shared/CountUp/CountUp";
import { motion } from "framer-motion";

const cardData = [
  {
    startTitle: "Total Rooms",
    title: 180,
    connector: "+",
    endTitle: "luxury rooms & suites",
    animatedTexti: "#VillaX #ROOMS #TRAVEL #TOTAL ",
    animatedTextii: "#VillaX #SEA #TRAVEL #MOUNTAIN #RENT #BOOK",
    connector: "+",
  },
  {
    startTitle: "YEARLY VISITORS",
    title: 8500,
    connector: "+",
    endTitle: "happy guests",
    animatedTexti: "#VillaX #VISITORS  #RESORT #VISIT",
    animatedTextii: "#VillaX  #TRAVEL #YEARLY #GUEST ",
    connector: "+",
  },
  {
    startTitle: "SIGNATURE MENU",
    title: 65,
    connector: "+",
    endTitle: "curated dishes & beverages",
    animatedTexti: "#VillaX #SIGNATURE #MENU #VIEW #BEACH ",
    animatedTextii: "#VillaX  #FOOD #HOTEL #ROOMS",
    connector: "+",
  },
];

const Facilities = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 lg:py-22 relative">
      {/* Peachy Sunrise Glow Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(180deg, 
          rgba(255,247,237,1) 0%, 
          rgba(255,237,213,0.8) 25%, 
          rgba(254,215,170,0.6) 50%, 
          rgba(251,146,60,0.4) 75%, 
          rgba(249,115,22,0.3) 100%
        ),
        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(254,215,170,0.5) 0%, transparent 50%),
        radial-gradient(circle at 60% 60%, rgba(252,165,165,0.3) 0%, transparent 45%)
      `,
        }}
      />

      {/* Azure Depths */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #002e03 100%)",
        }}
      />

      <div className="relative z-40 titles max-w-4xl mx-auto">
        <h5 className="text-center text-sm lg:text-xl font-raleway text-primary dark:text-[#f9a300]">
          Welcome To VillaX
        </h5>
        <HomeTitle
          title={"Hotel Facilities"}
          className={"text-center font-playfair py-1 md:py-3 lg:py-6"}
        />
        <p className="max-w-2xl mx-auto text-center font-medium text-sm lg:text-xl text-[#59585d]">
          From premium rooms to full-service amenities, our team ensures a
          comfortable and memorable stay from check-in to check-out.
        </p>
      </div>
      {/* main big card and grid layout */}
      <div className="relative z-40 container mx-auto py-12 flex flex-col lg:flex-row gap-6 items-stretch">
        <div
          style={{ backgroundImage: `url(${leftImg.src})` }}
          className="card bg-cover bg-center rounded-2xl shadow-xl flex-1 min-h-80 lg:min-h-auto"
        ></div>
        <div className="card grid grid-cols-1 lg:grid-cols-2 flex-1 gap-8">
          {cardData.map((data, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col justify-around lg:justify-between card bg-cover p-7.5 bg-center rounded-lg shadow-md h-80 bg-linear-to-tr from-[#f98d00] to-[#f9a300] border border-[#f0f708] dark:border-stone-600 dark:from-[#0a121f] dark:to-[#0a0e16db] relative  bg-transparent  py-6   hover:border-primary/50 transition-all relative overflow-hidden group "
            >
              <h5 className="text-center lg:text-left text-[#000000] dark:text-[#f5f9ff] font-semibold uppercase pb-2 border-b border-[#f0f708] dark:border-gray-600 ">
                {data.startTitle}
              </h5>

              <div>
                <h1 className="text-center lg:text-left text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#1c1c1d] font-poppins dark:text-[#f5f9ff]">
                  <span className="tabular-nums inline-block min-w-[140px] text-right">
                    <CountUp to={data.title} duration={5} />
                  </span>
                  <span className="text-[#f0f708] dark:text-[#fa9700] pl-6 ">
                    {data.connector}
                  </span>
                </h1>
                <h5 className="text-[#59585d] dark:text-slate-100 py-2 font-semibold text-center lg:text-left">
                  {data.endTitle}
                </h5>
              </div>

              {/* animtaed bg text scroll */}

              {/* Background Scrolling Tags with Edge Fading */}
              <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.09] pointer-events-none flex flex-col justify-center gap-2 rotate-[-5deg] scale-110">
                {/* Gradient Mask to fade text at edges */}
                <div className="absolute inset-0 bg-linear-to-r from-[#133863] via-transparent to-[#0084fb] z-10" />

                <motion.div
                  animate={{ x: [0, -400] }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="whitespace-nowrap text-6xl font-black text-foreground uppercase"
                >
                  {data?.animatedTexti}
                </motion.div>

                <motion.div
                  animate={{ x: [-400, 0] }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="whitespace-nowrap text-6xl font-black text-foreground uppercase"
                >
                  {data?.animatedTextii}
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div
            style={{ backgroundImage: `url(${rightImg.src})` }}
            className="card bg-cover p-7.5 bg-center rounded-2xl shadow-md h-80"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
