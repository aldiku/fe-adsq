"use client"

import Head from "next/head";
import Aos from "aos";
import { useEffect } from "react";
import WhatsappTargetedPage from "@/views/whatsapp-blast-tertarget-page";

export default function WhatsappTargeted() {
  // animate on scroll
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>Jasa WA Bisnis Centang Hijau | Verifikasi | Mitra Resmi Terpercaya | Whatsapp Targeted</title>
      </Head>

      <WhatsappTargetedPage />
    </>
  );
}

