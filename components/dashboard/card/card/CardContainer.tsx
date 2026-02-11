import React from 'react'
import Card from './Card'
import { getCards } from '@/services/card.services'

const CardContainer = async() => {
  const cards = await getCards()
  return (
    <div className='grid grid-cols-3 gap-3  '>
      {cards.map((card,index)=>{
        return(
          <Card key={card.id} card={card} />

        )
      })}
    </div>
  )
}

export default CardContainer