import React from 'react'
import Sidebar from '../_components/sidebar/Sidebar'
import Navbar from '../_components/navbar/Navbar'
import Footer from '../_components/footer/Footer'

const DashboardLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen p-5 gap-4'>
      <div className='max-w-96 neu-flat hidden md:block   rounded-md flex-1 shrink-0 '>
        <Sidebar />

      </div>

      <div className=' flex flex-col gap-5 flex-4  shrink  '>
        <div className=' neu-flat   rounded-md p-5  '>
          <Navbar />
        
        </div>
        {children}
        <Footer/>
      </div>


    </div>
  )
}

export default DashboardLayout