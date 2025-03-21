import React from 'react'

export default function ContactMeSection() {
  return (
    <form className='h-screen bg-gray-900 flex flex-col justify-center items-center'>
      <div className='bg-white-500'>
        <input type="text" />
        <input type="text" />
        <textarea name="" id=""></textarea>
      </div>
      <button className='text-white' onClick={() => console.log('hello')}>Aaaaaaaaaaaaa</button>
    </form>
  )
}
