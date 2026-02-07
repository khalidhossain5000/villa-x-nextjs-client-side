"use client";
import DeleteModal from "@/components/Shared/Modal/DeleteModal/DeleteModal";
import React, { useState } from "react";

const cancelReqCancelRow = ({ cancelReq, handleDeleteListing }) => {
 
console.log(cancelReq)
  // close modla is os hdsg s done ehe over here  like it go done
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <p className="text-gray-900 whitespace-no-wrap">{cancelReq?.bookingId}</p>
            </div>
          </div>
          
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cancelReq?.createdAt}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${cancelReq?.requestedByInfo.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cancelReq?.requestedByInfo.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap truncate">{cancelReq?.roomId.slice(0,5)}.....</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Approve</span>
        </button>
        {/* delete modal here */}
       
      </td>
      
    </tr>
  );
};

export default cancelReqCancelRow;
