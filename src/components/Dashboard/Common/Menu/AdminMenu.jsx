import { FaUserCog } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";
import { House } from "lucide-react";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={House} label="Home Admin" address={`/admin/dashboard`} />
      <MenuItem
        icon={FaUserCog}
        label="Manage Users"
        address="/admin/dashboard/manage-users"
      />
    </>
  );
};

export default AdminMenu;
