'use client'

import { Box, Container, Typography } from "@mui/material";
import TestimoniCarousel from "./testimoni-carousel";

const Testimoni = () => {
  return (
    <>
      <Box 
        sx={{ 
          paddingY: "2rem", 
          backgroundColor: "background.paper",
        }}
      >
        <Container>
          <Box
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              
              [breakpoints.up("md")]: {
                display: "flex",
                justifyContent: "center",
              },
            })}
            data-aos="fade-down"
          >
            <Typography
              variant="h1"
              sx={{
                color: "text.primary",
                // fontWeight: 700,
                // fontSize: "32px",
                // letterSpacing: "-.5px",
                textAlign: "center",
                pb: "1rem",
              }}
            >
              Apa Kata Mereka Tentang Adsqoo!
            </Typography>
          </Box>

          <Box sx={{ justifyContent: "center" }}>
            <TestimoniCarousel />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Testimoni;
