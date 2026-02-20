"use client";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import RoomDetailsSkeleton from "@/components/Shared/SkeletonLoader/RoomDetailsSkeleton";

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

  if (isLoading) return <RoomDetailsSkeleton />;

  const singleRoomData = allRoomData.find((room) => room._id == roomId.id);

  if (!singleRoomData) return <RoomDetailsSkeleton />;
  return (
    <PrivateRoute requiredRoles={['guest']}>
    <div className="min-h-screen w-full relative z-0">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #f9a300 100%)",
        }}
      />

         <div
      className="absolute inset-0 z-0 hidden dark:block"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
      }}
    />















      <div className="max-w-7xl mx-auto z-50 relative py-22">
        <div className="flex flex-col gap-6">
          <Header room={singleRoomData} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6 px-2 xl:px-0">
          <RoomInfo room={singleRoomData} />

          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* RoomReservation */}
            <RoomReservation room={singleRoomData} />
          </div>
        </div>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default SingleRoomLayout;
//
