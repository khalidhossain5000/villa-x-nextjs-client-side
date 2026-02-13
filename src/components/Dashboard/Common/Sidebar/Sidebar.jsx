"use client";
import { useState } from "react";

// image
import logo from "../../../../assets/logo/logohdsg.png";
// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { House } from "lucide-react";
import MenuItem from "./MenuItem";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { signOutUser } from "@/Redux/Features/authSlice";
import useRole from "@/Hooks/useRole";
import GuestMenu from "../Menu/GuestMenu";
import HostMenu from "../Menu/HostMenu";
import AdminMenu from "../Menu/AdminMenu";
import Loader from "@/components/Shared/Loading/Loader";
import ModeToggle from "@/components/Shared/ModeToggle/ModeToggle";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const { role, roleLoading } = useRole();


  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  //logout

  const signOutHandler = () => {
    dispatch(signOutUser());
  };

  if (roleLoading) return <Loader />;

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={50}
                className="dark:hidden"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 bg-pink-600 focus:outline-none focus:bg-gray-200"
        >
          <GiHamburgerMenu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 dark:bg-background w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
         
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-between items-center bg-[#017dee] mx-auto">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={50}
                  className=""
                />
              </Link>
              <ModeToggle/>
            </div>
   

         
          <div className="flex flex-col justify-between flex-1 mt-6">
           
            <nav>
              {/* these are common route  */}
              <MenuItem
                icon={House}
                label="Home"
                address={`/${role}/dashboard`}
              />

              {/* these are common route ends here */}
              {/* Host Menu Items */}
              {role === "guest" && <GuestMenu />}
              {role === "host" && <HostMenu /> }
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem icon={FcSettings} label="Profile" address="/profile" />
          <button
            onClick={signOutHandler}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logouts</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
