import Link from 'next/link'
import React from 'react'
import { MenuItem } from '@/constants/constants'

const MenuLinks = ({item}:{item:MenuItem}) => {
  return (
    <Link href={item.path} className='flex w-full  items-center gap-3'>
    <span>{item.icon}</span>
    {item.title}
    </Link>
  )
}

export default MenuLinks