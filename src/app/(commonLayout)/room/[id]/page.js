import SingleRoomLayout from "@/components/AllRoomsPage/SingleRoomPage/SingleRoomLayout";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React, { use } from "react";

const RoomSinglePage = ({ params }) => {
  const roomId = use(params);
  return (
    <PrivateRoute requiredRoles={["guest"]}>
      <div>
        <SingleRoomLayout roomId={roomId}></SingleRoomLayout>
      </div>
    </PrivateRoute>
  );
};

export default RoomSinglePage;
