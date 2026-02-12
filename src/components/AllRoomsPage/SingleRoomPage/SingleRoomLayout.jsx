"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const SingleRoomLayout = ({ roomId }) => {
  const axiosInstance = useAxios();
  // all rooms data
  const { data: allRoomData, isLoading } = useQuery({
    queryKey: ["allRoomsData"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/rooms`);
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });
  console.log(allRoomData, "this is data and error ");
  if (isLoading) return <Loader />;

  const singleRoomData = allRoomData.find((room) => room._id == roomId.id);
  console.log(singleRoomData, "this is single room data",roomId.id);

  if(!singleRoomData) return <Loader/>
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <Header room={singleRoomData} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <RoomInfo room={singleRoomData} />

          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* RoomReservation */}
            <RoomReservation room={singleRoomData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomLayout;
