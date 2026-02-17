import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
import leftImg from "../../../assets/Home/facilites/left-img.webp";
import rightImg from "../../../assets/Home/facilites/right.webp";
import Image from "next/image";
import CountUp from "@/components/Shared/CountUp/CountUp";

const cardData = [
  {
    startTitle: "Total Rooms",
    title: 180,
    connector: "+",
    endTitle: "luxury rooms & suites",
  },
  {
    startTitle: "YEARLY VISITORS",
    title: 8500,
    connector: "+",
    endTitle: "happy guests",
  },
  {
    startTitle: "SIGNATURE MENU",
    title: 65,
    connector: "+",
    endTitle: "curated dishes & beverages",
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
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #002e03 100%)",
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
            <div
              key={i}
              className="flex flex-col justify-around lg:justify-between card bg-cover p-7.5 bg-center rounded-lg shadow-sm h-80 bg-white"
            >
              <h5 className="text-center lg:text-left text-[#59585d] font-semibold uppercase pb-2 border-b border-gray-300 ">
                {data.startTitle}
              </h5>

              <div>
                <h1 className="text-center lg:text-left text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#1c1c1d] font-poppins">
                   <CountUp to={data.title} duration={5}/><span className="text-primary">+</span>
                </h1>
                <h5 className="text-[#59585d] dark:text-slate-100 py-2 font-semibold text-center lg:text-left">
                  {data.endTitle}
                </h5>
              </div>
            </div>
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
