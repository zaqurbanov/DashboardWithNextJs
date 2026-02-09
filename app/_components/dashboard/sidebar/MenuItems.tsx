"use client"

import React, { useEffect }  from 'react'
import { MenuItem } from '@/constants/constants'
import MenuLinks from './MenuLinks'
import { usePathname } from 'next/navigation'

const MenuItems = ({ item }: { item: MenuItem }) => {
  const path = usePathname()
  return (
    <li key={item.id} className={
      `text-amber-50
       hover:text-black
        hover:bg-amber-100/50
        transition-all duration-300 ease-in-out
          p-1 rounded-xs ${path === item.path && "bg-amber-100 text-black"}`
      }>
      <MenuLinks item={item} />
    </li>
  )
}

export default MenuItems