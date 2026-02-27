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
      <div className="text-center h-6/12">
        <img
          src={room.thumbnailImage}
          alt="room thumbnail image"
          className="h-full w-full object-cover mx-auto shadow-2xl rounded-lg shadow-yellow-600"
        />
      </div>

      {/* content */}

      <div className="pt-6 pb-4">
        <h1 className="text-center text-xl md:text-2xl font-raleway font-semibold">
          {room.title}
        </h1>
       {/* guest bedrom bath etc info */}
       <div className='flex items-center gap-6 justify between px-6'>
        <h5><span><FaPeopleGroup /></span>{room.total_guest}</h5>
        <h5><span><MdBedroomParent /></span>{room.bedrooms}</h5>
        <h5><span><MdOutlineBathroom /></span>{room.bathrooms}</h5>
       </div>

        {/* more info section */}
        <div>
          {/* availablity */}
          <div className="flex items-center justify-between pt-6 px-2">
            <h4 className="text-m  lg:hidden">
              Available From :
              <span className='font-bold'>
                {new Date(room.from).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </h4>

            <h4 className="text-m  lg:hidden">
              To :{" "}
              <span className='font-bold'>
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
      <div className="text-center">
        <Link href="/all-rooms">
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
