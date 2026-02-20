import dynamic from "next/dynamic";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Categories from "@/components/Shared/HomePage/Categories/Categories";
import React, { Suspense } from "react";
import PageTitle from "@/components/Shared/Title/PageTitle";
import PageSubTitle from "@/components/Shared/Title/PageSubtitle";
import RoomSliderSkleton from "@/components/Shared/SkeletonLoader/RoomSliderSkleton";

const AllRooms = () => {
  return (
    <div className="px-4 lg:px-20 pt-20 min-h-screen w-full bg-[#f0fdfa] dark:bg-primary relative">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(45deg, 
          rgba(240,253,250,1) 0%, 
          rgba(204,251,241,0.7) 30%, 
          rgba(153,246,228,0.5) 60%, 
          rgba(94,234,212,0.4) 100%
        ),
        radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)
      `,
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(3,0,250, 0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative z-50">
        <PageTitle>All Rooms</PageTitle>

        {/* categories */}

        <div className="pb-12">
          <PageSubTitle
            className={"text-xl lg:text-2xl 2xl:text-3xl pt-3 pb-4"}
          >
            Filter By Category{" "}
          </PageSubTitle>
          <Suspense fallback={<RoomSliderSkleton/>}>
            <Categories></Categories>
          </Suspense>
        </div>
        {/* allrooms data is here */}
        <div>
          <div className="">
            <Suspense fallback={<RoomSliderSkleton/>}>
              <Rooms />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
