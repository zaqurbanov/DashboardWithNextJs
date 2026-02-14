import { NewsInterface } from '@/types/news/news'
import React from 'react'

const RightBarCard = ({data}:{data:NewsInterface}) => {
  return (
    <div className='flex flex-col gap-4 neu-inset rounded-xl  p-3
    '>
      <p className='italic text-blue-500  neu-flat py-1 px-5 font-bold rounded-md w-max '>{data.status}</p>
      <h2 className='text-blue-600 font-bold'>{data?.title}</h2>
      <p className='text-sm italic'>{data?.subtitle}</p>
      <p className='text-sm'>{data.description}</p>
      <button className='neu-button text-blue-700 p-1 rounded-md'>Read More</button>
    </div>
  )
}

export default RightBarCard
