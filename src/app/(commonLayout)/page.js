import About from "@/components/HomePage/AboutSection/About";
import Banner from "@/components/HomePage/Banner/Banner";
import CollectionSlider from "@/components/HomePage/ExploreCollectionSlider/CollectionSlider";
import Facilities from "@/components/HomePage/FacilitiesSection/Facilities";
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
      <RoomSlider />
      <Info />

      <About />
      <CollectionSlider />
      <Facilities/>
    </div>
  );
};

export default HomePage;
