"use client";

import { AppDispatch, RootState } from "@/store";
import { fetchMitra } from "@/store/landing-page/mitra";
import { ResponseMitra } from "@/types/landing-page/mitra.types";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TelahDiliput = () => {

  const dispatch = useDispatch<AppDispatch>();

  const dataResponse: ResponseMitra['data'] = useSelector((state: RootState) => state?.mitra)?.data ?? [];

  const data = dataResponse[0]

  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  const handleImageError = (index: number) => {
    setImageErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[index] = true;

      return newErrors;
    });
  };

  useEffect(() => {
    dispatch(fetchMitra({ flag: "mc" }))
  }, [dispatch])

  const sortedItems = data?.item?.length > 0 ? [...data.item].filter(item => item.status === 1).sort((a, b) => a.order_list - b.order_list) : [];

  return (
    <>
      <Container>
        <Grid data-aos="fade-up">
          <Typography sx={{ fontSize: "32px", fontWeight: 700, color: "#6D6E70", textAlign: "center" }}>
            {/* Telah Diliput Oleh */}
            {data?.title}
          </Typography>
        </Grid>
        <Grid
          data-aos="zoom-in-down"
          data-aos-delay="500"
          sx={{
            my: 5,
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 155px)",
            gridGap: "25px",
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {sortedItems &&
            sortedItems?.map((item, index) => {

              const image = process.env.NEXT_PUBLIC_HOST_URL_IMAGE + item?.image

              const imageError = imageErrors[index];

              return (
                <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Box component="img" onError={() => handleImageError(index)} src={imageError ? "/assets/images/img-placeholder" : image} alt="image" style={{ width: "155px", objectFit: "contain" }} />
                </Box>
              )
            })}
        </Grid>
      </Container>
    </>
  );
};

export default TelahDiliput;

// const images = [
//   "assets/images/landing-page/main/telah-diliput/monitor.png",
//   "assets/images/landing-page/main/telah-diliput/pikiran-rakyat.png",
//   "assets/images/landing-page/main/telah-diliput/nu.png",
//   "assets/images/landing-page/main/telah-diliput/merdeka.png",
//   "assets/images/landing-page/main/telah-diliput/investing-com.png",
//   "assets/images/landing-page/main/telah-diliput/cnbc.png",
//   "assets/images/landing-page/main/telah-diliput/medcom.png",
//   "assets/images/landing-page/main/telah-diliput/kompas.png",
//   "assets/images/landing-page/main/telah-diliput/kontan.png",
//   "assets/images/landing-page/main/telah-diliput/rumah-bumn.png",
//   "assets/images/landing-page/main/telah-diliput/indotelko-web.png",
//   "assets/images/landing-page/main/telah-diliput/it-works.png",
//   "assets/images/landing-page/main/telah-diliput/indibiz.png",
//   "assets/images/landing-page/main/telah-diliput/rm-id.png",
// ];
