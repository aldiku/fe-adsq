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
        sx={{ pt: 10, width: "100%", backgroundColor: "rgba(187,189,191, .17)" }}
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
                Paket Whatsapp Blast Tertarget
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
                  gridTemplateColumns: "repeat(2, 300px)",
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "50px",
                  alignItems: "stretch",
                  mt: 0,
                  "@media(width < 700px)": {
                    gridTemplateColumns: "repeat(auto-fit, 250px)",
                  },
                }}
              >
                {paketWhatsapp?.map((item, index) => {

                  return (
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
                            src={"/"+item.image}
                            alt={"expanded"}
                            sx={{
                              width: "auto",
                              height: "125px",
                              aspectRatio: "1/1",
                              mb: 1,
                            }}
                          />
                        </Box>

                        <Box sx={{ px: 3, mb: 1, textAlign: "center", marginY: 3 }}>
                          <span style={{ fontWeight: 400 }}>{parse(item?.description ?? "")}</span>
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
                          <Button
                            sx={{
                              paddingY: 2,
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
                        </Box>
                      </Box>
                    </Card>
                  )
                })}
              </Grid>

              {/* collapse list */}
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 300px)",
                  width: "100%",
                  justifyContent: "center",
                  gridGap: "50px",
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
                          Syarat Ketentuan:
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
                      <CardContent sx={{ px: 2 }}>
                        <Box
                          sx={{ "& > ul": { paddingLeft: "15px !important" } }}
                        >
                          <List>
                            {item.feature?.map((featureItem, featureIndex) => (
                              <ListItem
                                key={featureIndex}
                                disableGutters
                                sx={{ padding: '0px', marginBottom: '2px' }}
                              >
                                <ListItemIcon
                                  sx={{
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    minWidth: 0,
                                    marginRight: 1,
                                    fontSize: '10px',
                                  }}
                                >
                                  <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{ sx: { fontWeight: 400 } }} primary={`${featureItem}`} />
                              </ListItem>
                            ))}
                          </List>
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

export default PaketWaBlast;

const paketWhatsapp = [
  {
    name: "Whatsapp Blast Tertarget 2000 Pesan",
    image: "assets/images/landing-page/whatsapp-targeted/icon-paket.png",
    path: "/campaign/whatsapp-blast/create?message=2000",
    code: "WAB",
    description: "<p>WhatsApp Blast Tertarget adalah layanan kirim pesan WA ke nomer penerima yang sudah terprofil mulai dari lokasi, demografi hingga interest calon penerima. Gunakan layanan ini untuk menjangkau lebih banyak audience, meningkatkan awareness produk dan meningkatkan transaksi</p>",
    feature: [
      "Key Visual: Maximum 2MB",
      "Message: Direkomendasikan jumlahnya 200-450 karakter agar tidak perlu klik 'read more'",
      "Jika terdapat link, bisa dimasking menggunakan link IOH berikut sda-ida.ioh.id/lnk/xxxxx (jumlah karakter 26)",
      "Link/CTA Button: terbatas 25 karakter",
      "Materi iklan H - 5",
      "Report iklan H + 7"
    ],
  },
  {
    name: "Whatsapp Blast Tertarget 5000 Pesan",
    image: "assets/images/landing-page/whatsapp-targeted/icon-paket.png",
    path: "/campaign/whatsapp-blast/create?message=5000",
    code: "WAB",
    description: "<p>WhatsApp Blast Tertarget adalah layanan kirim pesan WA ke nomer penerima yang sudah terprofil mulai dari lokasi, demografi hingga interest calon penerima. Gunakan layanan ini untuk menjangkau lebih banyak audience, meningkatkan awareness produk dan meningkatkan transaksi</p>",
    feature: [
      "Key Visual: Maximum 2MB",
      "Message: Direkomendasikan jumlahnya 200-450 karakter agar tidak perlu klik 'read more'",
      "Jika terdapat link, bisa dimasking menggunakan link IOH berikut sda-ida.ioh.id/lnk/xxxxx (jumlah karakter 26)",
      "Link/CTA Button: terbatas 25 karakter",
      "Materi iklan H - 5",
      "Report iklan H + 7"
    ],
  },
];