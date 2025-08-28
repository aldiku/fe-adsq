import React from "react";
import Hero from "./hero";
import { Grid, Typography } from "@mui/material";
import SmsAdsDesc from "./sms-desc";
import CaraPemesanan from "./cara-pemesanan";
import LayananSms from "./layanan-sms";
import VideoTutorial from "../video-tutorial";
import FaqList from "./faq-list";

const SmsAdvertisingPage = () => {
  return (
    <>
      <Grid sx={{ width: "100%", overflow: "hidden" }}>
        <Grid>
          <Hero />
        </Grid>
        <Grid>
          <SmsAdsDesc />
        </Grid>
        <Grid >
          <CaraPemesanan />
        </Grid>
        <Grid>
          <LayananSms />
        </Grid>

        <Grid>
          <Typography
            data-aos="fade-in"
            variant="h1"
            sx={{
            //   fontSize: { xs: "32px", md: "40px" },
            //   fontWeight: 600,
            //   color: "#6D6E70",
            //   letterSpacing: "-1px",
              textAlign: "center",
              mt:10
            }}
          >
            Video Tutorial SMS Advertising
          </Typography>
          <VideoTutorial url="https://www.youtube.com/watch?v=hmrWNnpACVI" />
        </Grid>

        <Grid >
          <FaqList />
        </Grid>
      </Grid>
    </>
  );
};

export default SmsAdvertisingPage;
