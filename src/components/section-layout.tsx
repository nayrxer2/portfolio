import React from 'react'

export interface SectionLayoutProps {
  children: React.ReactNode
}

export default function SectionLayout({
  children
}: SectionLayoutProps) {
  return (
    <div className='flex relative bg-transparent'>
      {children}
    </div>
  )
}
