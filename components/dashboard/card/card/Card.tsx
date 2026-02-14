import StatusBadge from '@/components/shared/StatusBadge'
import { CardItem } from '@/types/card/card'
import { StatusType } from '@/types/statusBadge'
import React from 'react'
import { FaPeopleCarryBox } from 'react-icons/fa6'

const Card = ({card}:{card:CardItem}) => {
  return (
    <div className='bg-container neu-inset w-auto min-w-32 md:min-w-60  p-4 flex  gap-5   rounded-xl'>  

      <div>
          <FaPeopleCarryBox/>

      </div>
      <div className='flex-2'>
        <h3 className='capitalize font-bold'>{card.title}</h3>

        <p className='italic text-sm'>{card.decription}</p>

      </div>
      <div className='md:flex-1'>
        <StatusBadge type={card.status} />
      </div>


    </div>
  )
}

export default Card