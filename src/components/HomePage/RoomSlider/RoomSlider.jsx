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
import { Navigation, Autoplay } from "swiper/modules";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
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
    <div className="py-48 container  mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between pb-16">
        <h2 className="font-raleway text-2xl md:text-3xl xl:text-5xl font-bold text-text-primary">
          Book our <span className="font-playfair">mountain cabins</span>
        </h2>

        <div className="pagination-slider flex items-center gap-3">
          <h2 className="custom-prev cursor-pointer font-raleway text-4xl  font-bold text-text-primary ">
            <FaLongArrowAltLeft />
          </h2>
          <h2 className="custom-next cursor-pointer font-raleway text-4xl font-bold text-text-primary">
            <FaLongArrowAltRight />
          </h2>
        </div>
      </div>
      <div className=" ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {allRoomData.map((room) => (
            <SwiperSlide key={room._id}>
              <Link href={`/room/${room._id}`}>
                <div className="w-full h-full relative ">
                  {/* Background Image */}
                  <img
                    src={room?.thumbnailImage}
                    alt={room?.title}
                    className="w-full h-full xl:w-200 object-cover rounded-lg"
                  />

                  {/* Text Overlay */}
                  <div className="absolute bottom-10 left-10 text-white bg-black/30 p-4 rounded">
                    <h2 className="text-2xl font-bold">{room.title}</h2>
                    <p className="mt-1">{room.description.slice(0, 90)}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomSlider;
