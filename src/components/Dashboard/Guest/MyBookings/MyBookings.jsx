'use client'
import { useQuery } from '@tanstack/react-query'



import EmptyMessage from '@/components/Shared/EmptyMessage/EmptyMessage'
import TableRow from '../TableRow/TableRow'
import { useAuth } from '@/Hooks/useAuth'
import Loader from '@/components/Shared/Loading/Loader'
import useAxiosSecure from '@/Hooks/useAxiosSecure'

const MyBookings = () => {
  const { userInfo:user, loading } = useAuth()
  
  const axiosSecure=useAxiosSecure()
// all rooms data
    const { data: myBookingsData, isLoading ,refetch} = useQuery({
      queryKey: ["userbookings", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/api/my-bookings/${user?.email}`);
        return res.data.myBookings;
      },
      keepPreviousData: true,
      enabled: !!user?.email,
    });

  if (isLoading ) return <Loader />

  console.log(myBookingsData,'this is my bookings data')
  return (
    <>
    
      {myBookingsData && Array.isArray(myBookingsData) && myBookingsData.length > 0 ? (
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Info
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Price
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        From
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        To
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myBookingsData &&
                      myBookingsData.map(booking => (
                        <TableRow
                          key={booking._id}
                          booking={booking}
                          refetch={refetch}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyMessage
          message='No booking data available.'
          address='/'
         
        />
      )}
    </>
  )
}

export default MyBookings