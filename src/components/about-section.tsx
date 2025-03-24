import React from 'react'
import SectionLayout from './section-layout'

export default function AboutMeSection() {
  return (
    <SectionLayout>
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
        </div>
        <div>
        </div>
      </div>
    </SectionLayout>
  )
}
