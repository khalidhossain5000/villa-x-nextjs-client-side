"use client";
import React  from "react";

const MyRoomCancelRow = ({ cancelReq }) => {
 
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
          
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 ${cancelReq?.status === "approved" ? "bg-green-200" : cancelReq?.status === "requested" ? "bg-red-500" : "bg-yellow-200"
              } opacity-50 rounded-full`}
          ></span>
          <span className="relative">{cancelReq?.status}</span>
        </button>
        
       
      </td>
      
    </tr>
  );
};

export default MyRoomCancelRow;
