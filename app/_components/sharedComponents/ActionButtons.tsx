import React from 'react'
import { GrFormView } from 'react-icons/gr'
import { MdDelete, MdViewDay } from 'react-icons/md'

const ActionButtons = () => {
  return (
    <div className='flex'>
        <div className='cursor-pointer text-blue-600'>

        <GrFormView className='text-2xl' />
        </div>

        <div className='cursor-pointer text-red-700'>
            <MdDelete className='text-2xl'/>

        </div>
    </div>
  )
}

export default ActionButtons
