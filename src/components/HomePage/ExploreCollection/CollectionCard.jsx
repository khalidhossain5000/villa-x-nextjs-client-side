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
    // <div className="bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-lg shadow-sm p-1 relative overflow-hidden flex flex-col justify-between sm:justify-around pb-6">
    //   {/* thumbnail image */}
    //   <div className="text-center h-6/12 relative">
    //     <img
    //       src={room.thumbnailImage}
    //       alt="room thumbnail image"
    //       className="h-full w-full object-cover mx-auto shadow-2xl rounded-lg shadow-yellow-600"
    //     />
    //     {/* host info */}
    //     <div className="bg-[#fac512] px-2 py-1 shadow-xl absolute top-1 left-1 rounded-sm shadow-yellow-900">
    //       <h2 className="text-sm font-semibold text-black font-playfair">
    //         Hosted By : {room.hostInfo.name}{" "}
    //       </h2>
    //     </div>
    //   </div>

    //   {/* content */}

    //   <div className="">
    //     <h1 className="text-center text-xl md:text-2xl font-raleway font-semibold">
    //       {room.title}
    //     </h1>
    //     {/* guest bedrom bath etc info */}
    //     <div className="flex items-center gap-4 justify-between px-6 mt-4">
    //       <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
    //         <span className="">
    //           <FaPeopleGroup />
    //         </span>
    //         <span className="hidden md:block">Guests</span> {room.total_guest}
    //       </h5>
    //       <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
    //         <span className="">
    //           <MdBedroomParent />
    //         </span>
    //         <span className="hidden md:block">Bedrooms</span>
    //         {room.bedrooms}
    //       </h5>
    //       <h5 className="flex items-center gap-2 font-semibold text-lg text-black">
    //         <span className="">
    //           <MdOutlineBathroom />
    //         </span>
    //         <span className="hidden md:block">Bathrooms</span>
    //         {room.bathrooms}
    //       </h5>
    //     </div>

    //     {/* more info section */}
    //     <div>
    //       {/* availablity */}
    //       <div className="flex items-center justify-between pt-6 px-2">
    //         <h4 className="text-m  lg:hidden">
    //           Available From :
    //           <span className="font-bold">
    //             {new Date(room.from).toLocaleDateString("en-US", {
    //               month: "short",
    //               day: "numeric",
    //             })}
    //           </span>
    //         </h4>

    //         <h4 className="text-m  lg:hidden">
    //           To :{" "}
    //           <span className="font-bold">
    //             {new Date(room.to).toLocaleDateString("en-US", {
    //               month: "short",
    //               day: "numeric",
    //             })}
    //           </span>
    //         </h4>

    //         {/* large device */}
    //         <h4 className="text-m hidden lg:block">
    //           Available From :
    //           <span>
    //             {new Date(room.from).toLocaleDateString("en-US", {
    //               month: "long",
    //               day: "numeric",
    //             })}
    //           </span>
    //         </h4>

    //         <h4 className="text-m hidden lg:block">
    //           To :{" "}
    //           <span>
    //             {new Date(room.to).toLocaleDateString("en-US", {
    //               month: "long",
    //               day: "numeric",
    //             })}
    //           </span>
    //         </h4>
    //       </div>
    //       {/*  */}
    //     </div>
    //   </div>

    //   {/* footer button */}
    //   <div className="px-1 text-center flex items-center  justify-between">
    //     <h2 className="text-gray-900 font-bold text-lg ">
    //       $ {room.price}{" "}
    //       <span className="text-sm text-[#204f5e] font-semibold">
    //         per night
    //       </span>
    //     </h2>

    //     <Link href={`/room/${room._id}`} className="ml-auto">
    //       <HomeButton className={"hover:opacity-90 "}>Explore More</HomeButton>
    //     </Link>
    //   </div>

    //   {/* animated border beam */}
    //   <BorderBeam
    //     duration={6}
    //     size={400}
    //     className="from-transparent via-red-500 to-transparent"
    //   />
    //   <BorderBeam
    //     duration={6}
    //     delay={3}
    //     size={400}
    //     borderWidth={2}
    //     className="from-transparent via-blue-500 to-transparent"
    //   />
    // </div>





















//     <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-tr from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] shadow-lg">

//   {/* Inner Card */}
//   <div className="flex flex-col justify-between h-full rounded-2xl bg-white dark:bg-[#0f172a] p-4 sm:p-5 lg:p-6 transition-all duration-300">

