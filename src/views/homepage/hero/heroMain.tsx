import { Button, Typography, Box, Grid } from "@mui/material";
import React from "react";

const HeroMain = () => {
  return (
    <>
      <Box
        sx={{
          // paddingX: { xs: 2, md: 3, lg: 10, xl: 10 },
          backgroundImage:
            "url(/assets/images/landing-page/main/hero/hero-main.png)",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr", xl: "1fr 1fr" },
          }}
        >
          <Grid
            sx={{
              // paddingX: { xs: 2, md: 5, lg: 5, xl: 5 },
              paddingY: { xs: 5, md: 10, xl: 10 },
              "@media(1800px <= width)": {
                paddingTop: 15,
              },
              "@media(900px >=width < 1100px)": {
                paddingTop: 10,
              },
              "@media(width < 900px)": {
                order: 1,
              },
            }}
          >
            <Box>
              <Typography
                data-aos="zoom-in"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  letterSpacing: "-1px",
                  // marginRight: { xs: 0, md: "-200px", xl: "-235px" },
                  lineHeight: 1.3,

                  "@media(width > 1800px)": {
                    fontSize: "60px",
                  },
                  "@media(1500px <= width <= 1800px)": {
                    fontSize: "45px",
                  },
                  "@media(1000px <= width < 1500px)": {
                    fontSize: "30px",
                  },
                  "@media(500px <= width < 1000px)": {
                    fontSize: "48px",
                  },
                  "@media (width < 900px)": {
                    textAlign: "center",
                  },
                  "@media(width < 500px)": {
                    fontSize: "28px",
                    mb: 1,
                  },
                }}
              >
                Promosi Mudah & Murah
              </Typography>
            </Box>

            <Box>
              <Typography
                data-aos="zoom-out"
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", sm: "16px" },
                  fontWeight: 700,
                  letterSpacing: "2px",

                  "@media(width > 1800px)": {
                    fontSize: "64px",
                  },
                  "@media(1500px <= width < 1800px)": {
                    fontSize: "52px",
                  },
                  "@media(1100px <= width < 1500px)": {
                    fontSize: "42px",
                  },
                  "@media(1000px <=width < 1100px)": {
                    fontSize: "44px",
                  },
                  "@media(500px <= width < 1000px)": {
                    fontSize: "38px",
                  },
                  "@media (width < 900px)": {
                    textAlign: "center",
                    letterSpacing: "0px",
                  },
                  "@media(width < 500px)": {
                    fontSize: "32px",
                  },
                }}
              >
                Hanya di Adsqoo
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 2,
                "@media(width > 1800px)": {
                  paddingRight: 10,
                },
                "@media(1500px <= width < 1800px)": {
                  paddingRight: 15,
                },
                "@media(900px <= width < 1500px)": {
                  paddingRight: 17,
                },
                "@media (width < 900px)": {
                  paddingRight: 0,
                },
              }}
            >
              <Typography
                data-aos="fade-in"
                sx={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "-.3px",

                  "@media(width > 1700px)": {
                    fontSize: "30px",
                  },

                  "@media(1500px <= width < 1700px)": {
                    fontSize: "24px",
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
                  Tingkatkan visibilitas dan jangkauan Anda dengan teknologi
                  periklanan berbasis web yang inovatif!
                </q>
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 6,
                // visibility: "hidden",
                display: "none",
                "@media (width < 900px)": {
                  textAlign: "center",
                },
              }}
            >
              <Button
                data-aos="fade-up"
                variant="contained"
                sx={{
                  borderRadius: 10,
                  color: "white",
                  fontSize: "12px",
                  paddingX: 5,
                  fontWeight: 400,
                  letterSpacing: "-.3px",

                  "@media(width > 1700px)": {
                    fontSize: "30px",
                  },
                  "@media(1500px <= width < 1700px)": {
                    fontSize: "24px",
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
                Selanjutnya
              </Button>
            </Box>
          </Grid>

          <Grid
            sx={{
              "@media(width < 1000px)": {
                order: 0,
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
                "@media(width < 900px)": {
                  display: "grid",
                  justifyContent: "end",
                  width: "100%",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "calc(100% + 100px)",

                  "@media(width > 1500px)": {
                    marginLeft: "-100px",
                  },
                  "@media(width < 1500px)": {
                    marginLeft: "-60px",
                  },
                  "@media(width < 900px)": {
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: "450px",
                    marginLeft: "auto",
                  },
                }}
                src="/assets/images/landing-page/main/hero/object-main.png"
                alt="Main Hero"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroMain;
