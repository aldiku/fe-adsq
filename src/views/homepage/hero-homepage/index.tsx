"use client";

import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { Fade, Box, IconButton, Button, Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { ResponseMasterImageSlider } from "@/types/landing-page/image-slider.types";
import { AppDispatch, RootState } from "@/store";
import { useRouter } from "next/navigation";
import { fetchImageSlider } from "@/store/landing-page/image-slider";
import { gray } from "@/theme/theme";
import { theme } from "@/theme/AppThemes";

const HeroSectionLandingPageViews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  const carouselData: ResponseMasterImageSlider['data'] = useSelector((state: RootState) => state?.ImageSlider)?.data ?? [];
  // fix: const carouselData = useSelector((state: RootState) => state?.ImageSlider)?.data ?? [];

  const sortedItem = carouselData?.length > 0 ? [...carouselData].sort((a, b) => a.order_list - b.order_list) : [];

  useEffect(() => {
    dispatch(fetchImageSlider());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      if (activeIndex === sortedItem?.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    // setFade(false);
    setTimeout(() => {
      if (activeIndex === 0) {
        setActiveIndex(sortedItem?.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
      // setFade(true);
    }, 500);
  };

  return (
    <Fragment>
      <Box sx={{ position: 'relative', height: 'calc(700px - 80px)', width: '100%', overflow: 'hidden', md: { height: '600px' } }}>
        {sortedItem?.map((item, index) => (
          <Fade in={fade && index === activeIndex} timeout={500} key={index}>
            <Box sx={{ position: 'absolute', height: '100%', width: '100%' }}>
              <HeroViews data={item} />
            </Box>
          </Fade>
        ))}
        <IconButton
          onClick={handlePrev}
          sx={{ 
            position: 'absolute', 
            left: 0, top: '50%', 
            zIndex: 10, 
            transform: 'translateY(-50%)', 
            color: 'white',
            background: 'none',
            border: 'none',
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 10, transform: 'translateY(-50%)', color: 'white', background: 'none', border: 'none',}}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {sortedItem?.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: index === activeIndex ? "white" : "grey.400",
                margin: "0 4px",
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default HeroSectionLandingPageViews;

interface Props {
  data: any;
}

const HeroViews = (props: Props) => {
  const { data } = props;

  const route = useRouter()

  const image = process.env.NEXT_PUBLIC_HOST_URL_IMAGE + data?.image

  console.log("Image URL:", image);

  return (
    <Fragment>
      <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
        <img
          src={image}
          alt={data?.headline}
          style={{
            position: 'absolute',
            right: 0,
            marginLeft: 'calc(-50vw + 50%)',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'blur(4px)',
          }}
        />
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',  
            px: {xs: 6, sm: 10}, 
            pt: {xs: 6, sm: 20}, 
            pb: 20, 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              color: 'white',
              maxWidth: '600px',
              lg: {
                color: `${data?.text_color} !important`,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
              },
            }}
          >
            <Typography 
              variant="h2" 
              component={"h1"}
              fontSize={{
                  xs: 32,
                  sm: 40,
                }}  
            >
              {data?.headline} {data?.tagline}
            </Typography>
            <Typography 
              variant="body1"
              
              style={{ 
                marginTop: '1.5rem', 
              }}
            >
              {data?.description}
            </Typography>
            <Box sx={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', "@media (min-width: 768px)": { flexDirection: 'row' }, lg: { justifyContent: 'flex-start' } }}>
              {data?.button_order?.show && (
                <Button
                  onClick={() => route.push(data?.button_order?.cta)}
                  variant="contained"
                  color="primary"
                  sx={{ 
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: '2rem',
                  }}
                >
                  Order
                </Button>
              )}

              {data?.button_book_meeting?.show && (
                <Button
                  variant="outlined"
                  onClick={() => route.push(data?.button_book_meeting?.cta)}
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: '1.5rem',
                  }}
                >
                  Book Meeting
                </Button>
              )}
              {data?.button_contact_us?.show && (
                <Button
                  variant="outlined"
                  onClick={() => route.push(data?.button_contact_us?.cta)}
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: '1.5rem',
                  }}
                >
                  Contact Us
                </Button>
              )}
              {data?.button_free_trial?.show && (
                <Button
                  variant="outlined"
                  onClick={() => route.push(data?.button_free_trial?.cta)}
                  sx={{
                    borderRadius: (theme.vars || theme).shape.pill,
                    paddingX: '1.5rem',
                  }}
                >
                  Free Trial
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};
