import Banner from "@/components/HomePage/Banner/Banner";
import Info from "@/components/HomePage/InfoSection/Info";
import RoomSlider from "@/components/HomePage/RoomSlider/RoomSlider";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";

import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <Suspense fallback={"loadings....."}>
        <Rooms />
      </Suspense> */}
<RoomSlider/>
        <Info/>
    </div>
  );
};

export default HomePage;
