"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const PageTitle = () => {
const path = usePathname()
const title = path.split("/").pop()
  return (
    <h1 className='text-blue-600 font-bold text-2xl'>{title!.charAt(0).toUpperCase() + title!.slice(1)}
    
    </h1>
  )
}

export default PageTitle