"use client"

import React, { useEffect }  from 'react'
import { MenuItem } from '@/constants/constants'
import MenuLinks from './MenuLinks'
import { usePathname } from 'next/navigation'

const CustomIcon = ()=>{
  <p className='w-6 h-6'>

  </p>
}
const MenuItems = ({ item }: { item: MenuItem }) => {
  const path = usePathname()
  
  return (
    <li key={item.id} className={
      `flex items-center w-full px-6 py-4 mb-1 transition-all duration-300 rounded-xl relative overflow-hidden 
          ${path === item.path ? "neu-pressed text-blue-600 font-semibold ":"text-gray-500  hover:text-blue-500"}`
      }>
        {
path === item.path &&
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-500 rounded-r-full shadow-[0_0_12px_rgba(59,130,246,0.6)]'>
        </div>
        }
      <MenuLinks item={item} />

    </li>
  )
}

export default MenuItems