"use client";

import { Box, Button, Card, Container, Grid, Typography, Divider } from "@mui/material";
import PaketGrid, { PaketGridProps } from "./PaketGrid";


const PaketLayanan = () => {
    return (
        <Box
            paddingX={{
                xs: "1rem",
                sm: "2rem",
                md: "4rem",
                xl: "8rem",
            }}
            sx={{
                display: "flex",
                flexDirection: "column",
                // px: { xs: "2rem", md: "4rem" },
                py: "2rem",
                bgcolor: "background.paper",
                borderRadius: 2,
                gap: "1rem",
            }}
        >
            <Typography data-aos="fade-down" variant="h1">
                Paket Layanan
            </Typography>
            <Typography
                data-aos="fade-down"
                variant="body1"
                color="text.secondary"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <PaketGrid data-aos="fade-up" />
        </Box>
    );
};

export default PaketLayanan;