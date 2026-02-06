import React from 'react'
import Sidebar from '../_components/dashboard/sidebar/Sidebar'
import Navbar from '../_components/dashboard/navbar/Navbar'

const DashboardLayout = ({
  children
} :{children:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen p-5'>
      <div className='max-w-96 bg-cyan-50/5 shadow-2xl backdrop-blur-3xl backdrop-brightness-90  rounded-2xl flex-1 shrink-0 '>
        <Sidebar/>

      </div>

      <div className=' flex-4 shrink '>
        <div className=''>
        <Navbar/>

        </div>
      {children}
      </div>


    </div>
  )
}

export default DashboardLayout