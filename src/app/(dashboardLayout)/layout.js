import Sidebar from '@/components/Dashboard/Common/Sidebar/Sidebar'

const CommonDashboardLayout = ({children}) => {
  return (
    <div className='relative min-h-screen md:flex'>
      {/* Sidebar Component */}
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
       {children}
        </div>
      </div>
    </div>
  )
}

export default CommonDashboardLayout
