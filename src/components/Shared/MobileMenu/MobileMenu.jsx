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

const MobileMenu = ({ navItems, userInfo, dashboardRoute }) => {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4 bg-slate-100 dark:bg-gray-900">
          <SheetTitle className="sr-only ">Navigation Menu</SheetTitle>
          <div className='flex flex-col justify-between h-full'>
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

            <UserInfo />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
