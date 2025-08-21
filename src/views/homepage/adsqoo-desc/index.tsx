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
    <Box
      paddingX={{
        xs: "2rem",
        sm: "2rem",
        md: "4rem",
        xl: "8rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          width: "100%",
          alignContent: "center",
          alignItems: { xs: "center", md: "center" }, // Center vertically for all, or use xs only
          justifyItems: { xs: "center", md: "start" }, // Center horizontally for xs
          rowGap: 3,
          columnGap: 5,
        }}
        data-aos="fade-down"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <Typography
            variant="h1"
            color="text.primary"
          >
            {data?.data[0]?.title ?? "-"}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={{ xs: "100%", sm: "600px" }}
            sx={{
              mr: { xs: 0, sm: 5 },
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: data?.data[0]?.description ?? "" }} />
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
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
            <iframe width="100%" height="325" src="https://www.youtube.com/embed/qFvQ0rMU6cs" title="Tutorial Top Up Token SMS Center - Adsqoo Indonesia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdsqooDesc;
