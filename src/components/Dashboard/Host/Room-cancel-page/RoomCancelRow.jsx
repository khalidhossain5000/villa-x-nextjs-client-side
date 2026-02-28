"use client";
import ShowReasonModal from "@/components/Shared/Modal/ShowReasonModal/ShowReasonModal";
import React from "react";

const cancelReqCancelRow = ({ cancelReq, handleBookingCancelReqApproval }) => {
  console.log(cancelReq);
 
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <p className="text-gray-900 dark:text-slate-100whitespace-no-wrap">
                {cancelReq?.bookingId}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {cancelReq?.createdAt.split("T")[0]}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {cancelReq?.requestedByInfo.name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {cancelReq?.requestedByInfo.email}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  ">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap truncate">
          {cancelReq?.roomId.slice(0, 5)}.....
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
       <ShowReasonModal cancelReason={cancelReq?.cancelReason} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
      
        {
          cancelReq?.status === 'approved' ? <span className="text-green-500 font-semibold">Already Approved</span> :   <button
          onClick={() =>
            handleBookingCancelReqApproval(cancelReq.bookingId, cancelReq._id)
          }
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Approve</span>
        </button>
        }
      </td>
    </tr>
  );
};

export default cancelReqCancelRow;
