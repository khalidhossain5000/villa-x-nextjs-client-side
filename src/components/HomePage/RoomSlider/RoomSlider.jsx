"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import RoomSlide from "./RoomSlide";
import { AnimatePresence,motion } from "framer-motion";

const RoomSlider = () => {
  const axiosInstance = useAxios();
  const [currentSlide, setCurrentSlide] = useState(0);
  const cat='Mountain'
  // all rooms data showing category wise
  const { data: allRoomData, isLoading } = useQuery({
    queryKey: ["allRoomsData"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms?category=${cat}`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;
  

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? allRoomData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === allRoomData.length - 1 ? 0 : prev + 1
    );
  };
//   console.log(allRoomData,'fetched')
  return  <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        {allRoomData.map(
          (room, index) =>
            index === currentSlide && (
              <motion.div
                key={room._id}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <RoomSlide room={room} />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 z-10 bg-white/50 px-4 py-2 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 z-10 bg-white/50 px-4 py-2 rounded"
      >
        Next
      </button>
    </div>;
};

export default RoomSlider;
