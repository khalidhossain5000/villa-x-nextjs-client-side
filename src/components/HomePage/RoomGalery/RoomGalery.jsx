'use client'
import ThreeDImageRing from "@/components/lightswind/3d-image-ring";
import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
const imageUrls = [
    
    `https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200`,
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/269155/pexels-photo-269155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200',


];


const RoomGalery = () => {
  return (

    <section className="bg-white relative">

{/* light bg */}
 <div
    className="absolute inset-0 z-0 dark:hidden"
    style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
      `,
      backgroundSize: "100% 100%",
    }}
  />




    <div className='relative z-50 container mx-auto py-14 lg:py-22'>
      {/* title */}
      <div className=' lg:py-9'>
        <HomeTitle
          title={"Explore Room Gallery Images"}
          className={"font-raleway text-center xl:text-left"}
        />
      </div>
      {/* 3d image ring gallery below */}
      <div className='h-96 lg:h-105 2xl:h-120 xl:pt-6 pb-5'>
            <ThreeDImageRing images={imageUrls} width={600} imageDistance={1000} height={800} perspective={3000} staggerDelay={0.5}/>

      </div>
    </div>



    </section>
  );
};

export default RoomGalery;
