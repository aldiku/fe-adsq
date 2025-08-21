import { Button, Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import {useRouter} from "next/navigation";

const WaBlastDesc = () => {

  const router = useRouter();
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(187,189,191, .17)", pt: 10 }}>
        <Container>
          <Typography
            data-aos="fade-up"
            sx={{
              fontWeight: 700,
              color: "#6D6E70",
              fontSize: { xs: "24px", md: "36px", lg: "44px" },
              textAlign: "start",
              letterSpacing: "-.5px",
            }}
          >
            Whatsapp Blast Targeted Bikin Anda Untung
          </Typography>
          <Grid
            data-aos="fade-up"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              // paddingX: 5,
              "@media(900px <= width< 1100px)": {
                gridTemplateColumns: "1fr",
                paddingX: 10,
              },
              "@media(600px <= width < 900px)": {
                paddingX: 10,
              },
              "@media(460px <= width < 600px)": {
                paddingX: 5,
              },
              "@media(width < 460px)": {
                paddingX: 0,
              },
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                paddingX: 4,
                paddingY: 3,
                marginY: 1,
                display: "flex",
                gap: 3,
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                height: "fit-content",
                "@media(width< 1100px)": {
                  paddingX: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "22px" },
                  fontWeight: 300,
                  color: "#6D6E70",
                  letterSpacing: "-.3px",
                  marginLeft: -4,
                  "@media(width< 1100px)": {
                    textAlign: "justify",
                  },
                }}
              >
                Bangun awareness, meningkatkan jumlah pengunjung website, social
                media dan toko online, mengingkatkan jumlah lead hingga
                transaksi dengan mengirim pesan secara langsung ke nomer
                Whatsapp yang tertarget.
              </Typography>
              <ul
                style={{
                  marginLeft:"20px",
                  listStyleImage:
                    "url('/assets/images/landing-page/whatsapp-business/whatsapp-desc/check.svg')",
                }}
              >
                {fiturKhusus.map((fitur, index) => (
                  <li key={index}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "16px",
                          md: "18px",
                          lg: "22px",
                        },
                        fontWeight: 300,
                        color: "#6D6E70",
                        letterSpacing: "-.3px",
                        marginY: 2,
                      }}
                    >
                      {fitur}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Link href={"/konsultasi"}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    color: "white",
                    fontSize: "12px",
                    paddingX: 3,
                    fontWeight: 400,
                    letterSpacing: "-.3px",

                    "@media(width > 1700px)": {
                      fontSize: "20px",
                    },
                    "@media(1500px <= width < 1700px)": {
                      fontSize: "20px",
                    },
                    "@media(1100px <=width < 1500px)": {
                      fontSize: "18px",
                    },
                    "@media(width < 1100px)": {
                      fontSize: "16px",
                    },
                    "@media (width < 900px)": {
                      textAlign: "center",
                    },
                  }}
                  onClick={() => router.push("/konsultasi")}
                >
                  Konsultasi Gratis Sekarang
                </Button>
              </Link>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "grid",
                float: "right",
                alignSelf: "end",
                justifyContent: { xs: "center", md: "start" },
                "@media(width < 1100px)": {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                component="img"
                src="/assets/images/landing-page/whatsapp-targeted/wa-targeted-content.png"
                alt="sms-desc"
                sx={{
                  height: "700px",
                  marginLeft: "-100px",
                  zIndex: "1",
                  position: "relative",
                  "@media(1100px <= width < 1300px)": {
                    maxHeight: "600px",
                    marginLeft: "0",
                  },
                  "@media(900px <= width < 1100px)": {
                    maxHeight: "500px",
                    marginLeft: "0",
                  },
                  "@media(width < 900px)": {
                    height: "auto",
                    width: "100%",
                    maxHeight: "450px",
                    marginLeft: "0",
                  },
                }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WaBlastDesc;

const fiturKhusus = [
  "Pengiriman menggunakan masking yang centang hijau",
  "Nomer WA tujuan kami sediakan",
  "Target terprofil berdasarkan demografi, interest, tipe device dll",
  "Menggunakan multi user dan menyesuaikan jam kerja",
  "Disediakan report campaign",
];
