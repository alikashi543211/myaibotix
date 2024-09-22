import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex flex-col lg:flex-row justify-between items-center bg-white'>
      <div className='w-full lg:w-auto flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input
          type="text"
          placeholder='Search...'
          className='outline-none w-full' // Ensures the input takes full width on smaller screens
        />
      </div>

      <div className='bg-primary p-1 rounded-full text-xs text-white px-2 mt-4 lg:mt-0'>
        <h2 className='text-center lg:text-left'>
          🔥 The power of Artificial Intelligence MyAiBotix
        </h2>
      </div>
    </div>

  )
}

export default Header