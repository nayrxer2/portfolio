import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-4 flex justify-between items-center h-12 p-4 bg-blue-700 z-50'>
      <div className='flex'>
        <Image src={''} alt='' width={24} height={24}/>
        <h1>RG</h1>
      </div>
      <div className='flex space-x-12'>
        <Link href={'/#1'}>aaa</Link>
        <div>about</div>
        <div>portfolio</div>
        <div>resume</div>
      </div>
    </div>
  )
}

export default Navbar;