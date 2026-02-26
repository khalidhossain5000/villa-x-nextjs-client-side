'use client'
import ThreeDImageRing from "@/components/lightswind/3d-image-ring";
import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
const imageUrls = [
    
    `https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=1200`,
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
    <div className='container mx-auto py-14 lg:py-22'>
      {/* title */}
      <div className='py-6 lg:py-9'>
        <HomeTitle
          title={"Explore Room Gallery Images"}
          className={"font-raleway"}
        />
      </div>
      {/* 3d image ring gallery below */}
      <div className='h-96 lg:h-11/12'>
            <ThreeDImageRing images={imageUrls} />

      </div>
    </div>
  );
};

export default RoomGalery;
