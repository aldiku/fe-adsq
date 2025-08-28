import { CardContent, Container } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";

const AlasanWhatsapp = () => {
  return (
    <>
      <Box 
        sx={{ mt: "2.5rem" }}
        paddingX={{
          xs: "1rem",
          sm: "2rem",
          md: "4rem",
          xl: "8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            // padding: 0,
          }}
        >
          <Box>
            <Typography
              data-aos="fade-up"
              variant="h1"
              sx={{
                // color: "#808184",
                textAlign: "center",
                // fontWeight: 600,
                // fontSize: { xs: "28px", md: "32px", lg: "40px" },
                // letterSpacing: "-.3px",
              }}
            >
              Mengapa Harus Menggunakan <br />
              Whatsapp Business Platform
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: "1rem",
              justifyContent: "flex-start",
              // Custom grid for sm breakpoint
              "@media (min-width:600px) and (max-width:899.95px)": {
                gridTemplateColumns: "1fr 1fr",
              },
            }}
          >
            <Card
              data-aos="fade-up"
              sx={{
                background: "white",
                boxShadow: theme => theme.shadows[1],
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ padding: "1.5rem !important" }}>
                <Typography variant="h5" lineHeight={1.1}>
                  {listAlasan[0].title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {listAlasan[0].desc}
                </Typography>
              </CardContent>
            </Card>
            <Card
              data-aos="fade-up"
              sx={{
                background: "white",
                boxShadow: theme => theme.shadows[1],
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ padding: "1.5rem !important" }}>
                <Typography variant="h5" lineHeight={1.1}>
                  {listAlasan[1].title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {listAlasan[1].desc}
                </Typography>
              </CardContent>
            </Card>
            <Card
              data-aos="fade-up"
              sx={{
                background: "white",
                boxShadow: theme => theme.shadows[1],
                borderRadius: 3,
                // Fill two columns on sm screens
                "@media (min-width:600px) and (max-width:899.95px)": {
                  gridColumn: "1 / span 2",
                },
              }}
            >
              <CardContent sx={{ padding: "1.5rem !important" }}>
                <Typography variant="h5" lineHeight={1.1}>
                  {listAlasan[2].title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {listAlasan[2].desc}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
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
