import Banner from "@/components/HomePage/Banner/Banner";
import Rooms from "@/components/HomePage/RoomsSection/Rooms";
import Image from "next/image";
import logo from '../../assets/logo/logohdsg.png'
import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={"loadings....."}>
        <Rooms />
      </Suspense>


      <h2 className="text-4xl text-black py-12 font-bold font-playfair">THis is play fair disply & camping & climbing  
</h2>
      <h2 className="text-4xl text-green-400 py-12 font-bold font-raleway">THis is raleway fotn font over here fair disply &&&&&</h2>






       <Image
                    src={logo}
                    alt="Logo"
                    width={150}
                    height={50}
                    className="bg- "
                  />
    </div>
  );
};

export default HomePage;
