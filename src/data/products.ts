export type ProductType = "sms" | "whatsapp-business" | "whatsapp-blast" | "online" | "outdoor"; // add more as needed

export interface ProductData {
    name: string;
    image: string;
    description: string;
    path: string;
    code?: string;
    details: string;
    type: ProductType;
}

export const products: ProductData[] = [
    {
        name: "SMS LBA",
        image: "assets/images/landing-page/sms-ads/layanan-sms/lba.png",
        description:
            "SMS LBA (Location Based Advertising) adalah layanan pengiriman blast SMS di lokasi tertentu sesuai dengan kebutuhan pelanggan. Lokasi yang dapat dipilih misalnya mall, apartemen, perkantoran, sekolah/kampus dan jalan raya.",
        path: "/dashboards/campaign/sms-lba/",
        code: "SLB",
        details: `
      <ol>
        <li>Order diterima setidaknya 3 hari kerja sebelum waktu pengiriman SMS</li>
        <li>Pengiklan akan memperoleh laporan dari operator maksimal 5 HK setelah iklan berakhir</li>
        <li>Laporan hanya berisi berapa jumlah SMS yang berhasil dikirimkan</li>
        <li>Lokasi Pengiriman Seluruh Indonesia sesuai google map</li>
        <li>Minimal order setiap lokasi adalah 2.000 SMS</li>
        <li>Sender ID maksimal 11 Karakter & Isi pesan maksimal 160 Karakter</li>
        <li>Target dapat di profile seperti: Jenis Kelamin, Umur, Arpu & Agama</li>
        <li>Pengiklan tidak diperkenankan mengirim pesan SMS yang mencantumkan No HP selain No HP Telkomsel</li>
      </ol>
    `,
        type: "sms",
    },
    {
        name: "SMS Broadcast",
        image: "assets/images/landing-page/sms-ads/layanan-sms/broadcast.png",
        description:
            "SMS broadcast atau SMS blast memungkinkan Anda untuk mengirimkan SMS secara masif kepada pelanggan-pelanggan bisnis Anda secara instan. <strong>Tersedia SMS API bagi Anda yang ingin mengirimkan SMS promosi hingga SMS notif kepada client Anda.</strong>",
        path: "/dashboards/campaign/sms-broadcast/",
        code: "SBC",
        details: `
      <ol>
        <li>Scan KTP Penanggung Jawab</li>
        <li>NPWP</li>
        <li>Form Sender ID</li>
        <li>Dokumen Penunjukkan Provider</li>
        <li>Dokumen Surat Penunjukan Telkomsel</li>
        <li>Dokumen Surat Penunjukan Indosat</li>
        <li>Dokumen Surat Penunjukan XL</li>
        <li>Form Member</li>
        <li>Surat Pernyataan Kepemilikan Merk</li>
      </ol>
    `,
        type: "sms",
    },
    {
        name: "SMS OTP",
        image: "assets/images/landing-page/sms-ads/layanan-sms/otp.png",
        description:
            "SMS OTP adalah layanan pengiriman OTP (One Time Password) yang berisi pesan singkat berupa digit nomer yang dibuat otomatis satu kali menggunakan media SMS.",
        path: "/dashboards/campaign/sms-broadcast/",
        details: `
      <ol>
        <li>Scan KTP Penanggung Jawab</li>
        <li>NPWP</li>
        <li>Form Sender ID</li>
        <li>Dokumen Penunjukkan Provider</li>
        <li>Dokumen Surat Penunjukan Telkomsel</li>
        <li>Dokumen Surat Penunjukan Indosat</li>
        <li>Dokumen Surat Penunjukan XL</li>
        <li>Form Member</li>
        <li>Surat Pernyataan Kepemilikan Merk</li>
      </ol>
    `,
        type: "sms",
    },
    {
        name: "SMS Targeted",
        image: "assets/images/landing-page/sms-ads/layanan-sms/targeted.png",
        description:
            "SMS Tertarget adalah layanan pengiriman SMS yang ditujukan kepada pelanggan telepon seluler yang aktif dan dengan target tertentu sesuai kriteria Anda antara lain jenis kelamin, lokasi, jenis HP dan ARPU (pemakaian bulanan pulsa pelanggan).",
        path: "/dashboards/campaign/sms-targeted/",
        details: `
      <ol>
        <li>Order diterima setidaknya 3 hari kerja sebelum waktu pengiriman SMS</li>
        <li>Pengiklan akan memperoleh laporan dari operator maksimal 5 HK setelah iklan berakhir</li>
        <li>Laporan hanya berisi berapa jumlah SMS yang berhasil dikirimkan</li>
        <li>Lokasi Pengiriman Seluruh Indonesia sesuai google map</li>
        <li>Minimal order setiap lokasi adalah 2.000 SMS</li>
        <li>Sender ID maksimal 11 Karakter & Isi pesan maksimal 160 Karakter</li>
        <li>Target dapat di profile seperti: Jenis Kelamin, Umur, Arpu & Agama</li>
      </ol>
    `,
        type: "sms",
    },
    {
        name: "Whatsapp Service + Chatbot",
        image:
            "assets/images/landing-page/whatsapp-business/paket-whatsapp/service.png",
        path: "/campaign/whatsapp-business",
        code: "WAB",
        description:
            "WhatsApp Service (Interaktif CS) digunakan untuk mengirimkan pesan dan merespon pesan yang masuk dari pelanggan Anda secara real time yang dilengkapi dengan fitur Chatbot. WhatsApp interaktif sebagai media komunikasi antara CS dan pelanggan Anda menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi",
        details: `<ul>
              <li>Free setup</li>
              <li>Include monthly fee untuk 3 bulan pertama (Rp 1.000.000/bulan)</li>
              <li>Include Chatbot max 5 FAQ ( FAQ &gt; 5, monthly fee Rp 1.500.000/bulan)</li>
              <li>Include 2 CS/agent (penambahan agent Rp250.000/agent)</li>
              <li>Pembuatan ID pengirim</li>
              <li>Dashboard untuk operasional</li>
              <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanya berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>
      `,
        type: "whatsapp-business",
    },

    {
        name: "Whatsapp Authentication",
        image:
            "assets/images/landing-page/whatsapp-business/paket-whatsapp/auth.png",
        path: "/campaign/whatsapp-business",
        code: "WAB",
        description: `
                  WhatsApp Authentication digunakan untuk mengirimkan pesan OTP (One Time Password) kepada pelanggan Anda untuk berbagai keperluan seperti mendaftar layanan atau aplikasi menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi
                  `,
        details: `
              <ul>
              <li>Free setup</li>
              <li>Free monthly fee</li>
              <li>Pembuatan ID pengirim</li>
              <li>Dashboard untuk operasional</li>
              <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
              <li>Hanya berlaku untuk perusahaan</li>
              <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
              <li>Harus memiliki NPWP, Website dan Email</li>
              <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
              <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
            </ul>
    `,
        type: "whatsapp-business",
    },
    {
        name: "Whatsapp Utility",
        image:
            "assets/images/landing-page/whatsapp-business/paket-whatsapp/utility.png",
        path: "/campaign/whatsapp-business",
        code: "WAB",
        description: `WhatsApp Utility (Push Notifikasi) digunakan untuk mengirimkan pesan notifikasi kepada pelanggan Anda yang telah melakukan transaksi, reminder invoice dan notifikasi lainya secara real time kepada pelanggan Anda secara massal menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi`,
        details: `<ul>
                <li>Free setup</li>
                <li>Free monthly fee</li>
                <li>Pembuatan ID pengirim</li>
                <li>Dashboard untuk operasional</li>
                <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanyua berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>`,
        type: "whatsapp-business",

    },
    {
        name: "Whatsapp Marketing",
        image:
            "assets/images/landing-page/whatsapp-business/paket-whatsapp/marketing.png",
        path: "/campaign/whatsapp-business",
        code: "WAB",
        description: `WhatsApp marketing (WA Blast) digunakan untuk mengirim pesan WA kepada pelanggan Anda secara massal menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi`,
        details: `<ul>
                <li>Free setup</li>
                <li>Free monthly fee</li>
                <li>Pembuatan ID pengirim</li>
                <li>Dashboard untuk operasional</li>
                <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanya berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>`,
        type: "whatsapp-business",
    },
    {
        name: "Whatsapp Blast Tertarget 2000 Pesan",
        image: "assets/images/landing-page/whatsapp-targeted/icon-paket.png",
        path: "/campaign/whatsapp-blast/create?message=2000",
        description: "WhatsApp Blast Tertarget adalah layanan kirim pesan WA ke nomer penerima yang sudah terprofil mulai dari lokasi, demografi hingga interest calon penerima. Gunakan layanan ini untuk menjangkau lebih banyak audience, meningkatkan awareness produk dan meningkatkan transaksi",
        details: `
            <ul>
                <li>Key Visual: Maximum 2MB</li>
                <li>Message: Direkomendasikan jumlahnya 200-450 karakter agar tidak perlu klik 'read more'</li>
                <li>Jika terdapat link, bisa dimasking menggunakan link IOH berikut sda-ida.ioh.id/lnk/xxxxx (jumlah karakter 26)</li>
                <li>Link/CTA Button: terbatas 25 karakter</li>
                <li>Materi iklan H - 5</li>
                <li>Report iklan H + 7</li>
            </ul>
        `,
        type: "whatsapp-blast",
    },
    {
        name: "Whatsapp Blast Tertarget 5000 Pesan",
        image: "assets/images/landing-page/whatsapp-targeted/icon-paket.png",
        path: "/campaign/whatsapp-blast/create?message=5000",
        description: "WhatsApp Blast Tertarget adalah layanan kirim pesan WA ke nomer penerima yang sudah terprofil mulai dari lokasi, demografi hingga interest calon penerima. Gunakan layanan ini untuk menjangkau lebih banyak audience, meningkatkan awareness produk dan meningkatkan transaksi",
        details: `
            <ul>
                <li>Key Visual: Maximum 2MB</li>
                <li>Message: Direkomendasikan jumlahnya 200-450 karakter agar tidak perlu klik 'read more'</li>
                <li>Jika terdapat link, bisa dimasking menggunakan link IOH berikut sda-ida.ioh.id/lnk/xxxxx (jumlah karakter 26)</li>
                <li>Link/CTA Button: terbatas 25 karakter</li>
                <li>Materi iklan H - 5</li>
                <li>Report iklan H + 7</li>
            </ul>
        `,
        type: "whatsapp-blast",
    },
];