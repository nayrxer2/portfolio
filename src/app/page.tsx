'use client';

import AboutMeSection from "@/components/about-me";
import ContactMeSection from "@/components/contact-me";
import SocialNavLinks from "@/components/social-nav-links";
import WelcomePage from "@/components/welcome-page";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [ message, setMessage ] = useState('')

  const handleMessage = (message:any) => {
    setMessage(message)

    console.log(message)
  }
  
  return (
    <div className="relative">
      <WelcomePage sendToParent={handleMessage}/>
      <p className="w-32 h-32 bg-yellow-500 text-black">{message}</p>
      <AboutMeSection/>
      <ContactMeSection/>
      <div className="fixed h-screen left-12 top-0 bottom-0 bg-red-500">
        <SocialNavLinks/>
      </div>
    </div>
  );
}
