import layananSms from "@/views/sms-advertising-page/layanan-sms";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import React from "react";
import { products } from "@/data/products";

const paketWhatsapp = products.filter((product) => product.type === "whatsapp-business");

const WhatsappDesc = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          pt: "2rem"
        }}
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
            gap: "1rem",
          }}
        >
          <Typography
            data-aos="fade-up"
            variant="h1"
            sx={{
              textAlign: "center",
              // fontWeight: 700,
              // color: "#6D6E70",
              // fontSize: { xs: "24px", md: "36px", lg: "44px" },
              // letterSpacing: "-.5px",
              // mt:10
            }}
          >
            Whatsapp Business Platform
          </Typography>
          <Grid
            data-aos="fade-up"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "4fr 1fr" },
              gap: "1rem",
              // paddingX: 5,
              // "@media(900px <= width< 1100px)": {
              //   gridTemplateColumns: "1fr",
              //   paddingX: 10,
              // },
              // "@media(600px <= width < 900px)": {
              //   paddingX: 10,
              // },
              // "@media(460px <= width < 600px)": {
              //   paddingX: 5,
              // },
              // "@media(width < 460px)": {
              //   paddingX: 0,
              // },
            }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              height={'100%'}
              width={'100%'}
              // flex start
              gap={'1rem'}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // height: "100%",
                  paddingX: "1.5rem",
                  paddingY: "1.5rem",
                  paddingBottom: "1rem",
                  borderRadius: "1.5rem",
                  background: "white",
                  justifyContent: "space-between",
                  gap: "1rem",
                  border: (theme) => `1px solid ${(theme.vars || theme).palette.divider}`,
                  boxShadow: theme => theme.shadows[1],
                }}
              >
                <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      // fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "22px" },
                      // fontWeight: 300,
                      // color: "#6D6E70",
                      // letterSpacing: "-.3px",
                      // "@media(width< 1100px)": {
                      //   textAlign: "justify",
                      // },
                    }}
                  >
                    Untuk memenuhi kebutuhan komunikasi messaging seperti Whatsapp Blast. WhatsApp membagi aplikasinya
                    berdasarkan fungsinya yaitu WhatsApp Personal, WhatsApp Business dan WhatsApp Business API. Pebisnis
                    yang membutuhkan komunikasi dalam jumlah besar dan <strong>fitur fitur khusus lainnya seperti:</strong>
                  </Typography>
                  <ul
                    style={{
                      marginLeft: "20px",
                      // listStyleImage: "url('/assets/images/landing-page/whatsapp-business/whatsapp-desc/check.png')",
                    }}
                  >
                    {fiturKhusus.map((fitur, index) => (
                      <li key={index}>
                        <Typography
                          variant="body1"
                          sx={{
                            // fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "22px" },
                            // fontWeight: 300,
                            // color: "#6D6E70",
                            // letterSpacing: "-.3px",
                          }}
                        >
                          {fitur}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr 1fr',
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
                {paketWhatsapp.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      // backgroundColor: "background.paper",
                      backgroundColor: "white",
                      boxShadow: theme => theme.shadows[1],
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
                  // maxWidth: "200px",
                  // width: "100%",
                  alignSelf: "center",
                }}
                onClick={() => {
                  const section = document.getElementById("paket-whatsapp");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Pelajari Lebih Lanjut
              </Button>

            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                gap: "1rem",
                height: "100%",
                "@media(width < 1200px)": {
                  // maxHeight: "450px",
                  // height: "auto",
                  // width: "auto",
                  display: "none",
                },
              }}
            >
              <Box
                component="img"
                src="/assets/images/landing-page/whatsapp-business/whatsapp-desc/bg-image-whatsapp-desc.png"
                alt="sms-desc"
                sx={{
                  // height: "300px",
                  // marginLeft: "-100px",
                  justifySelf: "end",
                  alignSelf: "end",
                  zIndex: "1",
                  position: "relative",
                  // "@med  ia(1100px <= width < 1300px)": {
                  maxHeight: "600px",
                  // },
                }}
              />
            </Box>
          </Grid>
        </Box>
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
