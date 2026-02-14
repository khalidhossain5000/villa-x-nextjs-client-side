/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const RoomSlider = () => {
  const axiosInstance = useAxios();

  const cat = "Mountain";

  // Fetch room data
  const { data: allRoomData = [], isLoading } = useQuery({
    queryKey: ["allRoomsData", cat],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms?category=${cat}`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="py-48 container mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        autoplay={true}
        loop={true}
        grabCursor={true}
      >
        {allRoomData.map((room) => (
          <SwiperSlide key={room._id}>
            <div className="w-full h-full relative cursor-grab">
              {/* Background Image */}
              <img
                src={room?.thumbnailImage}
                alt={room?.title}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-10 left-10 text-white bg-black/30 p-4 rounded">
                <h2 className="text-2xl font-bold">{room.title}</h2>
                <p className="mt-1">{room.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomSlider;
