import CaraPemesananList from "@/views/cara-pemesanan";

const CaraPemesananWaBlast = () => {

  const caraPemesanan = [
    {
      title: "Pilih Layanan",
      desc: "Pilih jenis layanan Whatsapp yang diinginkan di bawah ini",
      image: "/assets/images/landing-page/sms-ads/cara-pemesanan/jenis.svg",
    },
    {
      title: "Login atau Register",
      desc: "Login atau register kalau belum mempunyai Akun di Adsqoo",
      image: "/assets/images/landing-page/sms-ads/cara-pemesanan/login.svg",
    },
    {
      title: "Isi Form",
      desc: "Isi form sesuai ketentuan sesuai dengan tipe Whatsapp Ads yang di inginkan",
      image: "/assets/images/landing-page/sms-ads/cara-pemesanan/form.svg",
    },
    {
      title: "Pembayaran",
      desc: "Pilih metode pembayaran yang diinginkan dan klik tombol “Checkout”",
      image: "/assets/images/landing-page/sms-ads/cara-pemesanan/payment.svg",
    },
    {
      title: "Verifikasi Konten",
      desc: "Tunggu 3-7 Hari kerja untuk proses verifikasi konten campaign dan campaign anda akan langsung jalan",
      image: "/assets/images/landing-page/sms-ads/cara-pemesanan/verifikasi.svg",
    },
  ];

  return (
    <>
      <CaraPemesananList nama={"Whatsapp Blast Targeted"} items={caraPemesanan} />
    </>
  );
};

export default CaraPemesananWaBlast;

