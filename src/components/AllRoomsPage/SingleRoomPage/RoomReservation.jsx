"use client";
import React, { useState } from "react";
import Calender from "./Calendar";
import BookingModal from "@/components/Shared/Modal/BookingModal/BookingModal";
import { useAuth } from "@/Hooks/useAuth";
import { differenceInCalendarDays, formatDistance } from "date-fns";
import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import RoomDetailsSkeleton from "@/components/Shared/SkeletonLoader/RoomDetailsSkeleton";

const RoomReservation = ({ room }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { userInfo: user, loading } = useAuth();
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });
  const axiosInstance = useAxios();
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
    image: room?.thumbnailImage,
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
  
  if (isLoading ) return <RoomDetailsSkeleton />;

  const disabledRanges = bookedRoomDate?.map((item, index) => ({
    startDate: new Date(item.from),
    endDate: new Date(item.to),
    key: `blocked-${index}`,
  }));

  const isDateBlocked = (date) => {
    return disabledRanges?.some((range) => {
      return date >= range.startDate && date <= range.endDate;
    });
  };


  return (
    <div className="relative rounded-xl border-[1px] border-neutral-200 dark:border-none overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #71f9a320 40%, #0300ff 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
        }}
      />
      {/* Soft vignette to blend edges */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
          opacity: 0.95,
        }}
      />

      <div className="flex items-center gap-1 p-4 relative z-50">
        <div className="text-2xl font-semibold text-white/80 dark:text-text-primary">$ {room?.price} / </div>
        <div className="font-light text-neutral-300 dark:text-text-primary">night</div>
      </div>
      <hr />
      <div className="flex justify-center relative z-50 ">
        <Calender
          handleDateChange={handleDateChange}
          value={value}
          room={room}
          disabledRanges={disabledRanges}
        />
      </div>
      <hr />
      <div className="p-4 relative z-50">
        <p className='py-4'>
          <span className="h-2 w-2 lg:h-3 md:w-3 rounded-full bg-red-500 inline-block animate-ping mr-2  "></span>
          Refers To : Already Booked
        </p>
        <button
          disabled={room.hostInfo.email === user.email || room.booked}
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#f9a300] text-black dark:text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reserve
        </button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg relative z-50">
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
