import React from 'react'

export interface SectionLayoutProps {
  children: React.ReactNode,
  className?: string,
}

export default function SectionLayout({
  children,
  className
}: SectionLayoutProps) {
  return (
    <div className={`${className} h-screen grid items-center`}>
      {children}
    </div>
  )
}
