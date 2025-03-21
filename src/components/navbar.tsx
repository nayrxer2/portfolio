import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <Image src={''} alt='' width={24} height={24}/>
        <h1>RG</h1>
      </div>
      <div className='flex space-x-12'>
        <div>about</div>
        <div>portfolio</div>
        <div>resume</div>
      </div>
    </div>
  )
}

export default Navbar;