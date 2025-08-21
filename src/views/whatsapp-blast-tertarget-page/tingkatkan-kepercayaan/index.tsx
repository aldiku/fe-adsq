import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Typography } from "@mui/material";

const KepercayaanWaBlast = () => {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Container>
          <Box>
            <Typography
              data-aos="fade-up"
              sx={{
                color: "#808184",
                textAlign: "center",
                fontWeight: 600,
                fontSize: { xs: "28px", md: "32px", lg: "40px" },
                letterSpacing: "-.3px",
              }}
            >
              Tingkatkan Kepercayaan dan Penjualan <br />
              Produk Dengan Whatsapp Blast Tertarget
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 7,
              mx: 15,
              "@media(900px <= width< 1100px)": {
                gridTemplateColumns: "1fr",
                marginX: 10,
              },
              "@media(600px <= width < 900px)": {
                marginX: 10,
              },
              "@media(460px <= width < 600px)": {
                marginX: 5,
              },
              "@media(width < 460px)": {
                marginX: 0,
              },
            }}
          >
            {listAlasan.map((item, index) => (
              <Card
                data-aos="fade-up"
                key={index}
                sx={{
                  background: "white",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  mt: index === 0 ? 0 : 5,
                  paddingX: { xs: 3, md: 8 },
                  paddingY: 5,
                  borderRadius: 3,
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "20px", md: "24px" }, fontWeight: 700, color: "#6D6E70" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#6D6E70",
                      fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default KepercayaanWaBlast;

const listAlasan = [
  {
    title: "Jasa Wa Blast Dengan Audience Terproﬁle Ini Resmi dari Meta ",
    desc: "Pengiriman pesan aman dari pemblokiran. Nama pengirim (Sender masking) telah disediakan dan ditentukan. Nomer target juga kami yang sediakan. Anda cukup mengisi target audience seperti apa yang akan menerima pesan promosi produksi Anda. Menarik bukan?",
  },
  {
    title: "Kami Sediakan Target Audience dari Pengguna Telekomunikasi yang Sangat Segemented",
    desc: "Anda pilih sesuai dengan bisnis Anda. Berbagai pilihan audience terprofile tersebut antara lain: Lokasi, kategori, umur, tipe langganan, tipe device yang digunakan, lifestyle dan status banking/financer",
  },
];
