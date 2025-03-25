import React from 'react'

export interface SectionCountProps {
  sectionNum: string
}

export default function SectionCount({sectionNum}: SectionCountProps) {
  return (
    <div className='fixed h-screen left-12 bottom-0 bg-blue-500 top-0 translate-y-[80%] z-50'>
        <p className='display-2xl-bold text-white'>
          {sectionNum}
        </p>
        <hr/>
    </div>
  )
}
