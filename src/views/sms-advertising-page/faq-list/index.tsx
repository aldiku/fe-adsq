import FrequentlyAskedQuestions from "@/views/faq";
import React from "react";

const FaqList = () => {
  return <FrequentlyAskedQuestions items={SmsAdvertisingFaqList} name="SMS Advertising" />;
};

export default FaqList;

interface Items {
  id: number;
  title: string;
  content: string;
}

export const SmsAdvertisingFaqList: Items[] = [
  {
    id: 1,
    title: "Bagaimana cara memesan SMS LBA?",
    content:
      "Pemesanan SMS LBA bisa kamu lakukan secara mandiri melalui dashboard Adsqoo. Pastikan kamu sudah mendaftar terlebih dahulu kemudian login untuk mengakses halaman Adsqoo. Kamu juga bisa menonton video dibawah untuk petunjuk cara memesan SMS LBA.",
  },
  {
    id: 2,
    title: "Berapa biaya per SMS untuk layanan SMS LBA ini?",
    content:
      "Untuk SMS LBA kamu dikenakan biaya sebesar Rp 715 /SMS (termasuk PPN) untuk semua operator dengan minimal pemesanan setiap pengiriman 2,000 SMS. Sebagai contoh: jika kamu memesan SMS LBA untuk 1 operator (Telkomsel, XL, Indosat) di 1 titik, maka biaya yang dikeluarkan sebesar Rp 1,430,000.",
  },
  {
    id: 3,
    title: "Syarat apa saja dalam konten sms yang di perbolehkan jika kita memilih salah satu operator telco?",
    content:
      "Pertama konten kamu tidak tidak mengandung SARA, judi dan pornografi, kedua jika kamu memilih salah satu operator telco pastikan konten kamu tidak mengandung nomor induk selain nomor yang dimiliki operator yang kamu pilih. Contoh : kamu memilih operator Telkomsel untuk SMS, maka pastikan konten sms kamu tidak berisi nomor kontak selain nomor Telkomsel, begitupun sebaliknya untuk operator yang lainnya.",
  },
  {
    id: 5,
    title: "Bagaimana saya mengetahui jumlah SMS yang berhasil dikirim?",
    content:
      "Untuk setiap pemesanan SMS LBA yang telah di jalankan, kamu bisa melihat laporan pengiriman di halaman dashboard Adsqoo. Di halaman dashboard tersebut kamu bisa melihat berapa jumlah yang terkirim dan berapa jumlah yang gagal dikirim.",
  },
  {
    id: 6,
    title: "Apakah SMS yang gagal dikirim juga dikenakan biaya?",
    content:
      "Tidak. Adsqoo hanya akan mengenakan biaya untuk jumlah SMS yang berhasil dikirimkan. Sedangkan SMS yang gagal dikirim, token iklannya akan dikembalikan ke token Adsqoo kamu. ",
  },
  {
    id: 7,
    title: "Apakah saya bisa mengirimkan SMS LBA untuk hari ini?",
    content:
      "Tidak. Ketentuan yang diterapkan oleh operator seluler adalah 3 HK (3 Hari Kerja) sebelum pengiriman. Akan tetapi jika kamu memiliki kebutuhan yang sangat mendesak, bisa menghubungi kami untuk skenario terbaik. ",
  },
  {
    id: 8,
    title: "Bagaimana saya menentukan lokasi pengiriman SMS LBA?",
    content:
      "Sangat mudah, anda bisa memasukkan alamat atau lokasi yang dituju maka dengan sendirinya SMS LBA kamu akan dikirimkan di lokasi tersebut.",
  },
  {
    id: 9,
    title: "Bagaimana ketentuan ID Pengiriman (Sender ID)?",
    content:
      "Kamu bisa memasukkan ID Pengirim sesuai keinginanmu dengan panjang maksimal 11 karakter. Nantinya Adsqoo akan melakukan moderasi untuk memeriksa kesesuaian ID Pengirim dan isi SMS yang akan kamu pesan. Jika tidak sesuai maka pengajuan SMS LBA kamu akan di tolak, dan biaya token akan dikembalikan ke token Adsqoo ",
  },
  {
    id: 10,
    title: "Bagaimana kriteria proses moderasi SMS LBA?",
    content:
      "Pertama konten kamu tidak mengandung SARA, judi, pornografi, MIras, dan senjata api kedua jika kamu memilih salah satu operator telco pastikan konten kamu tidak mengandung nomor selain nomor yang dimiliki operator yang kamu pilih. Contoh : kamu memilih operator Telkomsel untuk SMS, maka pastikan konten sms kamu tidak berisi nomor kontak selain nomor Telkomsel, begitupun sebaliknya untuk operator yang lainnya.",
  },
  {
    id: 11,
    title: "Bagaimana memastikan SMS saya di kirimkan ke orang sekitar lokasi yang saya inginkan?",
    content:
      "Pengiriman SMS LBA dilakukan oleh operator seluler. Operator mengetahui lokasi penggunanya melalui menara pemancar sinya (BTS). Dengan bantuan menara BTS ini pihak operator bisa menjamin bahwa penerima pesan SMS adalah orang yang berada disekitar lokasi yang sudah kamu pilih.",
  },
  {
    id: 12,
    title: "Bagaimana cara pembayaran untuk Pembelian iklan SMS LBA di Adsqoo?",
    content:
      "Ada banyak cara melakukan pembayaran di antaranya melalui gerai Indomart atau alfamart terdekat, Kantor PoS, Kantor Pegadaian, atau kamu bisa transfer melalui ATM atau internet banking/mobile banking ke Bank Mandiri, BCA, Danamon, BNI dan Permata.",
  },
  {
    id: 13,
    title: "Jika sudah TopUp untuk biaya beriklan tetapi tidak jadi beriklan, apa bisa di Tarik lagi?",
    content:
      "Jika kamu sudah transfer bayar untuk topUp ke akun kamu, maka kamu tidak bisa menarik kembali nilai nominal yang sudah kamu bayarkan. Nilai token kamu tetap ada dalam saldo akun kamu yang dapat digunakan beriklan pada kemudian hari. ",
  },
  {
    id: 14,
    title: "Bilamana ada kendala dalam membuat iklan kemana saya harus melapor?",
    content: "Kamu bisa melapor melaui chat customer relation di 08 123 123 8063. ",
  },
];
