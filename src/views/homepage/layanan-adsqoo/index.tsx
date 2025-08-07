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
        sx={{ pt: 10, width: "100%", backgroundColor: "rgba(187,189,191, .17)" }}
      >
        <Container>
          <Grid
            container
            sx={{
              px: {
                md: "150px",
                xs: 3,
              }
            }}
          >
            <Box data-aos="fade-down">
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#6D6E70",
                  fontSize: "30px"
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  mt: 1,
                  color: "#6D6E70",
                  fontSize: "22px",
                  letterSpacing: "-.7px",
                  "@media(width< 900px)": {
                    mr: 0,
                    mt: 3,
                    mb: 6,
                    textAlign: "center",
                  },
                }}
              >
                {data?.description}
              </Typography>
            </Box>

            <Grid
              item xs={12} container
              data-aos="fade-up"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                "@media( 900px <= width < 1200px)": {
                  gridTemplateColumns: "1fr 1.2fr",
                },
              }}
            >
              <Grid
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
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "end",
                  mt: 0,
                  paddingBottom: "50px",
                  zIndex: "1",
                }}
              >
                {sortedItem?.map((item, index) => {

                  const image = process.env.NEXT_PUBLIC_HOST_URL_IMAGE + item?.image

                  return (
                    <Grid key={index} container item xs={12} md={6}>
                      <Card
                        sx={{
                          background: "white",
                          paddingBottom: 3,
                          marginX: "auto",
                          width: { xs: "75%", md: "100%" },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "start",
                            paddingY: { xs: "10px", md: "10px" },
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
                              maxWidth: { sm: "95px", lg: "155px" },
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
                            fontWeight={700}
                            color="#58595B"
                            textAlign="center"
                            marginTop={2}
                            marginBottom={1}
                            fontSize="16px"
                            sx={{
                              letterSpacing: "-.3px",
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
                                width: "100%",
                                maxWidth: {
                                  xs: "100px",
                                  sm: "120px",
                                  md: "155px",
                                },
                                color: "white",
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                },
                                background:
                                  "radial-gradient(circle, rgba(251,55,66,1) 0%, rgba(217,61,131,1) 48%, rgba(193,36,116,1) 100%)",
                                "&:hover": {
                                  background:
                                    "radial-gradient(circle, rgba(191,31,41,1) 0%, rgba(203,51,119,1) 74%, rgba(166,41,104,1) 100%)",
                                },
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
            </Grid>
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
