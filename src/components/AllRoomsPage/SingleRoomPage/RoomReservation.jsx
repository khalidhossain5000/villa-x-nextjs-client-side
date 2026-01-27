"use client";
import React, { useState } from "react";
import Calender from "./Calendar";
import BookingModal from "@/components/Shared/Modal/BookingModal/BookingModal";
import { useAuth } from "@/Hooks/useAuth";
import { differenceInCalendarDays, formatDistance } from "date-fns";

const RoomReservation = ({ room }) => {
  const { userInfo: user } = useAuth();
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });
  const handleDateChange = () => {
    setValue({
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    });
  };

//total price of room
  const totalPrice=parseInt(
    differenceInCalendarDays(
        new Date(room?.to),
        new Date(room?.from)
    )
  ) * room?.price
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  )
console.log(totalPrice,"this is total price",totalDays)
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender handleDateChange={handleDateChange} value={value} />
      </div>
      <hr />
      <div className="p-4">
        <button
          disabled={room.hostInfo.email === user.email || room.booked}
          onClick={() => setIsOpen(true)}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reserve
        </button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div> {"$ " + totalPrice}</div>
      </div>

      <BookingModal
      // closeModal={closeModal}
      // isOpen={isOpen}
      // bookingInfo={bookingInfo}
      />
    </div>
  );
};

export default RoomReservation;
