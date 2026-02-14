"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import RoomSlide from "./RoomSlide";
import { motion } from "framer-motion";

const RoomSlider = () => {
  const axiosInstance = useAxios();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
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

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite loop next/prev
  const totalSlides = allRoomData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (totalSlides === 0) return; // data not yet loaded
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]); // depend on totalSlides, not allRoomData

  if (isLoading) return <Loader />;
  if (totalSlides === 0) return null;

  const slideWidth = 100 / itemsToShow;

  return (
    <div className="relative container mx-auto my-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Our Mountain Rooms
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentSlide * slideWidth}%` }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* Duplicate slides for infinite feel */}
          {[...allRoomData, ...allRoomData].map((room, index) => (
            <div
              key={`${room._id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}%` }}
            >
              <RoomSlide room={room} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RoomSlider;
