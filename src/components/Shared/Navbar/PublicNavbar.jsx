"use client";
import React, { useState } from "react";
import logo from "../../../assets/logo/logo.png";
import darklogo from "../../../assets/logo/dark-logo.png";
import Link from "next/link";
import Image from "next/image";

import ModeToggle from "../ModeToggle/ModeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserInfo from "@/components/Auth/NavBarUserInfo/UserInfo";
import HostModal from "../Modal/HostRequestModal/HostModal";
import { useAuth } from "@/Hooks/useAuth";

const PublicNavbar = () => {
  const {userInfo}=useAuth()
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/all-rooms", label: "All Rooms" },
    { href: "/host", label: "Available Host" },
    { href: "/about", label: "About Us" },
    { href: "/host/dashboard", label: "Dashboard" },
    { href: "/contact", label: "Contact Us" },
  ];

  // host req modal
  const [isOpen, setIsOpen] = useState(false);



  const modalHandler=async()=>{
console.log('i want to be a host accpet requ')

setIsOpen(false)
  }
  return (
    <header className="bg-background dark:bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              className="dark:hidden"
            />
            <Image
              src={darklogo}
              alt="Logo"
              width={150}
              height={50}
              className="hidden dark:block"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="auth-btns hidden md:flex items-center space-x-5">
          {/* host apply button div container */}
        {
          userInfo &&   <div>
            <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-xl font-bold text-slate-600 animate-skeletonLoader"
          >
            Host Your Home
          </button>
          {/* host req modal here below */}

          <HostModal isOpen={isOpen} closeModal={() => setIsOpen(false)} modalHandler={modalHandler}/>
          </div>
        }

          <ModeToggle />

          <UserInfo />

          {/* Mobile Menu */}
        </div>
        <MobileMenu
          navItems={navItems}
          //   hasAccessToken={!!accessToken}
          //   userInfo={userInfo}
          //   dashboardRoute={dashboardRoute}
        />
      </div>
    </header>
  );
};

export default PublicNavbar;
