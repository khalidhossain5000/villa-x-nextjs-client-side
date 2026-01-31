import { GrUserAdmin } from "react-icons/gr";
import { FaUserCog } from 'react-icons/fa'
import MenuItem from "../Sidebar/MenuItem";
import { useState } from "react";
import HostModal from "@/components/Shared/Modal/HostRequestModal/HostModal";
import useRole from "@/Hooks/useRole";
import { useAuth } from "@/Hooks/useAuth";
import Loader from "@/components/Shared/Loading/Loader";
const GuestMenu = () => {
  const { role, roleLoading } = useRole();
  const { userInfo } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = async () => {
    // try {
    //   const data = await becomeHost(user?.email)
    //   console.log(data)
    //   if (data.modifiedCount > 0) {
    //     toast.success('Success!, Please wait for admin confirmation.')
    //   } else {
    //     toast.success('Please!, Wait for admin approval👊')
    //   }
    // } catch (err) {
    //   console.log(err)
    // } finally {
    //   setIsOpen(false)
    // }
  };

  if(roleLoading) return <Loader/>

  return (
    <>
     {/* done over here o herghs */}

      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
<MenuItem icon={FaUserCog} label='My Bookings' address='/guest/dashboard/my-bookings' />
      <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default GuestMenu;
