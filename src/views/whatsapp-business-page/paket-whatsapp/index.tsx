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

import { makeStyles, createStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Link from "next/link";
import ProductCardWithModal from "@/components/front/shared/ProductCards";
import { products } from "@/data/products";

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

const paketWhatsapp = products.filter(p => p.type === "whatsapp-business");

const PaketWhatsapp = () => {
  const classes = useStyles();
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
      const url = `${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}${path}`;
      window.open(url, "_blank");

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
        id="paket-whatsapp"
        paddingX= {{ xs: "1rem", sm: "2rem", md: "4rem", xl: "8rem" }}
        sx={{ 
          pt: "2.5rem", 
          width: "100%", 
          backgroundColor: "background.default"
        }}
      >
        <Box
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
                  // color: "#6D6E70",
                  // fontSize: { xs: "24px", md: "36px", lg: "44px" },
                  textAlign: "center",
                }}
              >
                Paket Whatsapp Business Platform
              </Typography>
            </Box>

            <Grid
              data-aos="fade-up"
              sx={{
                // mt: 5,
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
                  // gridTemplateColumns: "repeat(4, 250px)",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr",
                  },
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "20px",
                  alignItems: "stretch",
                  mt: 0,
                  mb: "2rem",
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

              {/* collapse list */}
              {/* <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 250px)",
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "20px",
                  alignItems: "stretch",
                  mt: 0,
                  mb: 7,
                  "@media(width < 700px)": {
                    gridTemplateColumns: "repeat(auto-fit, 250px)",
                  },
                }}
              >
                {paketWhatsapp.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      background: "white",
                      textAlign: "left",
                      border: "1px solid rgb(223,223,223)",
                      borderTopRightRadius: "0 !important",
                      borderTopLeftRadius: "0 !important",
                    }}
                  >
                    <CardHeader
                      sx={{
                        cursor: "pointer",
                        paddingY: 1,
                        paddingX: { xs: 1, md: 3 },
                        minHeight: "64px",
                        alignItems: "center",
                        borderBottom: "1px solid rgb(223,223,223)",
                        backgroundColor: "#ffe5e7",
                      }}
                      onClick={() => handleExpandClick("expanded")}
                      title={
                        <Box
                          sx={{
                            fontSize: { xs: "12px", md: "14px" },
                            fontWeight: 600,
                          }}
                        >
                          Anda Akan Mendapatkan
                        </Box>
                      }
                      action={
                        <IconButton
                          className={`${classes.expand} ${expanded === "expanded" ? classes.expandOpen : ""}`}
                          onClick={() => handleExpandClick("expanded")}
                          aria-expanded={expanded === "expanded"}
                          aria-label="show more"
                        >
                          <ExpandMoreOutlinedIcon />
                        </IconButton>
                      }
                    />
                    <Collapse
                      in={expanded === "expanded"}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent sx={{ px: 3 }}>
                        <Box
                          sx={{ "& > ul": { paddingLeft: "15px !important" } }}
                        >
                          {parse(item?.feature ?? "")}
                        </Box>
                      </CardContent>
                    </Collapse>
                  </Card>
                ))}
              </Grid> */}
              {/* collapse list end */}
            </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PaketWhatsapp;