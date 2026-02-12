/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */

import ThreeDImageCarousel from "@/components/lightswind/3d-image-carousel";

const Header = ({ room }) => {
  console.log(room, "thi si is room in header");
  if (!room) return null;
  const slides=room?.roomImages.map((room,i)=>{
    return {id:i+1,src:room}
  })
  console.log(slides,'lidesslides')
  return (
    <>
      <h2 className="text-2xl font-bold">{room?.title}</h2>
      <h5 className="font-light text-neutral-500 mt-2">{room?.location}</h5>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={room.thumbnailImage}
          alt="header image"
        />
      </div>

      {/* slider */}
<ThreeDImageCarousel 
  slides={slides} 
  itemCount={3}
/>

    </>
  );
};

export default Header;
