import { Container, Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";

const SmsAdsDesc = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(187,189,191, .17)", height: "max-content", overflow: "hidden" }}>
        <Container sx={{ height: "auto" , pt:10}}>
          <Typography
            data-aos="fade-up"
            sx={{
              fontWeight: 700,
              color: "#6D6E70",
              fontSize: { xs: "28px", md: "36px", lg: "44px" },
              textAlign: "center",
              letterSpacing: "-.5px",
            }}
          >
            SMS Advertising
          </Typography>
          <Grid
            data-aos="fade-up"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 2.5fr" },
              paddingX: 10,
              "@media(800px <= width < 1200px)": { gridTemplateColumns: "1fr", pb: 5 },
              "@media(width < 800px)": { paddingX: 0, pb: 5 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "grid",
                alignItems: "end",
                justifyContent: "end",
                "@media(width < 1200px)": {
                  justifyContent: "center",
                  marginBottom: "-10px",
                },
              }}
            >
              <Box
                component="img"
                src="/assets/images/landing-page/sms-ads/sms-desc/bg-img-sms-desc.png"
                alt="sms-desc"
                sx={{
                  height: "100%",
                  zIndex: "1",
                  position: "relative",
                  left: "0px",
                  "@media(width < 1200px)": {
                    left: 0,
                    zIndex: "-1",
                    maxHeight: "350px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                background: "white",
                borderRadius: 3,
                paddingX: { xs: 3, sm: 6 },
                paddingY: 3,
                marginTop: 1,
                marginBottom: { xs: 1, lg: 15 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                  fontWeight: 300,
                  color: "#6D6E70",
                  letterSpacing: "-.3px",
                }}
              >
                Maksimalkan penjualan produk bisnis Anda dengan memanfaatkan berbagai media iklan messaging seperti SMS
                broadcast mulai dari
                <span style={{ fontWeight: 700 }}> SMS Masking, SMS OTP, SMS tertarget dan SMS LBA.</span> Adsqoo
                menyediakan jasa SMS advertising dari operator Telkomsel, Indosat, XL Axiata dan Smartfren dengan harga
                murah dan berkualitas.
              </Typography>
              <Typography
                sx={{
                  mt: { xs: 2, md: 5 },
                  fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                  fontWeight: 300,
                  color: "#6D6E70",
                  letterSpacing: "-.3px",
                }}
              >
                <span style={{ fontWeight: 700 }}> Keunggulan utama dari SMS advertising </span> adalah kecepatan
                pengiriman dan tingkat keterbacaan yang tinggi, karena pesan langsung masuk ke ponsel pengguna. Hal ini
                memungkinkan pesan-pesan pemasaran untuk langsung diakses oleh pelanggan tanpa memerlukan koneksi
                internet. Dengan segmentasi yang tepat, SMS advertising juga dapat menjadi alat yang efektif untuk
                menjangkau audiens yang relevan.
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SmsAdsDesc;
