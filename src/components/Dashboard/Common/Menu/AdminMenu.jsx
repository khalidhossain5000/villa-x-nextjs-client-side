import { FaUserCog } from 'react-icons/fa'
import MenuItem from '../Sidebar/MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={FaUserCog} label='My Profile' address='/admin/dashboard/profile' />
    
    </>
  )
}

export default AdminMenu
