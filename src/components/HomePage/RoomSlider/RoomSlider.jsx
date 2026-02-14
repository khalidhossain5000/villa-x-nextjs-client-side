"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import RoomSlide from "./RoomSlide";

const RoomSlider = () => {
  const axiosInstance = useAxios();
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

  console.log(allRoomData,'fetched')
  return <div>
    {
        allRoomData.map((room)=><RoomSlide
        key={room._id}
        room={room}
        ></RoomSlide>)
    }
  </div>;
};

export default RoomSlider;
