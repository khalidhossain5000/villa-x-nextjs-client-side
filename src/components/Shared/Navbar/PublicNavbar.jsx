'use client'
import React from "react";
import logo from "../../../assets/logo/logo.png";
import darklogo from "../../../assets/logo/dark-logo.png";
import Link from "next/link";
import Image from "next/image";
import GlobalButton from "../Button/GlobalButton";
import ModeToggle from "../ModeToggle/ModeToggle";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useAuth } from "@/Hooks/useAuth";
const PublicNavbar = () => {
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/all-room", label: "All Room" },
    { href: "/host", label: "Available Host" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];
  const userInfo=useAuth()

  console.log(userInfo,'this is user info in public navbar');
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
          <ModeToggle />
          <Link href="/auth/login">
            <GlobalButton
              className={
                "text-secondary dark:text-background  text-sm  font-medium font-urbanist rounded-sm bg-accent hover:bg-accent-hover/50  px-5 py-2 2xl:font-bold"
              }
            >
              Login
            </GlobalButton>
          </Link>

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
