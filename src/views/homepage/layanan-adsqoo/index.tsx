"use client";

import { AppDispatch, RootState } from "@/store";
import { fetchService } from "@/store/landing-page/service";
import { ResponseServices } from "@/types/landing-page/services.types";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LayananAdsqoo = () => {
  const router = useRouter();

  const handleButtonSelanjutnya = (route: string) => {
    router.push(`/${route}`);
  };

  const dispatch = useDispatch<AppDispatch>();

  const dataResponse: ResponseServices['data'] = useSelector((state: RootState) => state?.service)?.data ?? [];

  const data = dataResponse[0]

  useEffect(() => {
    dispatch(fetchService())
  }, [dispatch])

  const sortedItem = data?.category?.length > 0 ? [...data?.category].sort((a, b) => a.order_list - b.order_list) : [];

  return (
    <>
      <Box
        bgcolor="background.paper"
        sx={{ 
          py: "2.5rem",
          width: "100%" 
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              justifyContent: "center",
              gap: "2rem",  
              // px: {
              //   md: 14,
              //   xs: 3,
              // }
            }}
          >
            <Box data-aos="fade-down">
              <Typography
                variant="h1"
                color="text.primary"
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  // fontWeight: 700,
                  // color: "#6D6E70",
                  // fontSize: "30px"
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mt: "1rem",
                  textAlign: "center",
                  maxWidth: "800px",
                  // fontWeight: 400,
                  // color: "#6D6E70",
                  // fontSize: "22px",
                  // letterSpacing: "-.7px",
                  "@media(width< 900px)": {
                    mr: 0,
                    mt: 3,
                    mb: 6,
                    // textAlign: "center",
                  },
                }}
              >
                {data?.description}
              </Typography>
            </Box>

            {/* <Grid
              // item xs={12} container
              data-aos="fade-up"
              // sx={{
                // display: "grid",
                // gridTemplateColumns: { xs: "1fr", md: "1fr" },
                // "@media( 900px <= width < 1200px)": {
                //   gridTemplateColumns: "1fr 1.2fr",
                // },
              // }}
            > */}
              {/* <Grid
                sx={{
                  display: "grid",
                  position: "relative",
                  alignItems: "end",
                  marginRight: "-160px",
                  "@media(width< 900px)": { display: "none" },
                }}
              >
                <img
                  src={process.env.NEXT_PUBLIC_HOST_URL_IMAGE + data?.avatar}
                  alt={data?.title}
                  style={{
                    height: "auto",
                    maxHeight: "500px",
                    zIndex: "0",
                    position: "absolute",
                  }}
                />
              </Grid> */}
              <Grid
                container spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: "center",
                  mt: 0,
                  paddingBottom: "20px",
                  // zIndex: "1",
                }}
              >
                {sortedItem?.map((item, index) => {

                  const image = process.env.NEXT_PUBLIC_HOST_URL_IMAGE + item?.image

                  return (
                    <Grid key={index}>
                      <Card
                        sx={{
                          background: "white",
                          paddingBottom: 1,
                          marginX: "auto",
                          // width: { xs: "75%", md: "100%" },
                          borderRadius: "2rem",
                          boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "start",
                            paddingY: { xs: "10px", md: "10px" },
                            paddingX: "1rem",
                            height: "100%",
                          }}
                        >
                          <Box
                            component="img"
                            src={image}
                            alt={item?.name}
                            sx={{
                              width: { xs: "100px", md: "100%" },
                              height: "auto",
                              maxWidth: { sm: "100px", lg: "160px" },
                              aspectRatio: "1 / 1",
                              marginTop: 3,
                              marginX: 3,
                              "@media(width <= 1200px)": {
                                marginTop: 1,
                                marginX: 1,
                              },
                            }}
                          />
                          <Typography
                            variant="body1"
                            fontWeight={700}
                            color="text.primary"
                            textAlign="center"
                            marginTop={1}
                            marginBottom={1}
                            sx={{
                              letterSpacing: -0.4
                            }}
                          >
                            {item?.name}
                          </Typography>
                          <Box
                            sx={{
                              marginTop: "auto",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {/* <Link href={item?.path}> */}
                            <Button
                              sx={{
                                borderRadius: "2rem",
                                width: "100%",
                                color: "white",
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                },
                                backgroundColor: 
                                  "primary.main",
                                  "&:hover": {
                                    backgroundColor: "primary.dark",
                                  }
                              }}
                              onClick={() => {
                                handleButtonSelanjutnya(item?.path);
                              }}
                            >
                              Selanjutnya
                            </Button>
                            {/* </Link> */}
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            {/* </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LayananAdsqoo;

// const layananAdsqoo = [
//   {
//     name: "SMS ADVERTISING",
//     image: "assets/images/landing-page/main/layanan-adsqoo/sms-ads.png",
//     route: "/sms-advertising",
//   },
//   {
//     name: "WHATSAPP ADVERTISING",
//     image:
//       "assets/images/landing-page/main/layanan-adsqoo/whatsapp-business.png",
//     route: "/whatsapp-business",
//   },
//   {
//     name: "OUTDOOR ADVERTISING",
//     image: "assets/images/landing-page/main/layanan-adsqoo/outdoor-ads.png",
//     route: "/outdoor-advertising",
//   },
//   {
//     name: "ONLINE ADVERTISING",
//     image: "assets/images/landing-page/main/layanan-adsqoo/online-ads.png",
//     route: "/online-advertising",
//   },
// ];
