import React from "react";
import hiking from "../../../assets/Home/Info/Main-custom-icon-1.png";
import climbing from "../../../assets/Home/Info/Main-custom-icon-2.png";
import walking from "../../../assets/Home/Info/Main-custom-icon-3.png";
import cycling from "../../../assets/Home/Info/Main-custom-icon-4.png";
import canoeing from "../../../assets/Home/Info/Main-custom-icon-5.png";
import orienteering from "../../../assets/Home/Info/Main-custom-icon-6.png";
import Image from "next/image";
const Info = () => {
  const activities = [
    {
      title: "Hiking",
      icon: hiking,
      subtitle: "Explore rugged trails and embrace nature's calm winds",
    },
    {
      title: "Climbing",
      icon: climbing,
      subtitle: "Scale rocky heights and conquer thrilling vertical challenges",
    },
    {
      title: "Walking",
      icon: walking,
      subtitle: "Stroll scenic paths and enjoy peaceful outdoor moments",
    },
    {
      title: "Cycling",
      icon: cycling,
      subtitle: "Ride winding routes and feel the rush of adventure",
    },
    {
      title: "Canoeing",
      icon: canoeing,
      subtitle: "Paddle quiet rivers and explore serene watersides",
    },
    {
      title: "Orienteering",
      icon: orienteering,
      subtitle: "Navigate wild terrain using maps and sharp instincts",
    },
  ];

  return (
    <div className='bg-[#fcf7f6] dark:bg-[#050911]  py-14 lg:py-24 pt-12'>
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-x-9 gap-y-16 px-2 xl:px-0">
        {activities.map((act, i) => (
          <div key={i} className="bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-2xl shadow-sm flex items-center gap-6 gap-y-16 py-12 px-6 hover:scale-110 transition duration-300">
            <div className="img">
                <Image
                src={act.icon}
                alt='acttivites icon '
                width={150}
                height={50}
                />
            </div>
            <div className="content">
              <h2 className="text-black dark:text-[#f5f9ff] text-xl font-medium lg:font-bold pb-4">{act.title}</h2>
              <h5 className="text-black dark:text-slate-100 ont-medium lg:font-semibold">{act.subtitle}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
