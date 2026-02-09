
import { menu } from '@/constants/constants'
import React from 'react'
import MenuLinks from './MenuLinks'
import UserImage from '@/app/_components/sharedComponents/UserImage'
import UserInfo from '../../sharedComponents/UserInfo'
import MenuItems from './MenuItems'

const Sidebar = () => {
  return (
    <div className=' p-3   min-h-full overflow-y-auto '>
      <div className='flex items-center gap-3 text-soft '>
        <UserImage
        />
        <UserInfo
          name='Zaur Qurbanov'
          role='Admin'
        />

      </div>

      <ul className='flex flex-col gap-3 mt-5'>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <span className='text-blue-100 font-bold text-xl'>
                {item.title}
              </span>
              <ul className='flex flex-col  gap-2   mt-2'>
                {item.list.map((item, index) => {
                  return (
                  <MenuItems item={item} key={item.id}/>
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