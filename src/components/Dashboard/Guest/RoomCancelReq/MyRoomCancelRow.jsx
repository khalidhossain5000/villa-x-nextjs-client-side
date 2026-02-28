"use client";
import React from "react";

const MyRoomCancelRow = ({ cancelReq }) => {
  console.log(cancelReq, "in user oadt");

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <p className="text-gray-900 whitespace-no-wrap dark:text-slate-100">
                {cancelReq?.bookingId}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {cancelReq?.createdAt}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          ${cancelReq?.requestedByInfo.name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {cancelReq?.requestedByInfo.email}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap truncate">
          {cancelReq?.roomId.slice(0, 5)}.....
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent">
        <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          {/* <span
            aria-hidden="true"
            className={`absolute inset-0 ${cancelReq?.status === "approved" ? "bg-green-200" : cancelReq?.status === "requested" ? "bg-red-500" : "bg-yellow-200"
              } opacity-50 rounded-full`}
          ></span> */}
          <span
            className={`relative px-3 py-1 rounded-full text-sm font-semibold shadow-sm
    ${
      cancelReq?.status === "Requested"
        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
        : cancelReq?.status === "Approved"
          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }
  `}
          >
            {cancelReq?.status}
          </span>
        </button>
      </td>
    </tr>
  );
};

export default MyRoomCancelRow;
