import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import parse from "html-react-parser";

import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { makeStyles, createStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ProductCardWithModal from "@/components/front/shared/ProductCards";
import { products } from "@/data/products"; // <-- import global product data

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      maxWidth: 500,
      margin: "auto",
      color: "white",
    },
    header: {
      backgroundColor: "white",
      color: "white",
    },
    content: {
      paddingTop: 0,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }),
);

const LayananSms = () => {
  const router = useRouter();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<{ open: boolean; index: number | null }>({ open: false, index: null });
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandClick = (id: string) => {
    setExpanded(expanded === id ? false : id);
  };

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

  const handleOpenModal = (idx: number) => setOpenModal({ open: true, index: idx });
  const handleCloseModal = () => setOpenModal({ open: false, index: null });

  // Filter products for SMS type only
  const layananSms = products.filter(p => p.type === "sms");

  return (
    <Box
      id="layanan-sms"
      paddingX={{
        xs: "1rem",
        sm: "2rem",
        md: "4rem",
        xl: "8rem",
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingY: "2rem",
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Box data-aos="fade-down">
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Layanan SMS Advertising
        </Typography>
      </Box>

      <Grid
        data-aos="fade-up"
        sx={{
          display: "grid",
          alignItems: "normal",
          "@media(width < 1100px)": {
            justifyContent: "center",
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr 1fr'
            },
            width: "100%",
            justifyContent: "center",
            gridGap: "1rem",
            alignItems: "stretch",
          }}
        >
          {layananSms.map((item, index) => (
            <ProductCardWithModal
              key={index}
              name={item.name}
              image={item.image}
              description={item.description}
              path={item.path}
              terms_conditions={item.details}
            />
          ))}
        </Grid>

        {/* Modal for terms & conditions */}
        <Dialog
          open={openModal.open && openModal.index !== null}
          onClose={handleCloseModal}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Syarat & Ketentuan</DialogTitle>
          <DialogContent>
            {openModal.index !== null &&
              <Box sx={{
                "& > ol > li": {
                  marginLeft: "15px !important",
                  paddingLeft: "5px !important",
                  marginTop: "8px",
                },
              }}>
                {parse(layananSms[openModal.index].details ?? "")}
              </Box>
            }
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseModal} color="primary">
              Tutup
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default LayananSms;