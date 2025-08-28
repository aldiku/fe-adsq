import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import parse from "html-react-parser";
import { useState } from "react";
import Swal from "sweetalert2";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { createStyles, makeStyles } from "@mui/styles";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import ProductCardWithModal from "@/components/front/shared/ProductCards";

const paketWhatsapp = products.filter(p => p.type === "whatsapp-blast");

const useStyles = makeStyles((theme) =>
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

    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }),
);

const PaketWaBlast = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);
  const router = useRouter()

  const handleExpandClick = (id: string) => {
    setExpanded(expanded === id ? false : id);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    path: string,
  ) => {
    event.stopPropagation();
    if (path !== "#") {
      const url = `${path}`;
      router.push(url);

      // router.push({
      //   pathname: process.env.NEXT_PUBLIC_BACK_OFFICE_URL + path,
      // });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Coming Soon",
        confirmButtonColor: "#ea5455",
      });
    }
  };


  return (
    <>
      <Box
        sx={{ py:"2rem", width: "100%", backgroundColor: "background.default" }}
      >
        <Box
          paddingX={{ xs: "1rem", sm: "2rem", md: "4rem", xl: "8rem" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box data-aos="fade-down">
            <Typography
              variant="h1"
              sx={{
                // fontWeight: 700,
                color: "text.main",
                fontSize: { xs: "24px", md: "36px", lg: "44px" },
                textAlign: "center",
              }}
            >
              Paket Whatsapp Blast Tertarget
            </Typography>
          </Box>
          <Grid
            sx={{
              display: "grid",
              // gridTemplateColumns: "repeat(4, 250px)",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              width: "100%",
              justifyContent: "center",
              gridGap: "20px",
              alignItems: "center",
              // mt: 0,
              // mb: "2rem",
              // "@media(width < 700px)": {
              //   gridTemplateColumns: "repeat(auto-fit, 250px)",
              // },
            }}
          >
            {paketWhatsapp.map((item, index) => (
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
        </Box>
      </Box>
    </>
  );
};

export default PaketWaBlast;