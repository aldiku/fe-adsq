"use client"

import Head from "next/head";
import Aos from "aos";
import { useEffect } from "react";
import WhatsappBusinessPage from "@/views/whatsapp-business-page";

export default function WhatsappBusiness() {
  // animate on scroll
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>Jasa WA Bisnis Centang Hijau | Verifikasi | Mitra Resmi Terpercaya | Whatsapp Business API</title>
      </Head>

      <WhatsappBusinessPage />
    </>
  );
}

