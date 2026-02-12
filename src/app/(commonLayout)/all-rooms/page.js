import dynamic from "next/dynamic";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React, { Suspense } from "react";
import { FaSearch } from "react-icons/fa";


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
      <div className="flex items-start gap-2 ">
        <div className="searchbox flex-1 bg-gray-200 rounded-lg shadow-xl mt-12">
          <div className="relative">
        <input
          type="text"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by room..."
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-indigo-600">
          <FaSearch />

        </button>
      </div>
        </div>
        <div className='flex-4'>
          <Suspense fallback={'loading...........'}>
        <Rooms />
        </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
