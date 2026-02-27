/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { FaPeopleGroup } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";

import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import HomeButton from "@/components/Shared/Button/HomeButton";

const CollectionCard = ({ room }) => {
  console.log(room, "this is room");
  return (
    <div className="bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-lg shadow-sm p-1 relative overflow-hidden ">
      {/* thumbnail image */}
      <div className="text-center h-6/12 relative">
        <img
          src={room.thumbnailImage}
          alt="room thumbnail image"
          className="h-full w-full object-cover mx-auto shadow-2xl rounded-lg shadow-yellow-600"
        />
        {/* host info */}
        <div className='bg-[#fac512] px-2 py-1 shadow-xl absolute top-1 left-1 rounded-sm shadow-yellow-900'>
<h2 className='text-sm font-semibold text-black font-playfair'>Hosted By : {room.hostInfo.name} </h2>
          </div>
      </div>

      {/* content */}

      <div className="pt-6 pb-4">
        <h1 className="text-center text-xl md:text-2xl font-raleway font-semibold">
          {room.title}
        </h1>
        {/* guest bedrom bath etc info */}
        <div className="flex items-center gap-4 justify-between px-6 mt-4">
          <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
            <span className="">
              <FaPeopleGroup />
            </span>
            <span className="hidden md:block">Guests</span> {room.total_guest}
          </h5>
          <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
            <span className="">
              <MdBedroomParent />
            </span>
            <span className="hidden md:block">Bedrooms</span>
            {room.bedrooms}
          </h5>
          <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
            <span className="">
              <MdOutlineBathroom />
            </span>
            <span className="hidden md:block">Bathrooms</span>
            {room.bathrooms}
          </h5>
        </div>

        {/* more info section */}
        <div>
          {/* availablity */}
          <div className="flex items-center justify-between pt-6 px-2">
            <h4 className="text-m  lg:hidden">
              Available From :
              <span className="font-bold">
                {new Date(room.from).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </h4>

            <h4 className="text-m  lg:hidden">
              To :{" "}
              <span className="font-bold">
                {new Date(room.to).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </h4>

            {/* large device */}
            <h4 className="text-m hidden lg:block">
              Available From :
              <span>
                {new Date(room.from).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </h4>

            <h4 className="text-m hidden lg:block">
              To :{" "}
              <span>
                {new Date(room.to).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </h4>
          </div>
          {/*  */}
        </div>
      </div>

      {/* footer button */}
      <div className="text-center flex items-center  justify-between">
        <h2 className="text-gray-900 font-bold text-lg ">
          $ {room.price}{" "}
          <span className="text-sm text-[#204f5e] font-semibold">
            per night
          </span>
        </h2>

        <Link href={`/room/${room._id}`} className="ml-auto">
          <HomeButton className={"hover:opacity-90 "}>Explore More</HomeButton>
        </Link>
      </div>

      {/* animated border beam */}
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />
    </div>
  );
};

export default CollectionCard;
