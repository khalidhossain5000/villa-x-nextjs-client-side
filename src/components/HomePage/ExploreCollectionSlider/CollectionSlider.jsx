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
import { Pagination ,Autoplay} from "swiper/modules";
import Link from "next/link";
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

  if (isLoading) return <Loader />; //will be replaced with skeletion loaing
  console.log(allRoomData,'this is all room data')
  return (
    <div className="container mx-auto py-12 lg:py-22">
      {/* title and button */}
      <div className="flex items-center justify-between ">
        {/* Small Label */}
        <div className="title">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="w-10 h-[1px] bg-gray-400"></div>
            <p className="text-xs tracking-widest text-gray-500 uppercase font-playfair">
              Recently Added
            </p>
          </div>

          <HomeTitle title={"Explore Collections"} className={"font-raleway"} />
        </div>
        {/* button */}
        <div>
          {/* Button */}
          <button className="group inline-flex items-center">
            <span className="bg-[#8FA6A9] text-white px-6 py-3 text-sm tracking-wide uppercase">
              Learn More
            </span>
            <span className="border border-[#8FA6A9] px-4 py-3 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-gray-800 group-hover:translate-x-1 transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
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
        modules={[Pagination,Autoplay]}
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
  );
};

export default CollectionSlider;
