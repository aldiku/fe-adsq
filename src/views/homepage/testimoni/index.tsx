'use client'

import { Box, Container, Typography } from "@mui/material";
import TestimoniCarousel from "./testimoni-carousel";
import { gray } from "@/theme/theme";

const Testimoni = () => {
  return (
    <Box
      paddingX={{
				xs: "1rem",
				sm: "2rem",
				md: "4rem",
				xl: "8rem",
			}}
    >
      <Box
        sx={{
          paddingY: "2rem",
          backgroundColor: gray[800],
          // margin: "4rem",
          borderRadius: "2rem",
        }}
        
      >
        <Container>
          <Box
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "column",
              paddingX: "1rem",
              
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
                color: "background.default",
                textAlign: "left",
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
    </Box>
  );
};

export default Testimoni;
