import { Box, Typography } from "@mui/material";
import BlogGrid from "./blog-grid";


const BlogSection = () => {
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
            <Typography variant="h1" component="h2">
                Blog Terbaru
            </Typography>

            <BlogGrid />

        </Box>
    );
};

export default BlogSection;