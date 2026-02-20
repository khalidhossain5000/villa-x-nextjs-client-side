import { GrUserAdmin } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";
import { useState } from "react";
import HostModal from "@/components/Shared/Modal/HostRequestModal/HostModal";
import useRole from "@/Hooks/useRole";

import Loader from "@/components/Shared/Loading/Loader";
import { House } from "lucide-react";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useAuth } from "@/Hooks/useAuth";
import toast from "react-hot-toast";
const GuestMenu = () => {
  const { role, roleLoading } = useRole();
  const axiosSecure = useAxiosSecure();
  const { userInfo, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };


  if(!userInfo.email || loading || roleLoading) return <Loader/>

  

  // if (roleLoading) return <Loader />;
const modalHandler = () => {
    console.log("i want to be a host accpet requ");
    axiosSecure
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
  return (
    <>
      <MenuItem icon={House} label="Home Guest" address={"/guest/dashboard"} />

      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer dark:text-slate-400"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <MenuItem
        icon={FaUserCog}
        label="My Bookings"
        address="/guest/dashboard/my-bookings"
      />

      <MenuItem
        icon={FaUserCog}
        label="My Room Cancel Requests"
        address="/guest/dashboard/room-cancel-req"
      />

      <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default GuestMenu;
