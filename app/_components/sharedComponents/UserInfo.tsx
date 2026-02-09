import React from 'react'

const UserInfo = ({name,role}:{
  name:string;
  role:string;
}) => {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-xl'>{name}</span>
      <span className='text-xl'>{role}</span>
    </div>
  )
}

export default UserInfo