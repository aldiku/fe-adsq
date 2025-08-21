import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const HeroWaBlast = () => {
  const router = useRouter();

  // const envBO = process.env.NEXT_PUBLIC_BACK_OFFICE_URL;

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(/assets/images/landing-page/whatsapp-targeted/hero-wa-targeted.jpg)",
          height: "100%",
          minHeight:"80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
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
                  Layanan WA Blast Tertarget No 1 di Indonesia
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
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
                    mt: 7,

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
                  Mau kirim pesan untuk promosi produk ke nomer-nomer WA yang lebih tertarget tanpa perlu takut nomor diblokir? Gunakan layanan WA Blast Tertarget dari Adsqoo untuk memaksimalkan penjualan produk anda
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 20,
                  ml: 5,
                  display: "flex",
                  gap: "30px",
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
                     "dashboards/campaign/whatsapp-blast/create/",
                    )
                  }
                  >
                    Order
                  </Button>
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
                    onClick={() => router.push("/konsultasi")}
                  >
                    Konsultasi
                  </Button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroWaBlast;
