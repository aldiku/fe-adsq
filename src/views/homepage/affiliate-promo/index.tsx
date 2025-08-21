import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"


const AffiliatePromo = () => {
    return (
        <Box
            py="1rem"
            paddingX={{
                xs: "1rem",
                sm: "2rem",
                md: "4rem",
                xl: "8rem",
            }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
            }}
        >
            <Typography variant="h1">Tertarik menjadi Affiliate?</Typography>
            <Typography variant="body1">
                Gabung Sekarang dengan Adsqoo Affiliate Marketing dengan Berbagai Keuntungan Menanti Anda!
            </Typography>

            <Button variant="contained" color="primary">
                Gabung Sekarang
            </Button>
            {/* <Image
                src="/images/affiliate-promo.png"
                alt="Affiliate Promo"
                width={500}
                height={300}
            /> */}
        </Box>
    )
}

export default AffiliatePromo;
