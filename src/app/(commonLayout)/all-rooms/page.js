import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React from "react";

const AllRooms = () => {
  return (
    <div className="px-20 pt-20">
      <h2>This is all rooms page start over here</h2>

      {/* categories */}

      <div>
        <Categories></Categories>
      </div>
      {/* allrooms data is here */}
      <div>
        <Rooms />
      </div>
    </div>
  );
};

export default AllRooms;
