import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import React from "react";

import HeroSmsAds from "../../sms-advertising-page/hero";
import HeroWhatsappBusiness from "../../whatsapp-business-page/hero";
import HeroOutdoorAds from "../../outdoor-advertising-page/hero";
import HeroOnlineAds from "../../online-advertising-page/hero";
import HeroMain from "./heroMain";

const Hero = () => {
  return (
    <>
      <Box>
        {herosDynamic ? (
          <Splide
            options={{
              type: "loop",
              interval: 5000,
              autoplay: true,
              rewind: true,
              perPage: 1,
              pagination: false,
            }}
          >
            {herosDynamic && herosDynamic.map((item, index) => <SplideSlide key={index}>{item}</SplideSlide>)}
          </Splide>
        ) : (
          <>
            <h1 style={{ textAlign: "center", marginTop: "150px" }}>Data Not Found...</h1>
          </>
        )}
      </Box>
      <style>
        {`
    .splide__arrow.splide__arrow--prev {
      display: none;
    }

    .splide__arrow.splide__arrow--next {
      display: none;
    }
  `}
      </style>
    </>
  );
};

export default Hero;

// const heros = [
//   "/assets/images/landing-page/main/heros/hero-main.png",
//   "/assets/images/landing-page/main/heros/hero-sms.png",
//   "/assets/images/landing-page/main/heros/hero-whatsapp.png",
//   "/assets/images/landing-page/main/heros/hero-outdoor.png",
//   "/assets/images/landing-page/main/heros/hero-online.png",
// ];

// eslint-disable-next-line react/jsx-key
const herosDynamic = [<HeroMain />, <HeroSmsAds />, <HeroWhatsappBusiness />, <HeroOutdoorAds />, <HeroOnlineAds />];
