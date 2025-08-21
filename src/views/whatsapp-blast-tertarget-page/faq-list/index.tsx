import FrequentlyAskedQuestions from "@/views/faq";

interface Items {
  id: number;
  title: string;
  content: string;
}

export const WhatsappBusinessFaqList: Items[] = [
  {
    id: 1,
    title: "Apa perbedaan layanan Whatsapp Business API dan Whatsapp Blast Tertarget?",
    content: `<p><span>Dalam mengirim pesan, Whatsapp Business API menggunakan sender ID yang dibuat oleh client. Sedangkan Whatsapp Blast Tertarget menggunakan sender ID yang disediakan oleh Adsqoo
</span></p>`
  },
  {
    id: 2,
    title: "Bagaimana cara pemesanan Whatsapp Blast Tertarget?",
    content: `Pemesanan Whatsapp Blast Tertarget bisa kamu lakukan secara mandiri melalui dashboard Adsqoo. Pastikan kamu sudah mendaftar terlebih dahulu kemudian login untuk mengakses halaman Adsqoo. Kamu juga bisa menonton video dibawah untuk petunjuk cara memesan Whatsapp Blast Tertarget .`,
  },
  {
    id: 3,
    title: "Syarat apa saja yang diperbolehkan dalam konten pesan Whatsapp Blast Tertarget?",
    content: `Pastikan konten pesan Whatsapp Blast Tertarget tidak mengandung pornografi, judi dan SARA .`,
  },
  {
    id: 4,
    title: "Apakah saya bisa mengirimkan pesanWhatsapp Blast Tertarget hari ini?",
    content: `Tidak bisa. Materi iklan bisa dikirim paling cepat H-5`,
  },
  {
    id: 5,
    title: `Apakah saya bisa menggunakan sender ID yang saya miliki untuk mengirim pesan?`,
    content: `<p>Bisa. Namun perlu integrasi dengan system kami sebelum dilakukan blast</p>`,
  },
  //   {
  //     id: 6,
  //     title: `Berapa jumlah template message yang dapat di create?`,
  //     content: `<p><span>Satu waba bisa create 250 template (jika displayname dan greentick belum approve)</span></p>
  // <p><span>Note :</span>
  // <br /><span>Namun jika akun bisnis utama telah di verifikasi dan salah satu akun whatsapp business memiliki nomor telepon yang sudah di approve display name nya maka masing &ndash; masing akun whatsapp business dapat memiliki hingga 6,000 template</span></p>`,
  //   },
  //   {
  //     id: 7,
  //     title: `Berapa jumlah karakter untuk template message?`,
  //     content: `Maksimal 1,024 karakter`,
  //   },
  //   {
  //     id: 8,
  //     title: `Jika pesan WhatsApp tidak terkirim, apakah pesan bisa dialihkan?`,
  //     content: `Untuk nomor MSISDN yang tidak support WhatsApp, pengiriman pesan bisa di alihkan ke channel yang lain (fail over)`,
  //   },
  //   {
  //     id: 9,
  //     title: `Berapa lama proses aktivasi layanan whatsapp?`,
  //     content: `<ol>
  //     <li style="list-style-type:decimal;">
  //         <p><span>Jika sudah memiliki FB-BM (Facebook Business Manager) atau BM-ID yang verified, proses registrasi waba, onboarding nomor, approval display-name hingga apply greentick akan memakan waktu lebih kurang 1- 3 Hari</span></p>
  //     </li>
  //     <li style="list-style-type:decimal;">
  //         <p><span >Jika belum memiliki FB-BM (Facebook Business Manager) atau BM-ID yang verified atau sama sekali belum memiliki akun FB-BM maka proses registrasi FB-BM, verifikasi FB-BM, registrasi waba, onboarding nomor, approval display-name hingga apply greentick akan memakan waktu lebih kurang 1 &ndash; 7 hari</span><br><br><span>Note : &nbsp;</span><br><span>Waktu SLA tergantung proses Verified BM-ID dari Meta</span></p>
  //     </li>
  // </ol>`,
  //   },
  //   {
  //     id: 10,
  //     title: `Bagaimana cara memverifikasi akun Facebook Business ?`,
  //     content: `<p><span><span><span>Untuk mengakses produk tertentu, Meta mungkin meminta Anda untuk memverifikasi bisnis Anda di Facebook. Berikut Langkah &ndash; Langkah untuk verifikasi akun bisnis :</span></span></span></p>

  // <ol>
  // 	<li style="list-style-type:decimal"><span><span><span>Buka Pengaturan Bisnis (business Setting) di facebook business manager dan klik Pusat Keamanan (security centres)</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Ketuk Verifikasi dan klik Mulai Verifikasi. Setelah Anda memulai proses verifikasi, Anda dapat memeriksa status di bagian ini.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Masukkan detail bisnis Anda dan ketuk Berikutnya.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Pilih bisnis yang benar dari daftar atau &ldquo;Tidak satu pun di atas&rdquo; jika nama Anda tidak muncul.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Ikuti petunjuk di layar untuk mengkonfirmasi informasi bisnis Anda. Jika Anda telah memilih &ldquo;Tidak satu pun di atas&rdquo; pada langkah sebelumnya, Facebook akan meminta Anda untuk memverifikasi perusahaan Anda dengan mengirimkan dokumentasi tambahan.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Putuskan bagaimana Anda lebih suka menerima kode konfirmasi dan masukkan kode verifikasi.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Anda akan menerima konfirmasi dari Facebook terkait permintaan Anda.</span></span></span></li>
  // </ol>

  // <p>&nbsp;</p>

  // <p><span>Beberapa hal yang perlu diingat:</span></p>

  // <ol>
  // 	<li style="list-style-type:decimal"><span><span><span>Keputusan verifikasi sepenuhnya menjadi kebijaksanaan Facebook.&nbsp;</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Akun bisnis yang belum diverifikasi dapat memulai percakapan di WhatsApp ke 250 uniqe number dalam periode 24 jam dan menerima percakapan dari pelanggan dalam jumlah tak terbatas. Bisnis hanya diwajibkan untuk menyelesaikan Verifikasi Bisnis saat mereka siap untuk menskalakan percakapan yang dimulai oleh bisnis, menambahkan nomor telepon tambahan, atau meminta untuk menjadi Akun Bisnis Resmi (OBA).</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Memverifikasi bisnis Anda di Facebook tidak sama dengan mendapatkan Akun Bisnis Resmi (green tick)</span></span></span></li>
  // </ol>
  // `,
  //   },
  //   {
  //     id: 11,
  //     title: `Bisakah saya mendaftar untuk mendapatkan Green Tick?`,
  //     content: `
  //   <p><span><span><span>Anda dapat mengajukan Official Business Account, jika Anda telah disetujui untuk WhatsApp Business Account. Umumnya, hanya mereka atau entitas terkenal yang mendapat persetujuan centang hijau (green tick).</span></span></span></p>

  // <ol>
  // 	<li style="list-style-type:decimal"><span><span><span>WhatsApp telah memverifikasi bahwa akun ini adalah merek asli dan terkemuka.</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Kriteria kami untuk Akun Bisnis Resmi (OBA) WhatsApp didasarkan pada sejumlah faktor dan berbeda dengan kebijakan di platform lain.&nbsp;</span></span></span></li>
  // </ol>

  // <p><span><span><span>Selain mengikuti Kebijakan Perdagangan dan Bisnis WhatsApp, Whatsapp Business harus:</span></span></span></p>

  // <ol>
  // 	<li style="list-style-type:decimal"><span><span><span>Penting: Mewakili bisnis terkenal, merek atau entitas yang sering dicari</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>Verified : Telah melalui Verifikasi Bisnis, dan</span></span></span></li>
  // 	<li style="list-style-type:decimal"><span><span><span>2FA: Telah menyiapkan verifikasi dua langkah.</span></span></span></li>
  // </ol>
  //     `,
  //   },
  //   {
  //     id: 12,
  //     title: `Bagaimana saya bisa mendaftar Official Business Account (Green Tick) ?`,
  //     content: `
  // <p><span><span><span>&nbsp; &nbsp; &nbsp; &nbsp; Berikut instruksi mengajukan Official Business Account :</span></span></span></p>

  // <p><span><span><span>&nbsp; &nbsp; &nbsp; &nbsp;<img src="https://adsqoo-store.md-digilabs.com/api/assets/uploads/14/2023-12/1702480031.png" style="height:435px; width:624px" /></span></span></span></p>

  // <ul>
  // 	<li style="list-style-type:disc"><span><span><span>Akses WhatsApp Manager dari Business Manager. Klik nomor telepon yang ingin di request OBA pada menu Overview</span></span></span></li>
  // </ul>

  // <p style="margin-left:48px; text-align:justify"><span><span><span><img src="https://adsqoo-store.md-digilabs.com/api/assets/uploads/14/2023-12/1702480146.png" style="height:395px; width:624px" /></span></span></span></p>

  // <ul>
  // 	<li style="list-style-type:disc"><span><span><span>Aktifkan verifikasi 2 langkah pada nomor telepon tersebut untuk pengajuan OBA. Harap di perhatikan! Verifikasi Business dan Display Name telah di approve pada saat pengajuan OBA.</span></span></span></li>
  // </ul>

  // <p style="margin-left:48px; text-align:justify"><span><span><span><img src="https://adsqoo-store.md-digilabs.com/api/assets/uploads/14/2023-12/1702480182.png" style="height:401px; width:624px" /></span></span></span></p>

  // <ul>
  // 	<li style="list-style-type:disc"><span><span><span>Klik tombol submit request dan mengisi informasi yang diperlukan. Anda dapat mengirimkan hingga 5 link pendukung untuk menunjukan bahwa bisnis tersebut terkenal.</span></span></span></li>
  // </ul>

  // <p style="margin-left:48px; text-align:justify"><span><span><span><img src="https://adsqoo-store.md-digilabs.com/api/assets/uploads/14/2023-12/1702480207.png" style="height:760px; width:342px" /></span></span></span></p>

  // <p style="margin-left:24px; text-align:justify"><span><span><span>Setelah permintaan Anda di review Meta, Anda akan menerima pemberitahuan jika akun Anda telah diberikan OBA atau tidak.&nbsp;</span></span></span></p>

  // <p>&nbsp;</p>
  //     `,
  //   },
  //   {
  //     id: 13,
  //     title: `Bagaimana jika Official Business Account (Green Tick) tidak disetujui ?`,
  //     content: `
  //     <p><span><span><span>Jika permintaan Anda ditolak, Anda dapat mengirimkan permintaan baru setelah 30 hari.</span></span></span><br />
  // <span><span><span>Akun bisnis resmi hanya tersedia untuk pengguna platform bisnis WhatsApp saat ini, karena akun di aplikasi bisnis tidak melalui verifikasi bisnis.</span></span></span></p>
  //     `,
  //   },
  //   {
  //     id: 14,
  //     title: `Best practices untuk mendapatkan approval green tick?`,
  //     content: `
  // <p><span><span><span>Sebagai aturan umum, ingatlah bahwa akun bisnis resmi tidak diberikan kepada karyawan, departemen, atau rekening tes. Akun bisnis resmi hanya diberikan kepada perusahaan secara keseluruhan untuk kasus penggunaan nyata.</span></span></span></p>

  // <p><span><span><span>Untuk mendapatkan centang hijau, beberapa hal yang bisa dilakukan untuk meningkatkan peluang akun bisnis resmi WhatsApp di approve :</span></span></span></p>

  // <ol>
  // 	<li style="list-style-type:decimal"><span><span><span>Pengaturan Akun</span></span></span><br />
  // 	<span><span><span>Sebelum apply akun bisnis resmi, harus dipastikan akun bisnis telah diverifikasi di Facebook, dan sudah memiliki 2 faktor otentikasi yang diatur.</span></span></span><br />
  // 	&nbsp;</li>
  // 	<li style="list-style-type:decimal"><span><span><span>Alamat Email</span></span></span><br />
  // 	<span><span><span>Pastikan untuk menambahkan domain email resmi (corporate email) ke akun bisnis Facebook Anda. Email webmail seperti @gmail.com atau @yahoo.com paling sering ditolak karena tidak dapat berafiliasi dengan bisnis yang sudah established.</span></span></span><br />
  // 	&nbsp;</li>
  // 	<li style="list-style-type:decimal"><span><span><span>Display Name</span></span></span><br />
  // 	<span><span><span>Display name dapat membuat perbedaan dalam proses persetujuan. Saat mendaftar,&nbsp; harus dipastikan display name sudah mematuhi pedoman untuk display name. Jika ada ketidakkonsistenan display name dengan branding eksternal atau ada hubungan yang tidak jelas dengan bisnis, permintaan kemungkinan akan ditolak.</span></span></span><br />
  // 	&nbsp;</li>
  // 	<li style="list-style-type:decimal"><span><span><span>Online presence (Kehadiran Online)</span></span></span><br />
  // 	<span><span><span>Dari pengalaman, akun harus mewakili merek atau entitas yang terkenal dan sering dicari. Akun yang ditampilkan dalam beberapa sumber berita memiliki peluang lebih tinggi untuk mendapatkan persetujuan tetapi perhatikan bahwa konten berbayar atau promosi tidak dianggap sebagai sumber untuk ditinjau.</span></span></span><br />
  // 	<span><span><span>Saat apply green tick, tambahkan links ke artikel untuk mendapatkan peluang lebih tinggi&nbsp; mendapat akun bisnis resmi (official business account)</span></span></span></li>
  // </ol>
  //     `,
  //   },
];

const FaqList = () => {
  return <FrequentlyAskedQuestions items={WhatsappBusinessFaqList} name="Whatsapp Blast Targeted" />;
};

export default FaqList;


