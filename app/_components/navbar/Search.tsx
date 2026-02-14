import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = () => {
  return (
    <div className='flex items-center gap-2'>
      <MdSearch />
<input type="text" placeholder='Search...' className='bg-transparent border-none outline-none '/>

    </div>
  )
}

export default Search