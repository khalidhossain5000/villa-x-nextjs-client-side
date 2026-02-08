"use client";
import EmptyMessage from "@/components/Shared/EmptyMessage/EmptyMessage";
import Loader from "@/components/Shared/Loading/Loader";
import { useAuth } from "@/Hooks/useAuth";
import React from "react";
import BookedRoomRow from "./BookedRoomRow";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageRoomBookings = () => {
  const { userInfo: user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(
        `/api/host-room-booking-info/${user?.email}`,
      );
      return res.data.hostRoomBookedInfoData;
    },
  });
  console.log(bookings);
  if (isLoading) return <Loader />;
  return (
    <div>
      {bookings && Array.isArray(bookings) && bookings.length > 0 ? (
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
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Guest Info
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings &&
                      bookings.map((booking) => (
                        <BookedRoomRow
                          key={booking._id}
                          booking={booking}
                          refetch={refetch}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyMessage message="No one booked your room yet😑" label="Go Back" />
      )}
    </div>
  );
};

export default ManageRoomBookings;
