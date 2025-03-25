import React from 'react'
import SectionLayout from './section-layout'
import SectionCount from './section-count'

export default function ContactMeSection() {
  return (
    <SectionLayout className='z-0 bg-gray-900 relative' strId='1'>
      <form className='flex flex-col justify-center items-center'>
        <div className='bg-white-500 grid'>
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
        </div>
        <button className='text-white' onClick={() => console.log('hello')}>Aaaaaaaaaaaaa</button>
      </form>
    </SectionLayout>
  )
}
