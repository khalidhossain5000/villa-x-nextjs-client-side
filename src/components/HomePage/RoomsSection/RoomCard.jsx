/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className=" cursor-pointer group">
      <div className="h-full bg-linear-to-tr from-[#f98d00] to-[#f9a300]  dark:from-[#0a121f] dark:to-[#0a0e16db] text-[#211f54] shadow-2xl w-full mx-auto relative overflow-hidden border border-yellow-400 dark:border-slate-900 hover:scale-105 transition-transform duration-300">
        <img
          src={room?.thumbnailImage}
          className="max-h-60 lg:h-96 w-full"
          alt={room?.title}
        />
        
        <div className="contentds p-6 font-urbanist mt-6">
           {/* Availability */}
          <div className="flex justify-between text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400 mb-5 ">
            <span>
             Available From{" "}
              <span className="font-semibold">
                {new Date(room.from).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>

            <span>
              To{" "}
              <span className="font-semibold">
                {new Date(room.to).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>
          </div>
          
          <h3 className="text-[#211f54] dark:text-slate-200  text-xl font-medium">
            <span className="font-bold">Hosted By</span> :{" "}
            {room?.hostInfo?.name}
          </h3>
          <h2 className="text-[#211f54] dark:text-[#f5f9ff] font-bold  text-xl  py-2 lg:py-4 playfair-display">
            {room?.title}
          </h2>
          <p className="line-clamp-3 text-md text-gray-800 dark:text-slate-200 font-normal">
            {room?.description.slice(0, 60)}.....
          </p>

          <div className="dateandauthor flex items-center justify-between py-2 lg:py-5">
            
            <h2 className="text-gray-900 dark:text-[#f9a300] font-bold">
              Category {room?.category}
            </h2>
            <h2 className="text-gray-900 dark:text-[#f9a300 font-bold">
              Added : {new Date(room?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h2>
          </div>
           
          <div className="mx-auto text-center">
            <Link href={`/room/${room._id}`}>
              <button className="hover:scale-110 w-full transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#f97c00] dark:bg-slate-950 px-7 text-sm lg:text-xl lg:font-bold font-medium text-black dark:text-white backdrop-blur-3xl gap-2 undefined ">
                  Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
