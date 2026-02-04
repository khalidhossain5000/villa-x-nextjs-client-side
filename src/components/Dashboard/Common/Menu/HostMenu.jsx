import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "../Sidebar/MenuItem";
const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Room" address="add-room" />
      <MenuItem icon={MdHomeWork} label="My Listings" address="my-listings" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="/host/dashboard/manage-bookings"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="My Profile"
        address="/host/dashboard/profile"
      />
    </>
  );
};

export default HostMenu;
