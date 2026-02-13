/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = ({ room }) => {
  return (
 <Link
      href={`/room/${room?._id}`}
      className="col-span-1 cursor-pointer group"
    >
       <div className="h-full bg-gradient-to-br from-[#facc15] via-[#fbbf24] to-[#d97706] text-[#211f54] shadow-2xl w-full mx-auto relative overflow-hidden border border-yellow-400 hover:scale-105 transition-transform duration-300">
         
          <img
            src={room?.thumbnailImage}
            className="max-h-60 lg:h-96 w-full"
            alt={room?.title}
          />
          <div className="contentds p-6 urbanist mt-6">
            <h3 className="text-[#211f54]  text-xl font-medium">
              <span className="font-bold">Hosted By</span> :{" "}
              {room?.hostInfo?.name}
            </h3>
            <h2 className="text-[#211f54] font-bold  text-xl  py-2 lg:py-4 playfair-display">
              {room?.title}
            </h2>
            <p className="line-clamp-3 text-md text-gray-800 font-normal">
              {room?.description.slice(0,60)}.....
            </p>

            <div className="dateandauthor flex items-center justify-between py-2 lg:py-5">
              <h2 className="text-gray-900 font-bold">Category {room?.category}</h2>
              <h2 className="text-gray-900 font-bold">
                {new Date(room?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
            </div>
            <div className="mx-auto text-center">
        
                <button
            
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed select-none border border-gray-600  transition text-black font-bold"
                  title="Please subscribe to access this premium article text-black"
                >
                  Details
                </button>
              
               
            
            </div>
          </div>
        </div>
    </Link>
  );
};

export default RoomCard;
