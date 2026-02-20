"use client";
import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import HomeButton from "@/components/Shared/Button/HomeButton";
import RoomSliderSkleton from "@/components/Shared/SkeletonLoader/RoomSliderSkleton";
const CollectionSlider = () => {
  const axiosInstance = useAxios();
  // Fetch room data
  const { data: allRoomData = [], isLoading } = useQuery({
    queryKey: ["allRoomsDataForCollectionSlider"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });

  if (isLoading) return<RoomSliderSkleton/>
  return (
    <div className="bg-[#fcf7f6] dark:bg-[#050911] relative py-12 lg:py-22">
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

      <div className="container mx-auto relative z-40">
        {/* title and button */}
        <div className="flex items-center justify-between ">
          {/* Small Label */}
          <div className="title">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="w-10 h-[2px] bg-amber-600"></div>
              <p className="text-xs tracking-widest text-black dark:text-slate-100 uppercase font-playfair">
                Recently Added
              </p>
            </div>

            <HomeTitle
              title={"Explore Collections"}
              className={"font-raleway"}
            />
          </div>
      
          <div>
            {/* Button */}
            <Link href="/all-rooms">
              <HomeButton className={"hover:opacity-90 "}>
                Explore More
              </HomeButton>
            </Link>
          </div>
        </div>
        {/* slider start */}

        <Swiper
          slidesPerView={4}
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
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          loop={true}
          className="mySwiper"
        >
          {allRoomData.map((room) => (
            <SwiperSlide key={room._id}>
              <Link href={`/room/${room._id}`}>
                <div className="w-full h-full relative py-12">
                  {/* Background Image */}
                  <img
                    src={room?.thumbnailImage}
                    alt={room?.title}
                    className="w-full h-120 xl:w-200 object-cover rounded-lg"
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

export default CollectionSlider;
