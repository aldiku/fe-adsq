import React, { useState } from "react";
import {
    Card,
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CardContent,
} from "@mui/material";
import Link from "next/link";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { theme } from "@/theme/AppThemes";

export interface ProductCardProps {
    name: string;
    image: string;
    description: string;
    path: string;
    terms_conditions: string;
}

const ProductCardWithModal: React.FC<ProductCardProps> = ({
    name,
    image,
    description,
    path,
    terms_conditions,
}) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);

    const handleClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        path: string,
    ) => {
        event.stopPropagation();
        if (path !== "#") {
            router.push(path);
        } else {
            Swal.fire({
                icon: "warning",
                title: "Coming Soon",
                confirmButtonColor: "#ea5455",
            });
        }
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Card
                sx={{
                    backgroundColor: "background.default",
                    width: "100%",
                    boxShadow: theme => theme.shadows[1],
                    // borderRadius: 2,
                    border: "1px solid",
                    borderColor: theme.palette.divider,
                }}
            >
                <CardContent sx={{ height: "100%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "100%",
                            gap: "1rem",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight={700}
                                textAlign="center"
                            >
                                {name}
                            </Typography>
                        </Box>
                        {image && ( 
                            <Box sx={{ overflow: "hidden" }}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt={name}
                                    sx={{
                                        maxWidth: "100%",
                                        maxHeight: "125px",
                                        objectFit: "contain",
                                        borderRadius: 2,
                                        mb: 3,
                                        p: (theme) => ({
                                            xs: 1,
                                            sm: 2,
                                        }),
                                        boxSizing: "border-box",
                                        // // Add extra padding if not 1:1 aspect ratio
                                        // aspectRatio: "1 / 1",
                                        // ...(image && {
                                        //     padding: "12px",
                                        // }),
                                    }}
                                />
                            </Box>
                        )}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1" color="text.secondary">
                                {parse(description ?? "")}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: "auto",
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 1,
                            }}
                        >
                            <Button
                                variant="text"
                                onClick={handleOpenModal}
                                sx={{ lineHeight: 1.1 }}
                            >
                                Syarat & Ketentuan
                            </Button>
                            <Link href={path}>
                                <Button
                                    variant="contained"
                                    onClick={(event) => handleClick(event, path)}
                                >
                                    Order
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </CardContent>
           </Card>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Syarat & Ketentuan</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        "& > ol > li, & > ul > li": {
                            marginLeft: "15px !important",
                            paddingLeft: "5px !important",
                            marginTop: "8px",
                        },
                    }}>
                        {parse(terms_conditions ?? "")}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleCloseModal} color="primary">
                        Tutup
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ProductCardWithModal;