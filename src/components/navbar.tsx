import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ClientNav from './clientNav'

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
      <ul className="flex gap-10 items-center">
        <Link href="/dashboard">
        <li className="text-lg font-semibold text-black hover:text-custom-green transition-colors duration-300 ease-in-out cursor-pointer">Dashboard</li>
        </Link>
        <li className="text-lg font-semibold text-black hover:text-custom-green transition-colors duration-300 ease-in-out cursor-pointer">Profile</li>
        <li className="text-lg font-semibold text-black hover:text-custom-green transition-colors duration-300 ease-in-out cursor-pointer">Contact</li>
      </ul>
      <div className='flex items-center space-x-6'>
        <ClientNav/>
      </div>
    </div>
  );
}

export default Navbar;
