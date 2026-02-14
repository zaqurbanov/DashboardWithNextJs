import Link from 'next/link'
import React from 'react'
import { MdSearch } from 'react-icons/md'

interface Props {
    placeholder:string,
    link:string
}
const MenuTop = ({placeholder,link}:Props) => {
  return (
    <div>
      <div className='flex justify-between  p-5 text-blue-600 neu-flat rounded-2xl'>
        <div className='flex items-center gap-5'>

           <MdSearch />
     <input type="text" placeholder={placeholder} className='bg-transparent border-none outline-none '/>
        </div>

        <div>
            <Link href={link} className='neu-button text-blue-600 p-1 py-2 px-5 rounded-md'>Add</Link>
        </div>
     
         </div>
    </div>
  )
}

export default MenuTop
