import React from "react";
import img from "../assets/404page/ersdg.jpg";
import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <section className=" bg-[#ffffff] min-h-screen flex flex-col justify-around">
      {/* title */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-poppins font-bold md:font-extrabold text-black text-center   py-6 lg:py-2 pt-9 lg:pt-5 lg:pb-6">
          404 – This Page Went on Vacation
        </h1>
      </div>
      {/* image */}
      <div className="imgs text-center py-9 lg:py-5  2xl:py-0">
        <Image
          src={img}
          alt="forbidden image"
          width={500}
          height={150}
          className="  mx-auto lg:w-7/12"
        />
      </div>

      {/* image */}
      <div className="w-full  text-center ">
        <Link href="/">
          <button className="hover:scale-110 transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#08fdd4] dark:bg-slate-950 px-7 text-sm lg:text-xl lg:font-bold font-medium text-black dark:text-white backdrop-blur-3xl gap-2 undefined ">
              Back Home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
