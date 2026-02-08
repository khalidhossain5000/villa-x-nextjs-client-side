"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useAuth } from "@/Hooks/useAuth";
import Loader from "@/components/Shared/Loading/Loader";
import MyRoomCancelRow from "./MyRoomCancelRow";
import EmptyMessage from "@/components/Shared/EmptyMessage/EmptyMessage";

const MyRoomCancelReq = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  // this are mylisting data is over here to be dispalyed
  const {
    data: myCancelReqData,
    isLoading,
   
  } = useQuery({
    queryKey: ["myCancelReqData", userInfo?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(
          `/api/cancel-requests-by-user/${userInfo?.email}`,
        );

      
      return res.data.cancelRequests;
    },
    keepPreviousData: true,
    enabled: !!userInfo?.email,
  });

  if (isLoading) return <Loader />;

  console.log(myCancelReqData, "this is my cancel req data");
  // hadnle listi delte starts here
  

  return (
    <div>
      {myCancelReqData &&
      Array.isArray(myCancelReqData) &&
      myCancelReqData?.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        BookingId
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Requested At
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Requested By Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Requested By Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Room Id
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Cancel Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCancelReqData &&
                      myCancelReqData.map((cancelReq) => (
                        <MyRoomCancelRow
                          key={cancelReq._id}
                          cancelReq={cancelReq}
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
          message="Chill No Cancel Request Recived Yet🥴"
          label="Add Rooms"
        />
      )}
    </div>
  );
};

export default MyRoomCancelReq;
