import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(/assets/images/landing-page/whatsapp-business/hero/hero-whatsapp-business.png)",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "end" }}>
          <Grid
            sx={{
              px: 3,
              pt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", xl: "1fr 1fr" },
            }}
          >
            <Grid
              sx={{
                paddingY: { xs: 5, xl: 10 },
                paddingLeft: 5,
                paddingRight: 5,
                "@media(width > 1700px)": { paddingLeft: 15, paddingRight: 5 },
                "@media(900px >=width < 1100px)": { paddingTop: 0 },
                "@media(width < 900px)": { order: 0 },
              }}
            >
              <Box>
                <Typography
                  data-aos="zoom-in"
                  sx={{
                    color: "#009645",
                    fontWeight: 500,
                    letterSpacing: "-1px",
                    lineHeight: 1.3,
                    "@media(width > 1800px)": {
                      fontSize: "58px",
                    },
                    "@media(1500px <= width < 1800px)": {
                      fontSize: "48px",
                    },
                    "@media(1300px <= width < 1500px)": {
                      fontSize: "44px",
                    },
                    "@media(1000px <=width < 1300px)": {
                      fontSize: "36px",
                    },
                    "@media(500px <= width < 1100px)": {
                      fontSize: "28px",
                    },
                    "@media (width < 900px)": {
                      textAlign: "center",
                    },
                    "@media(width < 500px)": {
                      fontSize: "24px",
                      mb: 1,
                    },
                  }}
                >
                  Dapatkan Centang Hijau <br /> (Verified) di{" "}
                  <strong style={{ fontSize: "bigger" }}>WhatsApp</strong>{" "}
                  <br /> dengan Mudah
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 2,
                  paddingRight: { xs: 8, xl: 17 },
                  "@media(width > 1800px)": {
                    paddingRight: 4,
                  },
                  "@media(1500px <= width < 1800px)": {
                    paddingRight: 15,
                  },
                  "@media (width < 900px)": {
                    paddingRight: 0,
                  },
                }}
              >
                <Typography
                  data-aos="fade-in"
                  sx={{
                    color: "#009645",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "-.3px",

                    "@media(width > 1700px)": {
                      fontSize: "28px",
                    },
                    "@media(1500px <= width < 1700px)": {
                      fontSize: "22px",
                    },
                    "@media(1100px <=width < 1500px)": {
                      fontSize: "20px",
                    },
                    "@media(width < 1100px)": {
                      fontSize: "16px",
                    },
                    "@media (width < 900px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  <q style={{ marginLeft: "-5px" }}>
                    Tingkatkan Kepercayaan dan Promosikan usaha anda kepada
                    potensi pelanggan melalui WhatsApp Blast, WhatsApp OTP,
                    ataupun WhatsApp Chatbot
                  </q>
                </Typography>
              </Box>

              <Box
                sx={{
                  my: 7,
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  "@media (width < 900px)": {
                    justifyContent: "center",
                    mt: 5,
                    mb: 0,
                  },
                }}
              >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      color: "white",
                      fontSize: "12px",
                      paddingX: 5,
                      fontWeight: 400,
                      letterSpacing: "-.3px",

                      "@media(width > 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1500px <= width < 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1100px <=width < 1500px)": {
                        fontSize: "18px",
                      },
                      "@media(width < 1100px)": {
                        fontSize: "16px",
                      },
                      "@media (width < 900px)": {
                        textAlign: "center",
                      },
                    }}
                    onClick={() =>
                      router.push(
                          "/dashboards/",
                      )
                    }
                  >
                    Order
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1ebc32",
                      borderRadius: 10,
                      color: "white",
                      fontSize: "12px",
                      paddingX: 3,
                      fontWeight: 400,
                      letterSpacing: "-.3px",

                      ":hover": {
                        backgroundColor: "#1d8e2d",
                      },
                      "@media(width > 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1500px <= width < 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1100px <=width < 1500px)": {
                        fontSize: "18px",
                      },
                      "@media(width < 1100px)": {
                        fontSize: "16px",
                      },
                      "@media (width < 900px)": {
                        textAlign: "center",
                      },
                    }}
                    onClick={() => router.push("/book-meeting")}
                  >
                    Book Meeting
                  </Button>

                  <Button
                    variant="contained"
                    color="info"
                    sx={{
                      borderRadius: 10,
                      color: "white",
                      fontSize: "12px",
                      paddingX: 3,
                      fontWeight: 400,
                      letterSpacing: "-.3px",

                      "@media(width > 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1500px <= width < 1700px)": {
                        fontSize: "24px",
                      },
                      "@media(1100px <=width < 1500px)": {
                        fontSize: "18px",
                      },
                      "@media(width < 1100px)": {
                        fontSize: "16px",
                      },
                      "@media (width < 900px)": {
                        textAlign: "center",
                      },
                    }}
                    onClick={() =>
                      router.push("/whatsapp-business/book-meeting")
                    }
                  >
                    Free Trial
                  </Button>
              </Box>
            </Grid>

            <Grid>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  marginTop: "auto",
                  paddingRight: { xs: 0, xl: 5 },
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/landing-page/whatsapp-business/hero/person-whatsapp-business.png"
                  alt="Whatsapp Business Person"
                  sx={{
                    width: "calc(100%)",
                    "@media(1300px < width < 1900px)": {
                      marginLeft: "-50px",
                      width: "calc(100% + 50px)",
                    },
                    "@media(900px <= width <= 1300px)": {
                      marginLeft: "-100px",
                      width: "calc(100% + 100px)",
                    },
                    "@media(width < 900px)": {
                      marginLeft: 0,
                      width: "100%",
                      maxHeight: "350px",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
