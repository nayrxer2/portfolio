'use client';

import AboutMeSection from "@/components/about-section";
import ContactMeSection from "@/components/contact-section";
import SectionCount from "@/components/section-count";
import SocialNavLinks from "@/components/social-nav-links";
import WelcomePage from "@/components/welcome-page";
import { transform } from "next/dist/build/swc";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [ message, setMessage ] = useState('')

  const handleMessage = (message:any) => {
    setMessage(message)

    console.log(message)
  }
  
  return (
    <div className="relative overflow-visible">
      <WelcomePage sendToParent={handleMessage}/>
      {/* <p className="w-32 h-32 bg-yellow-500 text-black">{message}</p> */}
      <AboutMeSection/>
      <ContactMeSection/>
      {/* sidenav */}
      <SocialNavLinks/>
    </div>
  );
}
