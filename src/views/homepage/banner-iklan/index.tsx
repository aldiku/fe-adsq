import { Box, Container } from "@mui/material";
import Image from "next/image";

const BannerIklan = () => {
  return (
    <>
      <Container>
        <Box
          data-aos="fade-up"
          sx={{
            margin: "auto",
            // width: { xs: 390, md: 1024 },
            width: { xs: "100%" },
            height: { xs: 100, md: 320 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: { xs: 3, md: 5, lg: 10 },
          }}
        >
          <Image src="/assets/images/index/banner-home.webp" fill style={{ objectFit: "contain" }} alt="banner" />
        </Box>
      </Container>
    </>
  );
};

export default BannerIklan;
