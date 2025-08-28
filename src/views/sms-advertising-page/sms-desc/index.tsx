import ProductCardWithModal from "@/components/front/shared/ProductCards";
import { Button, Card, CardContent, Container, Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { products } from "@/data/products";


const layananSms = products.filter((product) => product.category === "sms");

const SmsAdsDesc = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "background.default", height: "max-content", overflow: "hidden" }}>
        <Container sx={{ height: "auto", pt: "2.5rem" }}>
          <Typography
            data-aos="fade-up"
            variant="h1"
            sx={{
              // fontWeight: 700,
              // color: "#6D6E70",
              // fontSize: { xs: "28px", md: "36px", lg: "44px" },
              textAlign: "center",
              mb: "1rem",
              // letterSpacing: "-.5px",
            }}
          >
            SMS Advertising
          </Typography>
          <Grid
            data-aos="fade-up"
            sx={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 2fr" },
              // paddingX: 16,
              // "@media(800px <= width < 1200px)": { gridTemplateColumns: "1fr", pb: 5 },
              // "@media(width < 800px)": { paddingX: "0rem", pb: 5 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: { xs: "none", lg: "grid" },
                alignItems: "center",
                justifyContent: "center",
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
              display={'flex'}
              flexDirection={'column'}
              height={'100%'}
              width={'100%'}
              // flex start
              gap={'1rem'}
              paddingBottom="1rem"
            >
              <Box
                sx={{
                  paddingX: "1.5rem",
                  paddingY: "1.5rem",
                  display: "flex",
                  background: "white",
                  flexDirection: "column",
                  borderRadius: "1.5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  border: (theme) => `1px solid ${(theme.vars || theme).palette.divider}`,
                  boxShadow: theme => theme.shadows[1],
                  // marginTop: 1,
                  // marginBottom: { xs: 1, lg: 15 },
                  // height: "fit-content",
                  // maxWidth: { xs: "100%", md: "500px" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    // fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                    // fontWeight: 300,
                    // color: "#6D6E70",
                    // letterSpacing: "-.3px",
                  }}
                >
                  Maksimalkan penjualan produk bisnis Anda dengan memanfaatkan berbagai media iklan messaging seperti SMS
                  broadcast mulai dari
                  <span style={{ fontWeight: 700 }}> SMS Masking, SMS OTP, SMS tertarget dan SMS LBA.</span> Adsqoo
                  menyediakan jasa SMS advertising dari operator Telkomsel, Indosat, XL Axiata dan Smartfren dengan harga
                  murah dan berkualitas.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    // mt: { xs: 2, md: 3 },
                    // fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                    // fontWeight: 300,
                    // color: "#6D6E70",
                    // letterSpacing: "-.3px",
                  }}
                >
                  <span style={{ fontWeight: 700 }}> Keunggulan utama dari SMS advertising </span> adalah kecepatan
                  pengiriman dan tingkat keterbacaan yang tinggi, karena pesan langsung masuk ke ponsel pengguna. Hal ini
                  memungkinkan pesan-pesan pemasaran untuk langsung diakses oleh pelanggan tanpa memerlukan koneksi
                  internet. Dengan segmentasi yang tepat, SMS advertising juga dapat menjadi alat yang efektif untuk
                  menjangkau audiens yang relevan.
                </Typography>
              </Box>
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: '1fr 1fr',
                    sm: '1fr 1fr 1fr 1fr',
                    // md: '1fr 1fr 1fr 1fr',
                    // lg: '1fr 1fr 1fr 1fr'
                  },
                  // px: "4rem",
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "1rem",
                  alignItems: "stretch",
                  // mt: 0,
                  // mb: 2,
                  // "@media(width < 700px)": {
                  //   gridTemplateColumns: "1fr",
                  // },
                }}
              >
                {layananSms.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      boxShadow: theme => theme.shadows[1],
                      // backgroundColor: "background.paper",
                      backgroundColor: "white",
                    }}
                  >
                    <CardContent
                      //gap 1rem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "100%",
                        width: "100%",
                        gap: "1rem",
                      }}
                    >

                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "125px",
                          // aspectRatio: "1/1",
                          objectFit: "contain",
                          borderRadius: 2,
                          // mb: 3,
                          // p: (theme) => ({
                          //   xs: 1,
                          //   sm: 2,
                          // }),
                          boxSizing: "border-box",
                          // Add extra padding if not 1:1 aspect ratio
                          aspectRatio: "1 / 1",
                          ...(item.image && {
                            padding: "12px",
                          }),
                        }}
                      />
                      <Typography
                        variant="h5"
                        fontSize={16}
                        textAlign={'center'}
                        lineHeight={1.2}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  maxWidth: "200px",
                  alignSelf: "center"
                }}
                onClick={() => {
                  const section = document.getElementById("layanan-sms");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SmsAdsDesc;
