'use client'
import ThreeDImageRing from "@/components/lightswind/3d-image-ring";
import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
const imageUrls = [
    'https://ibb.co.com/dsC6tzxX',
    'https://ibb.co.com/LX9WdpNx',
    'https://ibb.co.com/Gfc7gLXb',
    'https://ibb.co.com/JWcktP26',
    'https://ibb.co.com/fYCcmRRk',
    'https://ibb.co.com/MDbGfkZN'
];

//       const imageUrls = [
//     "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     "https://images.pexels.com/photos/2449540/pexels-photo-2449540.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   ];
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
      <div className='h-96 lg:h-[500px]'>
            <ThreeDImageRing images={imageUrls} />

      </div>
    </div>
  );
};

export default RoomGalery;
