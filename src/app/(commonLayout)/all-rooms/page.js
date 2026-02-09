import dynamic from "next/dynamic";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React, { Suspense } from "react";


const AllRooms = () => {
  return (
    <div className="px-20 pt-20">
      <h2>This is all rooms page start over here</h2>

      {/* categories */}

      <div>
        <Suspense fallback={'loading...........'}>
        <Categories></Categories>
        </Suspense>
      </div>
      {/* allrooms data is here */}
      <div>
          <Suspense fallback={'loading...........'}>
        <Rooms />
        </Suspense>
      </div>
    </div>
  );
};

export default AllRooms;
