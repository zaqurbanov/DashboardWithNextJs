import React from 'react'
import PageTitle from '../sharedComponents/PageTitle'
import Search from './Search'
import AlertIcon from './AlertIcon'
import MessageIcon from './MessageIcon'
import LanguageIcon from './LanguageIcon'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between text-color-soft'>
      <PageTitle />
      <div className='flex items-center gap-3 neu-flat p-3 rounded-2xl' style={{ color: 'var(--color-primary)' }}>
        <Search />
        <AlertIcon />
        <MessageIcon />
        <LanguageIcon />
        <div className='w-px h-5 rounded-full' style={{ background: 'var(--border)' }} />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
