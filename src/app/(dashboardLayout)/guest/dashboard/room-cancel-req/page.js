import MyRoomCancelReq from "@/components/Dashboard/Guest/RoomCancelReq/MyRoomCancelReq";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
        My Room Cancel Request
      </PageTitle>
      <MyRoomCancelReq />
    </div>
  );
};

export default page;
