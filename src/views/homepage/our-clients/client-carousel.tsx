"use client";

import { DataMitra } from "@/types/landing-page/mitra.types";
import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useEffect, useState } from "react";

interface Props {
  data: DataMitra
}

const ClientCarousel = ({ data }:Props) => {
  const [totalImage, setTotalImage] = useState(6);
  const size = useWindowSize();
  const width = size.width;

  const sortedItems = data?.item?.length > 0? [...data.item].filter(item => item.status === 1).sort((a, b) => a.order_list - b.order_list): [];

  useEffect(() => {
    if (width < 1200 && width >= 970) {
      setTotalImage(5);
    } else if (width <= 970) {
      setTotalImage(3);
    } else {
      setTotalImage(6);
    }
  }, [width]);

  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  const handleImageError = (index: number) => {
    setImageErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[index] = true;

      return newErrors;
    });
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          paddingX: 10,
          "@media(width < 620px)": {
            paddingX: 0,
          },
        }}
      >
        {sortedItems ? (
          <Splide
            options={{
              type: "loop",
              interval: 3500,
              autoplay: true,
              rewind: true,
              perPage: totalImage,
            }}
            style={{
              paddingLeft: width < 720 ? 0 : 55,
              paddingRight: width < 720 ? 0 : 55,
            }}
          >
            {sortedItems &&
              sortedItems?.map((item, index) =>{

                const image = process.env.NEXT_PUBLIC_HOST_URL_IMAGE + item?.image

                const imageError = imageErrors[index];

                return (
                  <SplideSlide
                    key={index}
                    style={{
                      padding: width < 650 ? "10px 0px" : "40px 0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={imageError ? "/assets/images/img-placeholder" : image}
                      onError={() => handleImageError(index)}
                      alt="image"
                      sx={{
                        width: "125px",
                        "@media(470px <= width < 620px)": {
                          width: "125px",
                          height: "125px",
                          mb: 2,
                        },
                        "@media(360px <= width < 470px)": {
                          width: "100px",
                          height: "100px",
                          mb: 2,
                        },
                        "@media(width < 360px)": {
                          width: "75px",
                          height: "75px",
                          mb: 2,
                        },
                      }}
                    />
                  </SplideSlide>
                )
              })}
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
      margin-left: -30px;
      scale: 1.5;
      background: transparent;
    }

    .splide__arrow.splide__arrow--next {
      margin-right: -35px;
      scale: 1.5;
      background: transparent;
    }
  `}
      </style>
    </>
  );
};

export default ClientCarousel;

// const images = [
//   "assets/images/landing-page/main/our-clients/new-01.png",
//   "assets/images/landing-page/main/our-clients/new-02.png",
//   "assets/images/landing-page/main/our-clients/new-03.png",
//   "assets/images/landing-page/main/our-clients/new-04.png",
//   "assets/images/landing-page/main/our-clients/new-05.png",
//   "assets/images/landing-page/main/our-clients/new-06.png",
//   "assets/images/landing-page/main/our-clients/new-07.png",
//   "assets/images/landing-page/main/our-clients/new-08.png",
//   "assets/images/landing-page/main/our-clients/new-09.png",
//   "assets/images/landing-page/main/our-clients/new-10.png",
//   "assets/images/landing-page/main/our-clients/new-11.png",
//   "assets/images/landing-page/main/our-clients/new-12.png",
//   "assets/images/landing-page/main/our-clients/new-13.png",
//   "assets/images/landing-page/main/our-clients/new-14.png",
//   "assets/images/landing-page/main/our-clients/new-15.png",
//   "assets/images/landing-page/main/our-clients/new-16.png",
//   "assets/images/landing-page/main/our-clients/new-17.png",
//   "assets/images/landing-page/main/our-clients/new-18.png",
//   "assets/images/landing-page/main/our-clients/new-19.png",
//   "assets/images/landing-page/main/our-clients/new-20.png",
//   "assets/images/landing-page/main/our-clients/new-21.png",
//   "assets/images/landing-page/main/our-clients/new-22.png",
// ];

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
