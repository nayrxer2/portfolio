import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <Image src={''} alt='' width={24} height={24}/>
      <div className='flex space-x-12'>
        <div>works</div>
        <div>resume</div>
        <div>contacts</div>
      </div>
    </div>
  )
}

export default Navbar;