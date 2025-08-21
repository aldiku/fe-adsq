import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";

const AlasanWhatsapp = () => {
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
              Mengapa Harus Menggunakan <br />
              Whatsapp Business Platform
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

export default AlasanWhatsapp;

const listAlasan = [
  {
    title: "Meningkatkan Kepercayaan dan Penjualan Bisnis Dengan Whatsapp Business Platform",
    desc: "Untuk mendapatkan fitur-fitur dari Whatsapp Business Platform, Anda harus mendaftarkan bisnis Anda ke pihak WhatsApp. Sayangnya Anda tidak bisa melakukan pendaftaran ini secara langsung ke WhatsApp. Anda membutuhkan pihak ketiga yaitu penyedia resmi whatsapp api atau Business Solution Provider (BSP).",
  },
  {
    title: "Business Solution Provider yang Terpercaya dan Berkualitas",
    desc: "Adsqoo adalah salah satu BSP terpercaya di Indonesia yang menyediakan layanan WhatsApp Blast dengan harga murah dan berkualitas. Sebagai partner resmi WhatsApp Official di Indonesia, Adsqoo akan membantu bisnis Anda untuk kebutuhan WA blast/broadcast, WA chatbot dan WA OTP dengan harga murah.",
  },
  {
    title: "Siap Melejitkan Bisnis Anda, Dapatkan centang hijau di akun WA Bisnis Anda !",
    desc: "Segera daftar API WhatsApp Bisnis ke Adsqoo sebagai salah satu Official WhatsApp Partner terpercaya di Indonesia.",
  },
];
