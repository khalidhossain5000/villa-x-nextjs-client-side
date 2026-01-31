'use client'
import UpdateUserModal from '@/components/Shared/Modal/UpdateUserModal/UpdateUserModal'
import useAxiosSecure from '@/Hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { toast } from 'react-hot-toast'
const UserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false)

  const axiosSecure=useAxiosSecure()
console.log(user,'from user data row')
 const { mutateAsync } = useMutation({
    mutationKey: ["update-user-role"],
    mutationFn: async (role) => {
      const res = await axiosSecure.patch(`/api/auth/update-user-role-admin/${user?._id}/role`,{
        role:role
      });
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data, "this is delte response data over here");
      refetch()
      toast.success("Luser dupd du sd ds");
    },
  });





  const modalHandler = async role => {
    console.log(role, 'from user data row')
    try {
      
await mutateAsync(role)
      
      refetch()
      toast.success('User role updated!')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setIsOpen(false)
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.userRole}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </span>
        {/* Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        />
      </td>
    </tr>
  )
}

export default UserDataRow