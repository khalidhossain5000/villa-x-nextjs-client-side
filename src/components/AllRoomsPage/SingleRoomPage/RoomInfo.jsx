/* eslint-disable @next/next/no-img-element */

import { FaLocationArrow } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { LuBath } from "react-icons/lu";

/* eslint-disable react/prop-types */
const RoomInfo = ({ room }) => {
  return (
    <div className="col-span-4 ">
      <h2 className=" text-black dark:text-text-primary font-playfair text-xl md:text-2xl py-4  font-bold lg:text-4xl">
        {room?.title}
      </h2>
      <h5 className="flex items-center gap-3 text-text-primary font-raleway text-sm   ">
       <FaLocationArrow className="text-primary"/> {room?.location}
      </h5>
      <div className="flex flex-col gap-2 pt-9">
        <div className="  text-xl  font-semibold     flex  flex-row items-center gap-2  ">
          <div>Hosted by : {room?.hostInfo?.name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={room?.hostInfo?.photoUrl}
          />
        </div>
        <div className=" flex flex-row items-center gap-4 font-light text-neutral-500 py-4">
          <div className='flex items-center gap-1 text-gray-400 font-bold text-sm'><LuBedSingle className='text-primary-hover'/>{room?.bedrooms} rooms</div>
          <div className='flex items-center gap-1 text-gray-400 font-bold text-sm'><FiUsers className='text-primary-hover'/>{room?.total_guest} guests</div>
          <div className='flex items-center gap-1 text-gray-400 font-bold text-sm'><LuBath  className='text-primary-hover'/>{room?.bathrooms} bathrooms</div>
        </div>
      </div>

      <hr className='border-t border-gray-200'/>
      <p
        className="
          text-lg font-light text-[#1f2937] dark:text-text-secondary pt-6"
      >
        {room?.description}
      </p>






      
      
    </div>
  );
};

export default RoomInfo;
