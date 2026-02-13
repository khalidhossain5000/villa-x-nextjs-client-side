/* eslint-disable @next/next/no-img-element */
'use client'
import DeleteModal from "@/components/Shared/Modal/DeleteModal/DeleteModal";
import React, { useState } from "react";

const RoomDataRow = ({ room,handleDeleteListing }) => {
  const [isOpen,setIsOpen]=useState(false)






  // close modla is os hdsg s done ehe over here  like it go done
  const closeModal=()=>{
    setIsOpen(false)
  }
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]  dark:border-primary dark:text-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={room?.thumbnailImage}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap  dark:text-slate-100">{room?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b] dark:border-primary dark:text-slate-100 text-sm">
        <p className="text-gray-900 whitespace-no-wrap  dark:text-slate-100">{room?.location}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b] dark:border-primary  dark:text-slate-100 text-sm">
        <p className="text-gray-900 whitespace-no-wrap  dark:text-slate-100">${room?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b] dark:border-primary  dark:text-slate-100 text-sm">
        <p className="text-gray-900 whitespace-no-wrap  dark:text-slate-100">
          {room?.from} 
      
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b] dark:border-primary  dark:text-slate-100 text-sm">
        <p className="text-gray-900 whitespace-no-wrap  dark:text-slate-100">
          {room?.to}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b] dark:border-primary text-sm">
        <button onClick={()=>setIsOpen(true)} className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 dark:border-primary opacity-50 rounded-full"
          ></span>
          <span className="relative  dark:text-slate-100">Delete</span>
        </button>
        {/* delete modal here */}
        <DeleteModal isOpen={isOpen} closeModal={closeModal} handleDeleteListing={handleDeleteListing} id={room._id}/>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:border-primary dark:bg-[#1e293b] text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative  dark:text-slate-100">Update</span>
        </span>
      </td>
    </tr>
  );
};

export default RoomDataRow;
