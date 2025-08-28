"use client";

import { Button, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { theme } from "@/theme/AppThemes";


const KenalinDashboard = () => {

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
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    width: "100%",
                    alignContent: "center",
                    alignItems: { xs: "center", md: "center" }, // Center vertically for all, or use xs only
                    justifyItems: { xs: "center", md: "start" }, // Center horizontally for xs
                    columnGap: 5,
                }}
                data-aos="fade-down"
            >
                <Box
                    sx={{
                        width: "100%",
                        // maxWidth: { xs: "400px", lg: "100%" },
                        maxWidth: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: { xs: "center", lg: "flex-start" },
                        gap: "1rem",
                        mt: { xs: 0, sm: "2rem" },
                        // px: "2rem"
                    }}
                >
                    <Typography
                        variant="h1"
                        color="text.primary"
                        width="100%"
                        maxWidth={{ xs: "100%", sm: "400px" }}
                        justifyContent={"flex-start"}
                    >
                        Kenalin Dashboard
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        width={"100%"}
                        maxWidth={{ xs: "100%", sm: "400px" }}
                        justifyContent={"flex-start"}
                    >
                        Dashboard all-in-one dimana kamu bisa customize, order, dan track semua campaign-mu!
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.5rem",
                            mt: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <Typography
                            variant="h1"
                            fontSize={24}
                            color="primary"
                        >
                            Customize
                        </Typography>
                        <Icon
                            color={theme.palette.primary.main}
                            icon="line-md:arrow-right"
                            height="24px"
                            width="24px"
                        />
                        <Typography
                            variant="h1"
                            fontSize={24}
                            color="primary"
                        >
                            Order
                        </Typography>
                        <Icon
                            color={theme.palette.primary.main}
                            icon="line-md:arrow-right"
                            height="24px"
                            width="24px"
                        />
                        <Typography
                            variant="h1"
                            fontSize={24}
                            color="primary"
                        >
                            Pay
                        </Typography>
                        <Icon
                            color={theme.palette.primary.main}
                            icon="line-md:arrow-right"
                            height="24px"
                            width="24px"
                        />
                        <Typography
                            variant="h1"
                            fontSize={24}
                            color="primary"
                        >
                            Track
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        width="100%"
                        padding="1rem"
                        //center
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                        >
                            Jelajahi
                        </Button>
                    </Box>
                </Box>
                <Box
                    order={{
                        xs: -1,
                        md: 2
                    }}
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        minHeight: { xs: "200px", sm: "350px" }, // Ensures box has height
                    }}
                >
                    <Image
                        src="/assets/images/index/kenalin-dashboard.png"
                        fill
                        style={{ objectFit: "contain" }}
                        alt="dashboard-intro"
                        sizes="(max-width: 900px) 100vw, 50vw"
                        
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default KenalinDashboard;