//     {/* Thumbnail */}
//     <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden rounded-xl">
//       <img
//         src={room.thumbnailImage}
//         alt="room thumbnail image"
//         className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
//       />

//       {/* Host Badge */}
//       <div className="absolute top-3 left-3 bg-[#fac512] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-md shadow-md">
//         Hosted By: {room.hostInfo.name}
//       </div>
//     </div>

//     {/* Content */}
//     <div className="mt-4 flex flex-col gap-4">

//       {/* Title */}
//       <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
//         {room.title}
//       </h1>

//       {/* Info Row */}
//       <div className="flex justify-between items-center text-gray-800 dark:text-gray-300 text-sm sm:text-base font-medium px-2">
//         <div className="flex items-center gap-2">
//           <FaPeopleGroup />
//           <span className="hidden sm:inline">Guests</span>
//           {room.total_guest}
//         </div>

//         <div className="flex items-center gap-2">
//           <MdBedroomParent />
//           <span className="hidden sm:inline">Bedrooms</span>
//           {room.bedrooms}
//         </div>

//         <div className="flex items-center gap-2">
//           <MdOutlineBathroom />
//           <span className="hidden sm:inline">Bathrooms</span>
//           {room.bathrooms}
//         </div>
//       </div>

//       {/* Availability */}
//       <div className="flex justify-between text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400">
//         <span>
//           {new Date(room.from).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           })}
//         </span>

//         <span>
//           {new Date(room.to).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           })}
//         </span>
//       </div>
//     </div>

//     {/* Footer */}
//     <div className="mt-6 flex items-center justify-between">

//       <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
//         ${room.price}
//         <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
//           / night
//         </span>
//       </h2>

//       <Link href={`/room/${room._id}`}>
//         <HomeButton className="px-4 py-2 text-sm sm:text-base hover:opacity-90">
//           Explore More
//         </HomeButton>
//       </Link>
//     </div>

//   </div>

//   {/* Animated Border Beams */}
//   <BorderBeam
//     duration={6}
//     size={400}
//     className="from-transparent via-orange-500 to-transparent"
//   />
//   <BorderBeam
//     duration={6}
//     delay={3}
//     size={400}
//     borderWidth={2}
//     className="from-transparent via-blue-500 to-transparent"
//   />

// </div>

























<div className="relative overflow-hidden rounded-2xl p-[1px] bg-linear-to-tr from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] shadow-xl">

  {/* Inner Card */}
  <div className="flex flex-col justify-between h-full rounded-2xl bg-white dark:bg-[#0f172a] p-4 sm:p-5 lg:p-6 transition-all duration-300">

    {/* Thumbnail */}
    <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden rounded-xl">
      <img
        src={room.thumbnailImage}
        alt="room thumbnail"
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
      />

      {/* Host Badge */}
      <div className="absolute top-3 left-3 bg-[#fac512] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-md shadow-md">
        Hosted By: {room.hostInfo.name}
      </div>
    </div>

    {/* Content */}
    <div className="mt-5 flex flex-col gap-4">

      {/* Title */}
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
        {room.title}
      </h1>

      {/* Info Row */}
      <div className="flex justify-between items-center text-gray-800 dark:text-gray-300 text-sm sm:text-base font-medium px-2">
        <div className="flex items-center gap-2">
          <FaPeopleGroup />
          <span className="hidden sm:inline">Guests</span>
          {room.total_guest}
        </div>

        <div className="flex items-center gap-2">
          <MdBedroomParent />
          <span className="hidden sm:inline">Bedrooms</span>
          {room.bedrooms}
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineBathroom />
          <span className="hidden sm:inline">Bathrooms</span>
          {room.bathrooms}
        </div>
      </div>

      {/* Availability */}
      <div className="flex justify-between text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400">
        <span>
          From{" "}
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
    </div>

    {/* Footer */}
    <div className="mt-6 flex items-center justify-between">

      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
        ${room.price}
        <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          / night
        </span>
      </h2>

      <Link href={`/room/${room._id}`}>
        <HomeButton className="px-4 py-2 text-sm sm:text-base hover:opacity-90">
          Explore More
        </HomeButton>
      </Link>
    </div>

  </div>

  {/* Animated Border Beams */}
  <BorderBeam
    duration={6}
    size={400}
    className="from-transparent via-orange-500 to-transparent"
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
