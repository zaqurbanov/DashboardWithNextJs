import React from 'react'
import RightBarCard from './RightBarCard'
import { getNews } from '@/services/news.services'

const RightBar =async () => {
  const data  = await getNews()
  return (
    <div className='flex flex-col gap-5 p-2'>
      {
        data.map((card,index)=>{
          return(<RightBarCard key={card.id} data={card} />)
        })
      }
      
      
      </div>
  )
}

export default RightBar