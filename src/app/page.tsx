'use client'

import HomePage from "@/views/homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
        AOS.init();
    }, [])
  
  return (
    <>
      <HomePage />
    </>

  );
}
