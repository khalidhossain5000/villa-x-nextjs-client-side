import MyBookings from "@/components/Dashboard/Guest/MyBookings/MyBookings";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const GuestMyAllBookings = () => {
  return (
    <div>
      <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
        My Bookings
      </PageTitle>
      <MyBookings />
    </div>
  );
};

export default GuestMyAllBookings;
