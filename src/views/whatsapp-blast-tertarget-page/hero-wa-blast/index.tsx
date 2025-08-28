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
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%)",
            "@media (max-width:900px)": {
              background: "rgba(0,0,0,0.4)",
            },
          },
        }}
      >
        <Box maxWidth="lg" sx={{ height: "100%", display: "flex", alignItems: "end", position: "relative", zIndex: 2 }}>
          <Grid
            sx={{
              px: {
                xs: "2rem",
                sm: "2rem",
                md: "4rem",
                xl: "8rem"
              },
              // pt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingY: { xs: 5, xl: 15 },
                // paddingLeft: 5,
                // paddingRight: 5,
                "@media(width > 1700px)": { paddingLeft: 15, paddingRight: 5 },
                "@media(900px >=width < 1100px)": { paddingTop: 0 },
                "@media(width < 900px)": { order: 0 },
              }}
            >
              <Box
                sx={{
                  mt: 2,
                  // paddingRight: { xs: 8, xl: 17 },
                  // "@media(width > 1800px)": {
                  //   paddingRight: 4,
                  // },
                  // "@media(1500px <= width < 1800px)": {
                  //   paddingRight: 15,
                  // },
                  // "@media (width < 900px)": {
                  //   paddingRight: 0,
                  // },
                }}
              >
                <Typography
                  data-aos="fade-in"
                  variant="h2"
                  sx={{
                    color: "white",
                    textShadow: theme => theme.shadows[2],
                  }}
                >
                  Layanan WA Blast Tertarget No 1 di Indonesia
                </Typography>
              </Box>
              <Box
                sx={{
                  // mt: 3,
                  paddingRight: { xs: 8, xl: 17 },
                  // "@media(width > 1800px)": {
                  //   paddingRight: 4,
                  // },
                  // "@media(1500px <= width < 1800px)": {
                  //   paddingRight: 15,
                  // },
                  // "@media (width < 900px)": {
                  //   paddingRight: 0,
                  // },
                }}
              >
                <Typography
                  data-aos="fade-in"
                  variant="body1"
                  sx={{
                    color: "white",
                    textShadow: theme => theme.shadows[2],
                  }}
                >
                  Mau kirim pesan untuk promosi produk ke nomer-nomer WA yang lebih tertarget tanpa perlu takut nomor diblokir? Gunakan layanan WA Blast Tertarget dari Adsqoo untuk memaksimalkan penjualan produk anda
                </Typography>
              </Box>

              <Box
                sx={{
                  // mt: 20,
                  // ml: 5,
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  // "@media (width < 900px)": {
                  //   justifyContent: "center",
                  //   mt: 5,
                  //   mb: 0,
                  // },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: theme => theme.shape.pill,
                    paddingX: "2rem",
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
                  variant="outlined"
                  color="secondary"
                  sx={{
                    borderRadius: theme => theme.shape.pill,
                  }}
                  onClick={() => router.push("/konsultasi")}
                >
                  Konsultasi
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeroWaBlast;
