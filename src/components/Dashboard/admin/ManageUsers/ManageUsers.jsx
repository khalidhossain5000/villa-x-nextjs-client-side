'use client'
import { useQuery } from '@tanstack/react-query'


import useAxiosSecure from '@/Hooks/useAxiosSecure'
import UserDataRow from '../../Common/TableRows/UserDataRow'
import Loader from '@/components/Shared/Loading/Loader'

const ManageUsers = () => {
  const axiosSecure=useAxiosSecure()
  const {
      data: allUsers,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["allUsers",],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/api/auth/all-users`,
        );
        return res.data.userData
      },
     
    });


  if(isLoading) return <Loader/>
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
      

        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:bg-[#1e293b]  dark:text-slate-100 dark:border-primary'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers &&
                    allUsers.map(user => (
                      <UserDataRow
                        key={user._id}
                        user={user}
                        refetch={refetch}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers