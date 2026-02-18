import React from "react";
import logo from "../../../assets/logo/logohdsg.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const content = [
    {
      title: "Address",
      content: "742 Evergreen Terrace",
      contenti: "Brooklyn, NY 11201",
    },
    {
      logo: logo,
      socialIcon: [
        { icon: FaFacebook },
        { icon: FaSquareXTwitter },
        { icon: FaLinkedin },
        { icon: FaInstagramSquare },
        { icon: FaYoutube },
      ],
    },
    {
      title: "Contact Us",
      content: "T. +929 333 9296",
      contenti: "M. contact@rivora.com",
    },
  ];
  return (
    <footer className="bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-stone-800 py-6 m-3 shadow-xl rounded-2xl">
      <div className="content max-w-7xl mx-auto py-14">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-6 text-center">
          {content.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2"
            >
              {/* Check if it has a title */}
              {item.title && (
                <div className="text-black dark:text-white">
                  <h3 className="font-bold text-2xl pb-3">{item.title}</h3>
                  <p className="text-xl font-semibold text-gray-900 dark:text-slate-100 pb-2">
                    {item.content}
                  </p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                    {item.contenti}
                  </p>
                </div>
              )}

              {/* Check if it has social icons */}
              {item.socialIcon && (
                <>
                  {item.logo && (
                    <img src={item.logo.src} alt="Logo" className="mb-3 w-44" />
                  )}
                  <div className="flex gap-4">
                    {item.socialIcon.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={i}
                          className="
          w-11 h-11 
          flex items-center justify-center 
          rounded-full 
          bg-amber-500 
          text-black
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-yellow-600 
          hover:text-white 
          hover:scale-110 
          hover:-translate-y-1
          shadow-2xl hover:shadow-lg border border-gray-400
        "
                        >
                          <Icon size={20} />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* copyrights */}
      <div className="border-t border-t-slate-200">
        <div className="max-w-7xl mx-auto pt-4">
           <p className="text-lg text-black text-center font-medium">&copy;2026 <span className="font-bold">VillaX</span> All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
