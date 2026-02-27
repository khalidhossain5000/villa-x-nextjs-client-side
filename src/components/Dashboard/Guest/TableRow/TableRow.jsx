"use client";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useState } from "react";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import DeleteModalRoom from "@/components/Shared/Modal/DeleteMyBookingModal/DeleteModalRoom";

const TableRow = ({ booking, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  console.log(booking, "this is bookinginfo inside table row");
  const closeModal = () => setIsOpen(false);
  const axiosSecure = useAxiosSecure();
  const cancelBookingRequestData = {
    bookingId: booking._id,
    roomId: booking.roomId,
    requestedByInfo: { ...booking.guest },
    hostEmail: booking.hostEmail,
  };

  //checking if booking date is expirted or not
  const toDate = new Date(booking.to);
  const today = new Date(); // current date

  // Check if "to" date is in the past
  const isExpired = toDate < today;

  console.log(isExpired, "is expired or not", booking);

  const modalHandler = async (id) => {
    try {
      axiosSecure
        .post("/api/room-cancel-request", cancelBookingRequestData)
        .then((res) => {
          console.log(res, "this is res");
          toast.success("Cancel request sent to host");
        })
        .catch((err) => {
          console.log(err, "this is cancel req errorr");
        });

      refetch();
      toast.success("Booking Canceled");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={booking?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
              {booking?.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:text-slate-100 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={booking?.guest?.image}
                className="mx-auto object-cover rounded-full h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
              {booking?.guest?.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent border-gray-200 bg-white text-sm">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          ${booking?.price}
        </p>
      </td>
      <td className="px-5 py-5 border-b dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent border-gray-200 bg-white text-sm">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {format(new Date(booking?.from), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent border-gray-200 bg-white text-sm">
        <p className="text-gray-900 dark:text-slate-100 whitespace-no-wrap">
          {format(new Date(booking?.to), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent border-gray-200 bg-white text-sm">
        {isExpired ? (
          <p className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300 shadow-sm">
            Expired /{" "}
            <span className="text-green-700 dark:text-green-300">
              Completed
            </span>
          </p>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Cancel</span>
          </button>
        )}
        <DeleteModalRoom
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={booking._id}
        />
      </td>
    </tr>
  );
};

export default TableRow;
