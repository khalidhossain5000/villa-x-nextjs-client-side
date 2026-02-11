import UserInfo from "@/components/Auth/NavBarUserInfo/UserInfo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "../ModeToggle/ModeToggle";
import HostYourHomeInfo from "../Navbar/HostYourHomeInfo";
import HostModal from "../Modal/HostRequestModal/HostModal";

const MobileMenu = ({
  navItems,
  userInfo,
  dashboardRoute,
  role,
  setIsOpen,
  isOpen,
  closeModal,
  modalHandler,
}) => {
  return (
    <div className="xl:hidden ">

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] p-4 bg-[#0c79f4] border-none dark:bg-gray-900"
        >
          <SheetTitle className="sr-only ">Navigation Menu</SheetTitle>
          <div className="flex flex-col justify-between h-full">
            <ModeToggle />

            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className='flex items-center gap-3'>
              {role === "host" && (
                <div className=''>
                  {/* host req modal will open by clicking host your home */}
                  <HostYourHomeInfo setIsOpen={setIsOpen} />

                  {/* host req modal here below  start here*/}

                  <HostModal
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    modalHandler={modalHandler}
                  />
                </div>
              )}
              <UserInfo />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
