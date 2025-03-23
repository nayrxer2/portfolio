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
      <div className="sticky top-0 bg-red-100 w-screen h-4">aaaa</div>
      <WelcomePage sendToParent={handleMessage}/>
      <p className="w-32 h-32 bg-yellow-500 text-black">{message}</p>
      <AboutMeSection/>
      <ContactMeSection/>
      <div className="fixed h-screen left-12 top-0 translate-y-[40%] bottom-0 bg-red-500">
        <SocialNavLinks/>
      </div>
      <SectionCount sectionNum="5"/>
    </div>
  );
}
