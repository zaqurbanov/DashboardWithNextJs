import React from 'react'
import PageTitle from '../sharedComponents/PageTitle'
import Search from './Search'
import AlertIcon from './AlertIcon'
import MessageIcon from './MessageIcon'
import LanguageIcon from './LanguageIcon'

const Navbar = () => {
  return (
    <div className='flex justify-between text-soft text-color-soft'>
      <PageTitle />
      <div className='flex items-center gap-3'>
        <Search />
        <AlertIcon />
        <MessageIcon />
        <LanguageIcon />
      </div>
    </div>
  )
}

export default Navbar