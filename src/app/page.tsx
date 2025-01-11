import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid  grid-cols-1 md:grid-cols-2'>
      <Image
      src="/Images/img.png"
      alt='image'
      width={600}
      height={700}
      className=' mt-14 md:mt-36  w-full md:ml-24'
      />
      <Image 
      src="/Images/img.jpg"
      alt='img'
      width={500}
      height={200}
      className=' mt-7 md:mt-14  w-full md:ml-16'
      />
    </div>
  </div>
  )
}

export default Home
