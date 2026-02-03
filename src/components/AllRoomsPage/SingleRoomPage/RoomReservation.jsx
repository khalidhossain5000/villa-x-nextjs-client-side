"use client";
import React, { useState } from "react";
import Calender from "./Calendar";
import BookingModal from "@/components/Shared/Modal/BookingModal/BookingModal";
import { useAuth } from "@/Hooks/useAuth";
import { differenceInCalendarDays, formatDistance } from "date-fns";

const RoomReservation = ({ room }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { userInfo: user } = useAuth();
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  const [userSelectedRange, setUserSelectedRange] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key:'user'
  });
  // const handleDateChange = () => {
  //   setValue({
  //     startDate: new Date(room?.from),
  //     endDate: new Date(room?.to),
  //     key: "selection",
  //   });
  // };

  const handleDateChange = (ranges) => {
    setUserSelectedRange(ranges.selection);
    setValue(ranges.selection);
  };

  console.log(userSelectedRange, "this is user selected rnage");

  const closeModal = () => {
    setIsOpen(false);
  };

  //total price of room over here is ready
  const totalPrice =
    parseInt(
      differenceInCalendarDays(new Date(userSelectedRange.endDate), new Date(userSelectedRange.startDate)),
    ) * room?.price;

  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0],
  );

 const selectedTotalDays = parseInt(
    formatDistance(new Date(userSelectedRange.endDate), new Date(userSelectedRange.startDate)).split(" ")[0],
  );


  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: userSelectedRange?.endDate,
    from: userSelectedRange?.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  });

  //more will be here added nsons g

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender
          handleDateChange={handleDateChange}
          value={value}
          room={room}
        />
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
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
        userSelectedRange={userSelectedRange}
        selectedTotalDays={selectedTotalDays}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default RoomReservation;
