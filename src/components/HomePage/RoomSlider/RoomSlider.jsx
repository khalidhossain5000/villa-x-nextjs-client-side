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
    queryKey: ["allRoomsDataForSlider", cat],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms?category=${cat}`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="py-22 xl:py-48 bg-white  dark:bg-black relative ">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top left,
          #f9a30040,
          transparent 60%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), radial-gradient(68% 58% at 50% 50%, rgba(249,163,0,0.6) 0%, rgba(217,119,6,0.5) 16%, rgba(180,83,9,0.4) 32%, rgba(146,64,14,0.3) 46%, rgba(120,53,15,0.2) 60%, rgba(69,26,3,0.1) 72%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(249,163,0,0.03) 0%, rgba(249,163,0,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(249,163,0,0.03), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges - slightly more transparent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)",
          opacity: 0.85,
        }}
      />

      <div className="container mx-auto">
        <div className="relative z-40 max-w-7xl mx-auto flex items-center justify-between pb-16">
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
    </div>
  );
};

export default RoomSlider;
