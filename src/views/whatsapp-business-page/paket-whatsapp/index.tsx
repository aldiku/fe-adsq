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
        sx={{ pt: 7, width: "100%", backgroundColor: "rgba(187,189,191, .17)" }}
      >
        <Container>
          <Grid>
            <Box data-aos="fade-down">
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#6D6E70",
                  fontSize: { xs: "24px", md: "36px", lg: "44px" },
                  textAlign: "center",
                }}
              >
                Paket Whatsapp Business Platform
              </Typography>
            </Box>

            <Grid
              data-aos="fade-up"
              sx={{
                mt: 5,
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
                  gridTemplateColumns: "repeat(4, 250px)",
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "20px",
                  alignItems: "stretch",
                  mt: 0,
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
                      width: "100%",
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      borderBottomLeftRadius: "0 !important",
                      borderBottomRightRadius: "0 !important",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <Box sx={{ paddingX: 3 }}>
                        <Typography
                          fontWeight={700}
                          color="#58595B"
                          textAlign="center"
                          marginTop={2}
                          marginBottom={1}
                          fontSize="20px"
                          sx={{ letterSpacing: "-.3px", minHeight: "60px" }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 3, overflow: "hidden" }}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={"expanded"}
                          sx={{
                            width: "auto",
                            height: "125px",
                            aspectRatio: "1/1",
                            mb: 1,
                          }}
                        />
                      </Box>

                      <Box sx={{ px: 3, mb: 1 }}>
                        {parse(item?.description ?? "")}
                      </Box>

                      <Box
                        sx={{
                          mt: "auto",
                          mb: 2,
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Link href={item.path}>
                          <Button
                            sx={{
                              paddingY: 0.5,
                              paddingX: 5,
                              color: "white",
                              fontSize: "16px",
                              background:
                                "radial-gradient(circle, rgba(251,55,66,1) 0%, rgba(217,61,131,1) 48%, rgba(193,36,116,1) 100%)",
                              "&:hover": {
                                background:
                                  "radial-gradient(circle, rgba(191,31,41,1) 0%, rgba(203,51,119,1) 74%, rgba(166,41,104,1) 100%)",
                              },
                            }}
                            onClick={(event) => handleClick(event, item.path)}
                          >
                            Order
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Grid>

              {/* collapse list */}
              <Grid
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
              </Grid>
              {/* collapse list end */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaketWhatsapp;

const paketWhatsapp = [
  {
    name: "Whatsapp Service + Chatbot",
    image:
      "assets/images/landing-page/whatsapp-business/paket-whatsapp/service.png",
    path: "/campaign/whatsapp-business",
    code: "WAB",
    description:
      "<p>WhatsApp Service (Interaktif CS) digunakan untuk mengirimkan pesan dan merespon pesan yang masuk dari pelanggan Anda secara real time yang dilengkapi dengan fitur Chatbot. WhatsApp interaktif sebagai media komunikasi antara CS dan pelanggan Anda menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi</p>",
    feature: `<ul>
              <li>Free setup</li>
              <li>Include monthly fee untuk 3 bulan pertama (Rp 1.000.000/bulan)</li>
              <li>Include Chatbot max 5 FAQ ( FAQ &gt; 5, monthly fee Rp 1.500.000/bulan)</li>
              <li>Include 2 CS/agent (penambahan agent Rp250.000/agent)</li>
              <li>Pembuatan ID pengirim</li>
              <li>Dashboard untuk operasional</li>
              <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanya berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>
      `,
  },

  {
    name: "Whatsapp Authentication",
    image:
      "assets/images/landing-page/whatsapp-business/paket-whatsapp/auth.png",
    path: "/campaign/whatsapp-business",
    code: "WAB",
    description: `
                  <p>WhatsApp Authentication digunakan untuk mengirimkan pesan OTP (One Time Password) kepada pelanggan Anda untuk berbagai keperluan seperti mendaftar layanan atau aplikasi menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi</p>
                  `,
    feature: `
              <ul>
              <li>Free setup</li>
              <li>Free monthly fee</li>
              <li>Pembuatan ID pengirim</li>
              <li>Dashboard untuk operasional</li>
              <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
              <li>Hanya berlaku untuk perusahaan</li>
              <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
              <li>Harus memiliki NPWP, Website dan Email</li>
              <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
              <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
            </ul>
    `,
  },
  {
    name: "Whatsapp Utility",
    image:
      "assets/images/landing-page/whatsapp-business/paket-whatsapp/utility.png",
    path: "/campaign/whatsapp-business",
    code: "WAB",
    description: `<p>WhatsApp Utility (Push Notifikasi) digunakan untuk mengirimkan pesan notifikasi kepada pelanggan Anda yang telah melakukan transaksi, reminder invoice dan notifikasi lainya secara real time kepada pelanggan Anda secara massal menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi</p>`,
    feature: `<ul>
                <li>Free setup</li>
                <li>Free monthly fee</li>
                <li>Pembuatan ID pengirim</li>
                <li>Dashboard untuk operasional</li>
                <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanyua berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>`,
  },
  {
    name: "Whatsapp Marketing",
    image:
      "assets/images/landing-page/whatsapp-business/paket-whatsapp/marketing.png",
    path: "/campaign/whatsapp-business",
    code: "WAB",
    description: `<p>WhatsApp marketing (WA Blast) digunakan untuk mengirim pesan WA kepada pelanggan Anda secara massal menggunakan SenderID (pengirim) atas nama bisnis Anda yang telah terverifikasi</p>`,
    feature: `<ul>
                <li>Free setup</li>
                <li>Free monthly fee</li>
                <li>Pembuatan ID pengirim</li>
                <li>Dashboard untuk operasional</li>
                <li>Berisi 10.000 session dengan masa aktif 3 bulan</li>
              </ul>

              <p>Note:</p>

              <ul>
                <li>Hanya berlaku untuk perusahaan</li>
                <li>Harus memiliki Business Manager ID veriﬁed Facebook Business</li>
                <li>Harus memiliki NPWP, Website dan Email</li>
                <li>Cara pembuatan Business Manager ID&nbsp;:&nbsp;<a href="https://bit.ly/3JSJKNo">https://bit.ly/3JSJKNo</a></li>
                <li>NO Politics, NO 18+ Products, NO Racist/Discrimination Accounts</li>
              </ul>`,
  },
];
