
"use client"
import { menu } from '@/constants/constants'
import React from 'react'
import MenuLinks from './MenuLinks'
import UserImage from '@/app/_components/sharedComponents/UserImage'
import UserInfo from '../../sharedComponents/UserInfo'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const path = usePathname()
  return (
    <div className=' p-5  rounded-2xl min-h-full overflow-y-auto '>
      <div className='flex items-center gap-1 text-soft '>
        <UserImage
        />
        <UserInfo
          name='Zaur Qurbanov'
          role='Admin'
        />

      </div>

      <ul className='flex flex-col gap-4 mt-8'>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <span className='text-blue-100 font-bold text-3xl'>
                {item.title}
              </span>
              <ul className='flex flex-col  gap-4  text-2xl mt-5'>
                {item.list.map((item, index) => {
                  return (
                    <li key={index} className={`text-amber-50 hover:text-black hover:bg-amber-100/50  p-2 rounded-xs ${path === item.path && "bg-amber-100 text-black"}`}>
                      <MenuLinks item={item} />
                    </li>
                  )
                })}

              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar