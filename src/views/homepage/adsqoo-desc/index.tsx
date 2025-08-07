"use client";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoDesc from "./video-desc";
import { AboutMe } from "@/types/landing-page/about-me.types";
import { getEndpoint, getMenuPath, getToken } from "@/utils/api/getApi";
import getEncodedKey from "@/utils/api/getEncodedKey";

const AdsqooDesc = () => {
const [data, setData] = useState<AboutMe | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getEndpoint("about_me") + "/all", {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": getEncodedKey(),
            "X-MENU-PATH": getMenuPath(),
            "Authorization": `Bearer ${getToken()}`
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Container>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            width: "100%",
            rowGap: 5,
            columnGap: 5,
          }}
          data-aos="fade-down"
        >
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#6D6E70",
                letterSpacing: "-1px",
                "@media(width < 1200px)": { textAlign: "center" },
              }}
            >
              {data?.data[0]?.title ?? "-"}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: "20px",
                fontWeight: 300,
                color: "#58595B",
                letterSpacing: "-.5px",
                lineHeight: "1.5",
                mr: 5,
                "@media(width < 1200px)": { mr: 0, textAlign: "justify" },
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: data?.data[0]?.description ?? "" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              "@media(width < 900px)": { height: "350px" },
            }}
          >
            <Box
              sx={{
                maxWidth: "600px",
                width: "100%",
                "@media(width < 900px)": { maxHeight: "100px" },
              }}
              data-aos="fade-up"
            >
              <iframe width="578" height="325" src="https://www.youtube.com/embed/qFvQ0rMU6cs" title="Tutorial Top Up Token SMS Center - Adsqoo Indonesia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default AdsqooDesc;
