"use client";
import React, { useEffect, useState } from "react";
// import logo from "../../../assets/logo/logo.png";
import logo from "../../../assets/logo/logohdsg.png";

import Link from "next/link";
import Image from "next/image";

import ModeToggle from "../ModeToggle/ModeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserInfo from "@/components/Auth/NavBarUserInfo/UserInfo";
import HostModal from "../Modal/HostRequestModal/HostModal";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useRole from "@/Hooks/useRole";
import ShinyText from "@/components/lightswind/shiny-text";
import HostYourHomeInfo from "./HostYourHomeInfo";
import { usePathname } from "next/navigation";

const PublicNavbar = () => {
  const { userInfo } = useAuth();
  const { role } = useRole();
  const axiosSecure = useAxiosSecure();
  const [sticky, setSticky] = useState(false);
  const pathname=usePathname()
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/all-rooms", label: "All Rooms" },
    { href: "/host", label: "Available Host" },
    { href: "/about", label: "About Us" },
    { href: `/${role}/dashboard`, label: "Dashboard" },
    { href: "/contact", label: "Contact Us" },
  ];

  // console.log(userInfo,'this is userInfo',role)
  // host req modal
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = async () => {
    console.log("i want to be a host accpet requ");
    await axiosSecure
      .patch(`/api/auth/update-user/${userInfo?.email}`, {
        status: "requested",
      })
      .then((res) => {
        toast.success("Host request sent wait for admin approval");
        console.log(res.data, "this is res");
      })
      .catch((err) => {
        console.log(err, "this eerrrr");
        if (err.status === 400) {
          toast.error(
            "You have already sent a host request,wait for admin approval",
          );
        }
      });

    setIsOpen(false);
  };

  useEffect(() => {
    // handler: set sticky if scrolled more than 50px
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };

    // use passive listener for better scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });

    // run once to set initial state (if page opened not at top)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // sticky code ends
  console.log(pathname,'this is pathname');
  return (
    
    // <header
    //   className={`py-2 transition-all duration-300 ${
    //     sticky
    //       ? `sticky top-0 left-0 w-full ${pathname==='/' ? 'bg-transparent' : 'bg-blue-200'}  backdrop-blur-3xl  shadow-md z-99999 py-3`
    //       : `absolute top-0 left-0 w-full  ${pathname==='/' ? 'bg-transparent' : 'bg-linear from-[#0300ff] to-red-600'} py-3 lg:py-4 xl:py-5 z-50`
    //   }`}
    // >

    <header
  className={`py-3 transition-all duration-300 ${
    pathname === "/"
      ? sticky
        ? "sticky top-0 left-0 w-full bg-transparent backdrop-blur-3xl shadow-md z-50"
        : "absolute top-0 left-0 w-full bg-transparent z-[9999999]"
      : "sticky top-0 left-0 w-full bg-linear-to-r from-primary via-[#0200cc] dark:via-[#0bc50b]  to-[#027016] shadow-md z-[9999999999]"
  }`}
>

      <div className="container  mx-auto flex h-16 items-center justify-between px-4">
        <div className="logo">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={140} height={50}  className="w-38 lg:w-9/12" />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              className="text-white hover:text-white transition-colors text-xl capitalize"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="auth-btns hidden md:flex items-center space-x-5">
          {/* host apply button div container */}
          {role==='host' && (
            <div>
              {/* host req modal will open by clicking host your home */}
              <HostYourHomeInfo setIsOpen={setIsOpen}/>

              {/* host req modal here below  start here*/}

              <HostModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                modalHandler={modalHandler}
              />
            </div>
          )}

          <ModeToggle />

          <UserInfo />

          {/* Mobile Menu */}
        </div>

        {/* mobile menu responsive one here */}
        
        <MobileMenu
          navItems={navItems}
          role={role}
          setIsOpen={setIsOpen}
                          isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                modalHandler={modalHandler}
          //   hasAccessToken={!!accessToken}
          //   userInfo={userInfo}
          //   dashboardRoute={dashboardRoute}
        />
      </div>
    </header>
  );
};

export default PublicNavbar;
