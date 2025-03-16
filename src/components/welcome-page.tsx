"use client";

import React, { useState } from 'react'

const WelcomePage = () => {
  const [ isClicked,setIsClicked ] = useState(false)
  return (
    <React.Fragment> 
      <div className={`${isClicked && 'hidden'} flex justify-center h-full text-center`}>
        <div className='max-w-[600px] space-y-4 h-screen items-center content-center'>
          <h1 className='font-barlowCondensed'>Hello, I'm Ryan Rex Gimotea</h1>
          <p>
            A front-end developer who enjoys turning ideas into websites that are not 
            only functional but also easy on the eyes. I focus on clean, 
            responsive design and smooth user experiences, always aiming to make the web a bit more intuitive, 
            one project at a time.
          </p>
          <button onClick={() => setIsClicked(!isClicked)}>image</button>
        </div>
      </div>
    </React.Fragment>
  )
  
}

export default WelcomePage;
