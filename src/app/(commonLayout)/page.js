import Banner from "@/components/HomePage/Banner/Banner";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";

import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={"loadings....."}>
        <Rooms />
      </Suspense>

      
    </div>
  );
};

export default HomePage;
