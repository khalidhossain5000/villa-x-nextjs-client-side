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
      className="py-22 mt-6 lg:mt-12 lg:rounded-xl shadow-xl"
    >
      <h2 className="text-center text-white font-playfair text-xl md:text-2xl lg:text-3xl">
        Explore Rooms Available Images:
      </h2>

      {/* slider */}

      <div className="pt-22 md:pt-12 ">
        <ThreeDImageCarousel slides={slides} itemCount={3} autoplay={true} />
      </div>
    </div>
  );
};

export default Header;
