"use client";

import { Box, Button, Card, Container, Grid, Typography, Divider } from "@mui/material";
import PaketGrid, { PaketGridProps } from "./PaketGrid";


const PaketLayanan = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                px: "4rem",
                py: "2rem",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 1,
                gap: "1rem",
            }}
        >
            <Typography variant="h1">
                Paket Layanan
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.    
            </Typography>

            <PaketGrid />
        </Box>
    );
};

export default PaketLayanan;