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
      <Box sx={{ paddingY: 0 }}>
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
                color: "#58595B",
                fontWeight: 600,
                fontSize: "27px",
                letterSpacing: "-.5px",
                textAlign: "center",
              }}
            >
              {/* Telah Dipercaya 5000+ Bisnis, */}
              {data?.title ?? "-"}
            </Typography>
            <Typography
              sx={{
                color: "#58595B",
                fontWeight: 700,
                fontSize: "32px",
                mt: "-5px",
                letterSpacing: "-.5px",
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
