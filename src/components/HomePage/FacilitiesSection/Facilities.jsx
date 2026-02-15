import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
import leftImg from "../../../assets/Home/facilites/left-img.webp";
import rightImg from "../../../assets/Home/facilites/right.webp";
import Image from "next/image";

const cardData = [
  {
    startTitle: "Total Rooms",
    title: "180",
    connector: "+",
    endTitle: "luxury rooms & suites",
  },
  {
    startTitle: "YEARLY VISITORS",
    title: "8500",
    connector: "+",
    endTitle: "happy guests",
  },
  {
    startTitle: "SIGNATURE MENU",
    title: "65",
    connector: "+",
    endTitle: "curated dishes & beverages",
  },
];

const Facilities = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 lg:py-22">
      <div className="titles max-w-4xl mx-auto">
        <h5 className="text-center text-sm lg:text-xl font-raleway text-primary">
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
      <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-6 items-stretch">
        <div style={{backgroundImage:`url(${leftImg.src})`}} className="card bg-cover bg-center rounded-2xl shadow-xl flex-1 min-h-80 lg:min-h-auto">

        </div>
        <div className="card grid grid-cols-1 lg:grid-cols-2 flex-1 gap-8">
          {cardData.map((data, i) => (
            <div key={i} className="flex flex-col justify-around lg:justify-between card bg-cover p-7.5 bg-center rounded-lg shadow-sm h-80 bg-white">
              <h5 className="text-center lg:text-left text-[#59585d] font-semibold uppercase pb-2 border-b border-gray-300">
                Total Rooms
              </h5>

              <div>
                <h1 className="text-center lg:text-left text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#1c1c1d] font-poppins">
                180 <span className="text-primary">+</span>
              </h1>
              <h5 className="text-[#59585d] py-2 font-semibold text-center lg:text-left">luxury rooms & suites</h5>
              </div>
            </div>
          ))}

          <div style={{backgroundImage:`url(${rightImg.src})`}} className="card bg-cover p-7.5 bg-center rounded-2xl shadow-md h-80" >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
