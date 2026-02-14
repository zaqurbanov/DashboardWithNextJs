import CardContainer from '@/components/dashboard/card/card/CardContainer';
import Chart from '@/components/dashboard/Chart';
import RightBar from '@/components/dashboard/rightBar/RightBar';
import Transaction from '@/components/dashboard/transactions/Transaction';
import React from 'react'
export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};
const DashBoardPage = () => {
  return (
    <div className='flex gap-2'>
      {/* card wrapper */}
      <div className='flex-3'>
        <CardContainer />
        <Transaction/>
    <Chart/>
    
      </div>
      <div className='flex-1'>
      <RightBar/>

      </div>




    </div>
  )
}

export default DashBoardPage