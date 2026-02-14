import ActionButtons from '@/app/_components/sharedComponents/ActionButtons'
import { ProductsInterface } from '@/types/products/productsTypes'
import Image from 'next/image'
import React from 'react'

const ProductTableBody = ({item}:{item:ProductsInterface}) => {
  return (
    <>
              <td>
        <div className='flex gap-3 p-2 items-center'>
            <Image src={item.image} height={50} width={50} alt={item.title} className='border rounded-full' />
            <p>{item.title}</p>
        </div>
      </td>
      <td className='p-2 '>
        {item.description}
      </td>
      <td>
        <p className='p-2'>{item.price}</p>
      </td>
      <td>
        <p className='p-2'>{item.createdAt}</p>
      </td>
      <td className='p-2'>
            <p className='p-2 text-red-600'>{item.stock}</p>
      </td>
      <td>
        <ActionButtons/>
      </td>
    </>
  )
}

export default ProductTableBody
