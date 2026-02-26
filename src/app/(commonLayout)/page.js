import About from "@/components/HomePage/AboutSection/About";
import Banner from "@/components/HomePage/Banner/Banner";
import CollectionSlider from "@/components/HomePage/ExploreCollectionSlider/CollectionSlider";
import Facilities from "@/components/HomePage/FacilitiesSection/Facilities";
import Info from "@/components/HomePage/InfoSection/Info";
import RoomGalery from "@/components/HomePage/RoomGalery/RoomGalery";
import RoomSlider from "@/components/HomePage/RoomSlider/RoomSlider";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
  
      <RoomSlider />
      <Info />

      <About />
      <CollectionSlider />
      <Facilities/>
      <RoomGalery/>
    </div>
  );
};

export default HomePage;
