import React from 'react'

const UserInfo = ({name,role}:{
  name:string;
  role:string;
}) => {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-xl text-blue-600'>{name}</span>
      <span className='text-xl text-blue-300'>{role}</span>
    </div>
  )
}

export default UserInfo