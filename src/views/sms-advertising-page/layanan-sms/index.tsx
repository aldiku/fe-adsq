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
import { makeStyles , createStyles } from "@mui/styles";

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
                  fontSize: { xs: "24px", md: "28px", lg: "32px" },
                  textAlign: "center",
                }}
              >
                Layanan SMS Advertising
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
                {layananSms.map((item, index) => (
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
                          sx={{ letterSpacing: "-.3px" }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2, overflow: "hidden" }}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={"expanded"}
                          sx={{
                            width: "auto",
                            height: "125px",
                            aspectRatio: "1/1",
                            mb: 3,
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
                              mt: 3,
                              mb: 1,
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
                {layananSms.map((item, index) => (
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
                        paddingY: 2,
                        paddingX: { xs: 1, md: 3 },
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
                          Syarat & Ketentuan
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
                          sx={{
                            "& > ol > li": {
                              marginLeft: "15px !important",
                              paddingLeft: "5px !important",
                              marginTop: "8px",
                            },
                          }}
                        >
                          {parse(item?.terms_conditions ?? "")}
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

export default LayananSms;

const layananSms = [
  {
    name: "SMS LBA",
    image: "assets/images/landing-page/sms-ads/layanan-sms/lba.png",
    description:
      "SMS LBA (Location Based Advertising) adalah layanan pengiriman blast SMS di lokasi tertentu sesuai dengan kebutuhan pelanggan. Lokasi yang dapat dipilih misalnya mall, apartemen, perkantoran, sekolah/kampus dan jalan raya.",
    path: "/dashboards/campaign/sms-lba/",
    code: "SLB",
    terms_conditions: `
      <ol>
        <li>Order diterima setidaknya 3 hari kerja sebelum waktu pengiriman SMS</li>
        <li>Pengiklan akan memperoleh laporan dari operator maksimal 5 HK setelah iklan berakhir</li>
        <li>Laporan hanya berisi berapa jumlah SMS yang berhasil dikirimkan</li>
        <li>Lokasi Pengiriman Seluruh Indonesia sesuai google map</li>
        <li>Minimal order setiap lokasi adalah 2.000 SMS</li>
        <li>Sender ID maksimal 11 Karakter & Isi pesan maksimal 160 Karakter</li>
        <li>Target dapat di profile seperti: Jenis Kelamin, Umur, Arpu & Agama</li>
        <li>Pengiklan tidak diperkenankan mengirim pesan SMS yang mencantumkan No HP selain No HP Telkomsel</li>
      </ol>
    `,
  },

  {
    name: "SMS Broadcast",
    image: "assets/images/landing-page/sms-ads/layanan-sms/broadcast.png",
    description:
      "SMS broadcast atau SMS blast memungkinkan Anda untuk mengirimkan SMS secara masif kepada pelanggan-pelanggan bisnis Anda secara instan. <strong>Tersedia SMS API bagi Anda yang ingin mengirimkan SMS promosi hingga SMS notif kepada client Anda.</strong>",
    path: "/dashboards/campaign/sms-broadcast/",
    code: "SBC",
    terms_conditions: `
      <ol>
        <li>Scan KTP Penanggung Jawab</li>
        <li>NPWP</li>
        <li>Form Sender ID</li>
        <li>Dokumen Penunjukkan Provider</li>
        <li>Dokumen Surat Penunjukan Telkomsel</li>
        <li>Dokumen Surat Penunjukan Indosat</li>
        <li>Dokumen Surat Penunjukan XL</li>
        <li>Form Member</li>
        <li>Surat Pernyataan Kepemilikan Merk</li>
      </ol>
    `,
  },

  {
    name: "SMS OTP",
    image: "assets/images/landing-page/sms-ads/layanan-sms/otp.png",
    description:
      "SMS OTP adalah layanan pengiriman OTP (One Time Password) yang berisi pesan singkat berupa digit nomer yang dibuat otomatis satu kali menggunakan media SMS.",
    path: "/dashboards/campaign/sms-broadcast/",
    terms_conditions: `
      <ol>
        <li>Scan KTP Penanggung Jawab</li>
        <li>NPWP</li>
        <li>Form Sender ID</li>
        <li>Dokumen Penunjukkan Provider</li>
        <li>Dokumen Surat Penunjukan Telkomsel</li>
        <li>Dokumen Surat Penunjukan Indosat</li>
        <li>Dokumen Surat Penunjukan XL</li>
        <li>Form Member</li>
        <li>Surat Pernyataan Kepemilikan Merk</li>
      </ol>
    `,
  },

  {
    name: "SMS Targeted",
    image: "assets/images/landing-page/sms-ads/layanan-sms/targeted.png",
    description:
      "SMS Tertarget adalah layanan pengiriman SMS yang ditujukan kepada pelanggan telepon seluler yang aktif dan dengan target tertentu sesuai kriteria Anda antara lain jenis kelamin, lokasi, jenis HP dan ARPU (pemakaian bulanan pulsa pelanggan).",
    path: "/dashboards/campaign/sms-targeted/",
    terms_conditions: `
      <ol>
        <li>Order diterima setidaknya 3 hari kerja sebelum waktu pengiriman SMS</li>
        <li>Pengiklan akan memperoleh laporan dari operator maksimal 5 HK setelah iklan berakhir</li>
        <li>Laporan hanya berisi berapa jumlah SMS yang berhasil dikirimkan</li>
        <li>Lokasi Pengiriman Seluruh Indonesia sesuai google map</li>
        <li>Minimal order setiap lokasi adalah 2.000 SMS</li>
        <li>Sender ID maksimal 11 Karakter & Isi pesan maksimal 160 Karakter</li>
        <li>Target dapat di profile seperti: Jenis Kelamin, Umur, Arpu & Agama</li>
      </ol>
    `,
  },
];
