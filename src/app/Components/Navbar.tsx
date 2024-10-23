import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-purple-500 h-12'>
      <div className='text-black-700 flex justify-between items-center'>
        <h1 className='text-2xl m-2 cursor-pointer hover:not-italic font-extrabold'>CarLab</h1> 

        <nav>
          <ul className='flex gap-3 mr-4'>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/about">About</Link>
            </li>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/contact">Contact</Link>
            </li>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar