'use client'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import { useState } from 'react'
import DeleteRoomBookingByHost from '@/components/Shared/Modal/DeleteRoomBooking/DeleteRoomBookingModal'
import useAxiosSecure from '@/Hooks/useAxiosSecure'

const BookedRoomRow = ({ booking, refetch }) => {
  let [isOpen, setIsOpen] = useState(false)
console.log(booking,'thsdf dboksdfnsdf')
  const closeModal = () => setIsOpen(false)
const axiosSecure=useAxiosSecure()
  const modalHandler = async id => {
    try {
      await axiosSecure.delete(`/api/delete-booking/${id}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
      refetch()
      toast.success('Booking Canceled')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      closeModal()
    }
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.guest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {booking?.guest?.name}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${booking?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.from), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.to), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        <DeleteRoomBookingByHost
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={booking._id}
        />
      </td>
    </tr>
  )
}

export default BookedRoomRow