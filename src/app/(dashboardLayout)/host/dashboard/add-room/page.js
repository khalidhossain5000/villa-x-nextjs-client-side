import AddRoomForm from "@/components/Dashboard/Host/Add-Room/AddRoomForm";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const HostAddRoomPage = () => {
  return (
    <div className="px-4 xl:px-0">
      <PageTitle className="pt-3">Add Room</PageTitle>
      <div className='shadow-xl max-w-6xl mx-auto rounded-xl bg-background dark:bg-[#1e293b] "'>
        <AddRoomForm></AddRoomForm>
      </div>
    </div>
  );
};

export default HostAddRoomPage;
