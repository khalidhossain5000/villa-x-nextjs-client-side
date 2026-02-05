"use client";
import React, { useState } from "react";
import Calender from "./Calendar";
import BookingModal from "@/components/Shared/Modal/BookingModal/BookingModal";
import { useAuth } from "@/Hooks/useAuth";
import { differenceInCalendarDays, formatDistance } from "date-fns";
import Loader from "@/components/Shared/Loading/Loader";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const RoomReservation = ({ room }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { userInfo: user, loading } = useAuth();
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });
const axiosInstance=useAxios()
  const [userSelectedRange, setUserSelectedRange] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "user",
  });

  const handleDateChange = (ranges) => {
    setUserSelectedRange(ranges.selection);
    setValue(ranges.selection);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //total price of room over here is ready
  const totalPrice =
    parseInt(
      differenceInCalendarDays(
        new Date(userSelectedRange.endDate),
        new Date(userSelectedRange.startDate),
      ),
    ) * room?.price;

  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0],
  );

  const selectedTotalDays = parseInt(
    formatDistance(
      new Date(userSelectedRange.endDate),
      new Date(userSelectedRange.startDate),
    ).split(" ")[0],
  );

  
  const bookingInfo = {
    guest: {
      name: user?.name,
      email: user?.email,
      image: user?.photoUrl,
    },
    hostName: room?.hostInfo?.name,
    hostEmail: room?.hostInfo?.email,
    location: room?.location,
    price: totalPrice,
    to: userSelectedRange?.endDate,
    from: userSelectedRange?.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.roomImage,
  };
  
  //fetching booked room data date for validyity

  // all rooms data
    const { data: bookedRoomDate, isLoading } = useQuery({
      queryKey: ["bookedRoomDataDate"],
      queryFn: async () => {
        const res = await axiosInstance.get(`/api/booked-rooms/${room._id}`);
        return res.data;
      },
      keepPreviousData: true,
      enabled: !!room._id,
    });
    console.log(bookedRoomDate, "this is data and error ");
    if (isLoading) return <Loader />;



    const disabledRanges = bookedRoomDate?.map((item, index) => ({
  startDate: new Date(item.from),
  endDate: new Date(item.to),
  key: `blocked-${index}`,
}));


const isDateBlocked = (date) => {
  return disabledRanges?.some(range => {
    return date >= range.startDate && date <= range.endDate;
  });
};
console.log(isDateBlocked, "this is blocked date function",)
console.log(isDateBlocked(new Date("2026-01-17")));

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
            disabledRanges={disabledRanges}

        />
      </div>
      <hr />
      <div className="p-4">
        <p><span className="h-2 w-2 rounded-full bg-green-600 inline-block animate-pulse mr-2 pb-4 "></span>Refers To : Already Booked</p>
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
