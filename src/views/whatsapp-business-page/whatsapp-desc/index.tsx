import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import React from "react";

const WhatsappDesc = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(187,189,191, .17)", pt: 5 }}>
        <Container>
          <Typography
            data-aos="fade-up"
            sx={{
              fontWeight: 700,
              color: "#6D6E70",
              fontSize: { xs: "24px", md: "36px", lg: "44px" },
              textAlign: "center",
              letterSpacing: "-.5px",
              mt:10
            }}
          >
            Whatsapp Business Platform
          </Typography>
          <Grid
            data-aos="fade-up"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              // paddingX: 5,
              "@media(900px <= width< 1100px)": {
                gridTemplateColumns: "1fr",
                paddingX: 10,
              },
              "@media(600px <= width < 900px)": {
                paddingX: 10,
              },
              "@media(460px <= width < 600px)": {
                paddingX: 5,
              },
              "@media(width < 460px)": {
                paddingX: 0,
              },
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                paddingX: 4,
                paddingY: 3,
                marginY: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                height: "fit-content",
                "@media(width< 1100px)": {
                  paddingX: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "22px" },
                  fontWeight: 300,
                  color: "#6D6E70",
                  letterSpacing: "-.3px",
                  "@media(width< 1100px)": {
                    textAlign: "justify",
                  },
                }}
              >
                Untuk memenuhi kebutuhan komunikasi messaging seperti Whatsapp Blast. WhatsApp membagi aplikasinya
                berdasarkan fungsinya yaitu WhatsApp Personal, WhatsApp Business dan WhatsApp Business API. Pebisnis
                yang membutuhkan komunikasi dalam jumlah besar dan <strong>fitur fitur khusus lainnya seperti:</strong>
              </Typography>
              <ul
                style={{
                  marginLeft:"50px",
                  listStyleImage: "url('/assets/images/landing-page/whatsapp-business/whatsapp-desc/check.png')",
                }}
              >
                {fiturKhusus.map((fitur, index) => (
                  <li key={index}>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "22px" },
                        fontWeight: 300,
                        color: "#6D6E70",
                        letterSpacing: "-.3px",
                      }}
                    >
                      {fitur}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "grid",
                float: "right",
                alignSelf: "end",
                justifyContent: { xs: "center", md: "start" },
                "@media(width < 1100px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                component="img"
                src="/assets/images/landing-page/whatsapp-business/whatsapp-desc/bg-image-whatsapp-desc.png"
                alt="sms-desc"
                sx={{
                  height: "700px",
                  marginLeft: "-100px",
                  zIndex: "1",
                  position: "relative",
                  "@media(1100px <= width < 1300px)": {
                    maxHeight: "600px",
                    marginLeft: "0",
                  },
                  "@media(900px <= width < 1100px)": {
                    maxHeight: "500px",
                    marginLeft: "0",
                  },
                  "@media(width < 900px)": {
                    height: "auto",
                    width: "100%",
                    maxHeight: "450px",
                    marginLeft: "0",
                  },
                }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhatsappDesc;

const fiturKhusus = [
  "Akun dengan centang hijau (verified account)",
  "Chatbot yang dapat membalas dengan pesan otomatis",
  "Dapat menggunakan fitur katalog untuk produk",
  "Menggunakan multi user dan menyesuaikan jam kerja",
  "Fitur alokasi agent",
  "Fitur reporting",
  "Menggunakan pesan broadcast dengan jumlah tak terhingga",
];
