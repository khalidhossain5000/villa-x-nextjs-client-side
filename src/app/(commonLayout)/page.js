import Banner from "@/components/HomePage/Banner/Banner";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import { PulsatingButton } from "@/components/ui/pulsating-button";

import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={"loadings....."}>
        <Rooms />
      </Suspense>

          <PulsatingButton pulseColor='#f7f700' duration='5' className='bg-black text-white'>Join Affiliate Program</PulsatingButton>
    </div>
  );
};

export default HomePage;
