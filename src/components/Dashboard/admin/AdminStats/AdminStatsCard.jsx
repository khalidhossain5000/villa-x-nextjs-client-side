
import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { FaHouseDamage } from "react-icons/fa";
import Loader from "@/components/Shared/Loading/Loader";

import { MdOutlineWarehouse } from "react-icons/md";
import { TbTrendingUp2 } from "react-icons/tb";

const AdminStatsCard = ({totalUsers,totalRooms}) => {
    console.log(totalUsers,'inside stat card')
    if(!totalUsers || !totalRooms) return <Loader/>
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-6 mt-6 items-stretch px-3 xl:px-0">
      {/* TOTAL ORDERS CARD*/}
      <div className="relative w-full max-w-xs sm:max-w-lg lg:max-w-2xl  rounded-xl p-5 lg:p-9 overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 dark:from-gray-950 dark:to-blue-900 text-white shadow-2xl h-full">
        {/* --- Background total room added Graphic --- */}
        <div className="absolute inset-0 flex items-center justify-start ml-24 opacity-10">
          <FaHouseDamage className="w-40 h-40 text-white rotate-12" />
        </div>
        {/* --- Card Content Layout --- */}
        <div className="relative flex flex-col  justify-between h-full">
          {/* TOP SECTION: Title and Icon Badge */}
          <div className="flex flex-col justify-between items-start">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium  lg:font-bold tracking-wide">
                Total Users
              </h2>
              {/* User Icon Badge  */}
              <div className="p-3 rounded-full bg-green-700/50 backdrop-blur-sm shadow-inner">
                <MdOutlineWarehouse className="w-5 h-5" />
              </div>
            </div>

            {/* MIDDLE SECTION: Large Metric Number */}
            <div className="flex-1 flex items-center pt-2">
              <p className="text-2xl md:text-3xl lg:text-6xl font-bold lg:font-extrabold ">
                {totalUsers || 0}
              </p>
            </div>
            {/* BOTTOM SECTION: Percentage Change and Menu Icon */}
            <div className="flex flex-col  justify-end mt-2 space-y-2 lg:space-y-3">
              {/* Percentage Change Pill and Label */}

              <span className="text-sm font-light opacity-90">All Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER COMPLETED CARD */}
      <div className="relative w-full max-w-xs sm:max-w-lg  lg:max-w-2xl  rounded-xl p-5 lg:p-9 overflow-hidden bg-gradient-to-r from-pink-600 to-rose-500 dark:from-slate-950 dark:to-blue-950 text-white shadow-2xl h-full">
        {/* --- Background Trend Graphic --- */}
        <div className="absolute inset-0 flex items-center justify-start ml-24 opacity-10">
          <IoIosTrendingUp className="w-40 h-40 text-white rotate-12" />
        </div>
        {/* --- Card Content Layout --- */}
        <div className="relative flex flex-col  justify-between h-full">
          {/* TOP SECTION: Title and Icon Badge */}
          <div className="flex flex-col justify-between items-start">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium  lg:font-bold tracking-wide">
                Total Rooms
              </h2>
              {/* User Icon Badge  */}
              <div className="p-3 rounded-full bg-green-700/50 backdrop-blur-sm shadow-inner">
                <TbTrendingUp2 className="w-5 h-5" />
              </div>
            </div>

            {/* MIDDLE SECTION: Large Metric Number */}
            <div className="flex-1 flex items-center pt-2">
              <p className="text-2xl md:text-3xl lg:text-6xl font-bold lg:font-extrabold ">
                {totalRooms || 0}
              </p>
            </div>
            {/* BOTTOM SECTION: Percentage Change and Menu Icon */}
            <div className="flex flex-col  justify-end mt-2 space-y-2 lg:space-y-3">
              {/* Percentage Change Pill and Label */}

              <span className="text-sm font-light opacity-90">All Time</span>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AdminStatsCard;
