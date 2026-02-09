import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React, { Suspense } from "react";

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
              <Suspense fallback={<div>Loading...</div>}>
        <Rooms />
      </Suspense>
        {/* <Rooms /> */}
      </div>
    </div>
  );
};

export default AllRooms;
