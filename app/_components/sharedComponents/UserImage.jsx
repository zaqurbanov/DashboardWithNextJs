import Image from 'next/image'
import React from 'react'

const UserImage = () => {
  return (
    <div className='flex items-center gap-2 rounded-full overflow-hidden w-20 h-20'>
    <Image src="/noimage.png" alt="" width={100} height=  {100} className='rounded-full' />
    </div>
  )
}

export default UserImage
