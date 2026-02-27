"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

import toast from "react-hot-toast";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useAuth } from "@/Hooks/useAuth";
import Loader from "@/components/Shared/Loading/Loader";
import RoomCancelRow from "./RoomCancelRow";
import EmptyMessage from "@/components/Shared/EmptyMessage/EmptyMessage";

const RoomCancelReq = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  // this are mylisting data is over here to be dispalyed
  const {
    data: roomCancelReqData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["roomCancelReqData", userInfo?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/all-room-cancel-requests/${userInfo?.email}`);
      return res.data.cancelRequests;
    },
    keepPreviousData: true,
    enabled: !!userInfo?.email,
  });

  if (isLoading) return <Loader />;

  console.log(roomCancelReqData, "this is room cancel req data");
  // hadnle listi delte starts here
  const handleBookingCancelReqApproval = async (roomId,cancelReqId) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/delete-booking/${roomId}`).then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        axiosSecure.patch(`/api/update-status/${cancelReqId}`,{status:'approved'}).then((res)=>{
            console.log(res)
            
        })
        .catch((err)=>{
            console.log(err)
        })
        Swal.fire("Deleted! and Status updated", "Your data has been deleted. and updated", "success");
      }
    });
  };

  return (
    <div>
      {roomCancelReqData &&
      Array.isArray(roomCancelReqData) &&
      roomCancelReqData?.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary  text-left text-sm uppercase font-normal"
                      >
                        BookingId
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary text-left text-sm uppercase font-normal"
                      >
                        Requested At
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary text-left text-sm uppercase font-normal"
                      >
                        Requested By Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary  text-left text-sm uppercase font-normal"
                      >
                        Requested By Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary  text-left text-sm uppercase font-normal"
                      >
                        Room Id
                      </th>  <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary  text-left text-sm uppercase font-normal"
                      >
                        Reason
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomCancelReqData &&
                      roomCancelReqData.map((cancelReq) => (
                        <RoomCancelRow
                          key={cancelReq._id}
                          cancelReq={cancelReq}
                          handleBookingCancelReqApproval={handleBookingCancelReqApproval}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyMessage
          message="Chill No Cancel Request Send Yet🥴"
          
        />
      )}
    </div>
  );
};

export default RoomCancelReq;
