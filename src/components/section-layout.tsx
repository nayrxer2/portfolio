import React from 'react'

export interface SectionLayoutProps {
  children: React.ReactNode,
  className?: string,
  strId?: string
}

export default function SectionLayout({
  children,
  className,
  strId
}: SectionLayoutProps) {
  return (
    <div className={`${className} h-screen grid items-center relative`} id={strId}>
      {children}
    </div>
  )
}
