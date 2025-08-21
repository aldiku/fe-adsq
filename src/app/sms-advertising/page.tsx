"use client"

import Head from "next/head";
import "@/app/sms-advertising/SmsAdvertising.module.css";
import Aos from "aos";
import { useEffect } from "react";
import SmsAdvertisingPage from "@/views/sms-advertising-page";

export default function SmsAdvertising() {
  // animate on scroll
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>SMS Advertising | Adsqoo</title>
      </Head>

      <SmsAdvertisingPage />
    </>
  );
}

