import React from 'react'

const UserInfo = ({name,role}:{
  name:string;
  role:string;
}) => {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-2xl'>{name}</span>
      <span className='text-2xl'>{role}</span>
    </div>
  )
}

export default UserInfo