import MyListing from "@/components/Dashboard/Host/MyListing/MyListing";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const MyListingByHost = () => {
  return (
    <div>
      <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
        My Booking Lisitng
      </PageTitle>

      <MyListing />
    </div>
  );
};

export default MyListingByHost;
