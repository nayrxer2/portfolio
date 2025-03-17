'use client';

import WelcomePage from "@/components/welcome-page";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('')

  const handleMessage = (newMessage:string) => {
    setMessage(newMessage)
  }
  
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-animation">
      <WelcomePage/>
      <p>{message}</p>
    </div>
  );
}
