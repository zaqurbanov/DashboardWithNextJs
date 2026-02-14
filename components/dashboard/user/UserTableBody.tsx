import ActionButtons from '@/app/_components/sharedComponents/ActionButtons'
import { UserInterface } from '@/types/user/user'
import Image from 'next/image'
import React from 'react'

const UserTableBody = ({item}:{item:UserInterface}) => {
  return (
    <>
      <td>
        <div className='flex gap-3 p-2 items-center'>
            <Image src={item.image} height={50} width={50} alt={item.name} className='border rounded-full' />
            <p>{item.name}</p>
        </div>
      </td>
      <td className='p-2 '>
        {item.email}
      </td>
      <td>
        <p className='p-2'>{item.createdAt}</p>
      </td>
      <td>
        <p className='p-2'>{item.role}</p>
      </td>
      <td className='p-2'>
            {item.status === 'active' ? <p className='p-2 text-green-600'>{item.status}</p> : <p className='p-2 text-red-600'>{item.status}</p>}
      </td>
      <td>
        <ActionButtons/>
      </td>

    </>
  )
}

export default UserTableBody
