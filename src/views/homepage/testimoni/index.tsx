'use client'

import { Box, Container, Typography } from "@mui/material";
import TestimoniCarousel from "./testimoni-carousel";

const Testimoni = () => {
  return (
    <>
      <Box sx={{ paddingY: 5, backgroundColor: "rgba(187,189,191, .17)" }}>
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
              sx={{
                color: "#6D6E70",
                fontWeight: 700,
                fontSize: "32px",
                letterSpacing: "-.5px",
                textAlign: "center",
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
