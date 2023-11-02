import React from 'react'
import  {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-green-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                  <span className='text-green-500'>Real</span>
                  <span className='text-green-700'>State</span>
              </h1>
            </Link>            
            <form className='bg-green-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Buscar...' className='bg-transparent focus:outline-none' />
                <FaSearch className='text-green-600 sm:w-16' />
            </form>
            <ul className='flex gap-4'>
              <Link to='/'>
                <li className='hidden sm:inline text-green-700 hover:underline'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='hidden sm:inline text-green-700 hover:underline'>About</li>
              </Link>
              <Link to='/sign-in'>
                <li className=' text-green-700 hover:underline'>Sign in</li>              
              </Link>
            </ul>
        </div>
    </header>
  )
}
