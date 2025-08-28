import { theme } from "@/theme/AppThemes";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/assets/images/landing-page/sms-ads/hero/hero-sms-ads.png)",
          height: "100%",
          // maxHeight: "500px",
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
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
          },
        }}
      >
        <Box
          maxWidth="lg"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid
            sx={{
              display: "grid",
              width: "100%",
              height: "100%",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", xl: "1fr 1fr" },
              // pt: { xs: 8, lg: 15 },
              // pl: { xs: 2, sm: 5 },
              // pr: { xs: 2, sm: 10 },
              // ml: { xs: 2, lg: 10 },
              // mr: { xs: 2, sm: 2 },
              gridGap: "1rem",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "start",
                height: "100%",
                pt: { xs: 8, lg: 10 },
                pl: { xs: "1rem", sm: "4rem" },
                // [theme.breakpoints.up("md")]: {
                //   pb: "8rem",
                // },
                // [theme.breakpoints.up("lg")]: {
                //   pb: "10rem",
                // }
              }}
            >
              <Typography
                data-aos="zoom-in"
                variant="h2"
                sx={{
                  maxHeight: "100%",
                  alignSelf: "start",
                  color: "white",
                  textShadow: theme => theme.shadows[2],
                }}
              >
                Cuma Rp650 Bidik Cepat, Target Tepat dengan SMS Advertising
              </Typography>
              <Typography
                data-aos="fade-in"
                variant="body1"
                sx={{
                  color: "white",
                  textShadow: theme => theme.shadows[2],
                }}
              >
                <q style={{ marginLeft: "-5px" }}>
                  Promosikan usaha anda kepada potensi pelanggan melalui SMS
                  advertising yang mampu menargetkan potensi pelanggan anda di
                  berbagai lokasi dan berbagai demografi
                </q>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  width: "100%",
                  [theme.breakpoints.down("sm")]: {
                    justifyContent: "center",
                  }
                  // justifyContent: { xs: "center", md: "start" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: "2rem",
                  }}
                  onClick={() =>
                    window.open(
                      process.env.NEXT_PUBLIC_BACK_OFFICE_URL +
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
                    paddingX: '2rem',
                  }}
                  onClick={() => router.push("/book-meeting")}
                >
                  Book Meeting
                </Button>
              </Box>
            </Grid>

            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                // paddingRight: { xs: 0, xl: 5 },
                // pl: { xs: 3, sm: 7, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/assets/images/landing-page/sms-ads/hero/person-sms-ads.png"
                alt="Whatsapp Business Person"
                sx={{
                  width: "calc(100%)",
                  "@media(1300px < width < 1900px)": {
                    marginRight: "-50px",
                    width: "calc(100% + 100px)",
                  },
                  "@media(900px <= width <= 1300px)": {
                    marginRight: "-100px",
                    width: "calc(100% + 50px)",
                  },
                  "@media(width < 900px)": {
                    marginLeft: 0,
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "350px",
                  },
                }}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
