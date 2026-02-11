import React from 'react'
import GenerateTableHeader from '../shared/GenerateTableHeader'
import { transactionTableHeader } from '@/constants/TransactionsTableHeader'

const Transaction = () => {
  return (
    <div className='bg-container p-4 mt-5 flex flex-col gap-5'>
      <div>
        <h2 className='text-2xl'>Latest Transactions</h2>
      </div>
      <table>
        <tr>

        <GenerateTableHeader headers={transactionTableHeader} />
        </tr>
      </table>
    </div>
  )
}

export default Transaction