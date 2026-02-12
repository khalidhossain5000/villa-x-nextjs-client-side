/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */

import ThreeDImageCarousel from "@/components/lightswind/3d-image-carousel";

const Header = ({ room }) => {
  console.log(room, "thi si is room in header");
  if (!room) return null;
  const slides = room?.roomImages.map((room, i) => {
    return { id: i + 1, src: room };
  });
  console.log(slides, "lidesslides");
  return (
   <div
  style={{
    backgroundImage: `url(${room?.thumbnailImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="py-22 mt-12 rounded-xl shadow-xl" 
>
<h2 className='text-center text-white font-playfair text-xl md:text-2xl lg:text-3xl'>Explore Rooms Available Images:</h2>
      <h2 className="text-2xl font-bold">{room?.title}</h2>
      <h5 className="font-light text-neutral-500 mt-2">{room?.location}</h5>
     

      {/* slider */}
      <ThreeDImageCarousel slides={slides} itemCount={3} autoplay={true} />
    </div>
  );
};

export default Header;
