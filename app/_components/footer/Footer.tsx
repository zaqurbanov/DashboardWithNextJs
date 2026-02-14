import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between neu-flat min-h-36 p-5 rounded-xl'>

      <p>
        Powered by <span className='font-bold'>Zaur Qurbanov</span>

        </p> 
        { new Date().getFullYear() }   
    </div>
  )
}

export default Footer
