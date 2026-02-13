"use client";
import EmptyMessage from "@/components/Shared/EmptyMessage/EmptyMessage";
import React from "react";
import RoomDataRow from "../../Common/TableRows/RoomDataRow";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyListing = () => {
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  // this are mylisting data is over here to be dispalyed
  const {
    data: myListingData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myListingData", userInfo?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/api/rooms?email=${userInfo?.email}`,
      );
      return res.data.allRoomData;
    },
    keepPreviousData: true,
    enabled: !!userInfo?.email,
  });
  //delte starts
  const { mutateAsync } = useMutation({
    mutationKey: ["deleteMyListing"],
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/api/rooms/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data, "this is delte response data over here");
      refetch()
      toast.success("Listing detlted");
    },
  });
  if (isLoading) return <Loader />;
  // hadnle listi delte starts here

  const handleDeleteListing = async (id) => {
    console.log(id, "this is id that to be delted");
    try {
      await mutateAsync(id);
    } catch (error) {
      console.log(error, "this is delte error");
    }
  };
  return (
    <div>
      {myListingData &&
      Array.isArray(myListingData) &&
      myListingData.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100 border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100  border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100  border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100  border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100  border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white dark:bg-[#1e293b] dark:text-slate-100  border-b border-gray-200 dark:border-primary text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myListingData &&
                      myListingData.map((room) => (
                        <RoomDataRow
                          key={room?._id}
                          room={room}
                   
                          handleDeleteListing={handleDeleteListing}
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
          message="Add at least a room before coming here🥴"
          label="Add Rooms"
        />
      )}
    </div>
  );
};

export default MyListing;
