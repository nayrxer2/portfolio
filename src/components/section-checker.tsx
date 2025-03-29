import React, { useEffect, useRef, useState } from 'react'

export default function TestSection() {
  const [ isInView, setIsInView ] = useState(false)

  const targetDivRef = useRef(null)

  useEffect(() => {
    //intersection observer 
    const observer = new IntersectionObserver(
      ([entry]) => {
        // when the target div is in the viewport 
        if (entry.isIntersecting) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
        //trigger if half of the target div view is 50%
      }, {threshold: 0.5})

      //start obserserving target div
      if (targetDivRef.current) {
        observer.observe(targetDivRef.current)
      }

      // Clean up the observer when the component unmounts
      return () => {
        if (targetDivRef.current) {
          observer.observe(targetDivRef.current)
        }
      }
  },[])

  return (
    <div className='h-screen grid items-center '>

    {/* The target div we want to monitor */}
    <div
      ref={targetDivRef}
      style={{
        height: '200px',
        backgroundColor: isInView ? 'lightgreen' : 'lightcoral',
        transition: 'background-color 0.3s',
        textAlign: 'center',
        lineHeight: '200px',
      }}
    >
      {isInView ? 'I am visible on the screen!' : 'Scroll to me to see the change!'}
    </div>
  </div>
  )
}
