import { SocialLinks } from '@/constants/social-link'
import React from 'react'



export default function SocialNavLinks() {
  return (
    <div className='fixed h-screen left-12 top-0 translate-y-[40%] bottom-0'>
      <div className='grid space-y-8 items-start'>
        {SocialLinks.map((list) => 
          <div key={list.id}>
            <a href={`${list.sLink}`}>{list.name}</a>
          </div>
        )}
      </div>
    </div>
  )
}
