"use client";

import { AppDispatch, RootState } from "@/store";
import { fetchOurClient } from "@/store/landing-page/our-client";
import { ResponseMitra } from "@/types/landing-page/mitra.types";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientCarousel from "./client-carousel";

const OurClients = () => {

  const dispatch = useDispatch<AppDispatch>();

  const dataResponse: ResponseMitra['data'] = useSelector((state: RootState) => state?.ourClient)?.data ?? [];

  const data = dataResponse[0]

  useEffect(() => {
    dispatch(fetchOurClient({ flag: "oc" }))
  }, [dispatch])

  return (
    <>
      <Box 
        sx={{ 
          paddingY: 0,
          backgroundColor: "background.paper",
          py: { xs: "1rem", md: "2.5rem" },
        }}
      >
        <Container>
          <Box
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
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
                textAlign: "center",
              }}
            >
              {/* Telah Dipercaya 5000+ Bisnis, */}
              {data?.title ?? "-"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* UKM & Komunitas di Seluruh Indonesia */}
              {data?.description ?? "-"}
            </Typography>
          </Box>

          <Box sx={{ justifyContent: "center" }}>
            <ClientCarousel data={data} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OurClients;
