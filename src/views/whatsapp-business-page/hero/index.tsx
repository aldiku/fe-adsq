import { theme } from "@/theme/AppThemes";
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
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          },
        }}
      >
        <Box maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "end", position: "relative", zIndex: 2 }}>
          <Grid
            sx={{
              px: 3,
              pt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
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
                "@media(width < 600px)": { paddingLeft: 2, paddingRight: 2 }
              }}
            >
              <Box>
                <Typography
                  data-aos="zoom-in"
                  variant="h2"
                  color="white"
                  sx={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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
                  variant="body1"
                  color="white"
                  sx={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: "2rem"
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
                  variant="outlined"
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
                  }}
                  onClick={() => router.push("/book-meeting")}
                >
                  Book Meeting
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
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
                      width: "auto",
                      maxHeight: "350px",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
