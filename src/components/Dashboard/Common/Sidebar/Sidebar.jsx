"use client";
import { useState } from "react";

// image
import logo from "../../../../assets/logo/logohdsg.png";
// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
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

import ToggleBtn from "@/components/Shared/Button/ToggleBtn";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(true);
  const { role, roleLoading } = useRole();
  const [toggle, setToggle] = useState( true);
  const router=useRouter()
  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  //logout

  const signOutHandler = () => {
    dispatch(signOutUser());
    router.push('/')
  };

  if (roleLoading) return <Loader />;

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between lg:hidden relative z-[9999999999999999999999999999999999999999999999999999999]">
        <div>
          <div className="flex items-center gap-2 cursor-pointer p-4 font-bold">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={50}
                className=""
              />
            </Link>
            <ModeToggle />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4  focus:outline-none focus:bg-gray-200"
        >
          
      

          {
            !isActive ?     <IoMdClose className="h-5 w-5 " /> : <GiHamburgerMenu className="h-5 w-5 " />
          }
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={` z-[99999999999999999999999999999999999999999999] xl:z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 dark:bg-[#0a121f] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full "
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
            <ModeToggle />
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <div className=" ">
              {/* If a user is host */}
              {role === "host" && <ToggleBtn toggleHandler={toggleHandler} />}
            </div>
            <nav>
              {/* these are common route  */}
              {role !== "guest" && toggle === true && (
                <MenuItem
                  icon={House}
                  label="Home Host"
                  address={`/${role}/dashboard`}
                />
              )}

              {/* these are common route ends here */}
              {/* Host Menu Items */}
              {role === "guest" && <GuestMenu />}
              {/* {role === "host" && <HostMenu /> } */}
              {role === "host" ? toggle ? <HostMenu /> : <GuestMenu /> : ""}

              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div className='text-center'>
          <hr className='border-t border-gray-400 '/>

          {role !== "guest" && (
            <MenuItem icon={FcSettings} label="Profile" address="/profile" />
          )}

          <button
            onClick={signOutHandler}
            className="mt-4 hover:scale-110 transition duration-300 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none w-full"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-red-600 px-7 text-sm lg:text-xl lg:font-bold font-medium text-slate-100 dark:text-white backdrop-blur-3xl gap-2 undefined ">
              <GrLogout className="w-5 h-5" /> Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
