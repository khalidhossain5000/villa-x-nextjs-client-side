"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import RoomCard from "./RoomCard";
import { useSearchParams } from "next/navigation";

const Rooms = () => {
  const axiosInstance = useAxios();
  const params = useSearchParams();
  const category = params.get("category");
 
  // all rooms data
  const { data: allRoomData, isLoading } = useQuery({
    queryKey: ["allRoomsData",category],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms?category=${category}`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      {allRoomData && allRoomData.length > 0 ? (
        <div className="px-20 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
          {allRoomData.map((room) => (
            <RoomCard key={room._id} room={room}></RoomCard>
          ))}
        </div>
      ) : (
        <div className="min-h-[90vh] flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-900">
            No Rooms Available In This Category!
          </h2>
          <h5>Please Select Other Categories.</h5>
        </div>
      )}
    </div>
  );
};

export default Rooms;
