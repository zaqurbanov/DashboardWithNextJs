import { colorSchema } from '@/helpers/getColorSchema'
import { StatusType } from '@/types/statusBadge'
import React from 'react'

const StatusBadge = ({type}:{type:StatusType}) => {

  const color  = colorSchema(type)
  
  return (
    <div className={`p-1 px-3.5 rounded-xl neu-flat  font-bold `}
    style={{
     
      color:`${color.text}`
    }}
    >{type}</div>
  ) 
}

export default StatusBadge 