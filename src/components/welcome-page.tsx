"use client";

import React, { useState } from 'react'
import ProjectCards from './project-cards';

export interface WelcomePageProps {
  sendToParent?: () => void
}

const WelcomePage = ({sendToParent}: any) => {
  const [ data, setData ] = useState('')
  
  const handleSend = () => {
    sendToParent(data)
  }

  return (
    <React.Fragment> 
      <div className={`flex justify-center w-screen h-screen`}>
        <div className='flex-basis-1/2'>
          <img src='' alt=''/>
        </div>
        <div className='flex-basis-1/2 max-w-[600px] space-y-4 h-screen items-center content-center'>
          <h1 className='font-barlowCondensed'>Hello, I'm Ryan Rex Gimotea</h1>
          <p>
            A front-end developer who enjoys turning ideas into websites that are not 
            only functional but also easy on the eyes. I focus on clean, 
            responsive design and smooth user experiences, always aiming to make the web a bit more intuitive, 
            one project at a time.
          </p>
          <button onClick={() => {setData('Hello parent');handleSend()}}>image</button>
        </div>
        <div>
        </div>
      </div>
    </React.Fragment>
  )
  
}

export default WelcomePage;
