import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full h-20 flex flex-row justify-between items-center pl-8 pr-8 backdrop-blur-lg bg-opacity-50 fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='flex gap-10'>
        <Image 
          width={50} 
          height={50} 
          alt="Logo plant" 
          src="/logo-plant.jpg" 
          className='object-contain rounded-full' 
        />
      </div>
      
      <div className='flex items-center space-x-6'>
        <Link href="/login">
          <Button variant='green' size='md'>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
