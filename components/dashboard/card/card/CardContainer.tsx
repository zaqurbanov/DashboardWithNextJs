import React from 'react'
import Card from './Card'
import { getCards } from '@/services/card.services'

const CardContainer = async() => {
  const cards = await getCards()
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  '>
      {cards.map((card,index)=>{
        return(
          <Card key={card.id} card={card} />

        )
      })}
    </div>
  )
}

export default CardContainer