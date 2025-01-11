import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <nav className='bg-purple-600 p-2 md:p-4 shadow-md'>
     <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl text-white md:font-bold'>Assigment 7</h1>
        <div className=' space-x-2 md:space-x-4'>
            <Link href="/" className='text-white hover:underline'>
            Home
            </Link>
            <Link href="/Products" className='text-white hover:underline'>
            Products
            </Link>
            <Link href="/Books" className='text-white hover:underline'>
            Books
            </Link>
        </div>
     </div>
   </nav>
  )
}

export default Navbar
