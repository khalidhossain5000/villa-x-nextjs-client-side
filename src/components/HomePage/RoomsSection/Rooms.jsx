"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import RoomCard from "./RoomCard";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import RoomSliderSkleton from "@/components/Shared/SkeletonLoader/RoomSliderSkleton";

const Rooms = () => {
  const axiosInstance = useAxios();
  const params = useSearchParams();
  const category = params.get("category");
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  // all rooms data showing category wise
  const { data: allRoomData, isLoading } = useQuery({
    queryKey: ["allRoomsData", category, searchText],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/api/rooms?category=${category}&search=${searchText}`,
      );
      return res.data.allRoomData;
    },
    keepPreviousData: true,
  });
  useEffect(() => {
    inputRef.current?.focus();
  });
  if (isLoading) return <RoomSliderSkleton/>;

  return (
    <div className="flex items-start flex-col lg:flex-row gap-2 ">
      <div className="searchbox lg:flex-1 bg-gray-200 rounded-lg shadow-xl mt-12">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by room name..."
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-indigo-600">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="lg:flex-3 xl:flex-4">
        {allRoomData && allRoomData.length > 0 ? (
          <div className="xl:px-20 pt-12 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
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
    </div>
  );
};

export default Rooms;
