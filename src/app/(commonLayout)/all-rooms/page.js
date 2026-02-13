import dynamic from "next/dynamic";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React, { Suspense } from "react";
import PageTitle from "@/components/Shared/Title/PageTitle";
import PageSubTitle from "@/components/Shared/Title/PageSubtitle";



const AllRooms = () => {
  return (
    <div className="px-20 pt-20">
      <PageTitle>All Rooms</PageTitle>

      {/* categories */}

      <div className='pb-12'>
        <PageSubTitle className={'text-xl lg:text-2xl 2xl:text-3xl pt-3'}>Filter By Category </PageSubTitle>
        <Suspense fallback={'loading...........'}>
        <Categories></Categories>
        </Suspense>
      </div>
      {/* allrooms data is here */}
      <div >
       
        <div className=''>
          <Suspense fallback={'loading...........'}>
        <Rooms />
        </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
