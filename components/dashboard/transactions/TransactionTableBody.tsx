import { colorSchema } from '@/helpers/getColorSchema'
import { TransactionsInterface } from '@/types/transaction/transactionsTypes'
import Image from 'next/image'
import React from 'react'

const TransactionTableBody = ({item}:{item:TransactionsInterface}) => {
    const typeColor  = colorSchema(item.status)
  return (
    <>

      <td className=''>
        <div className='flex items-center gap-2 p-2'>
        <Image src={item.image} height={50} width={50} alt={item.name} className='border rounded-full' /> 
        <p className=''>
        {item.name} {item.surname}

        </p>

        </div>
        </td>
        <td className=''>
            <p className={`     p-1 w-max mx-auto text-black font-bold min-w-36 text-center rounded-md `}
            style={{
              color:typeColor.text
            }}>{item.status}</p>
        </td>

        <td className=''>
                <p className='text-center'>{item.date}</p>
        </td>

        <td className=''>
            <p className='text-center'>
            {item.amount} {item.amountType}

            </p>
        </td>
    </>
  )
}

export default TransactionTableBody
