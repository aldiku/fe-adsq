// import paketWhatsapp from "@/views/whatsapp-business-page/paket-whatsapp";
import { Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { theme } from "@/theme/AppThemes";

const paketWhatsapp = products.filter((product) => product.type === "whatsapp-blast");

const WaBlastDesc = () => {

  const router = useRouter();
  return (
    <Box
      paddingX={{
        xs: "1rem",
        sm: "2rem",
        md: "4rem",
        xl: "8rem"
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
        gap: "2rem",
        py: "3rem",
      }}
    >
      {/* <Container> */}
      <Typography
        data-aos="fade-up"
        variant="h1"
        sx={{ textAlign: "center", }}
      >
        Whatsapp Blast Targeted Bikin Anda Untung
      </Typography>

      <Grid
        data-aos="fade-up"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          // gridGap: "2rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              padding: "1.5rem",
              gap: "1rem",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 3,
              border: theme => theme.palette.divider,
              boxShadow: theme => theme.shadows[1],
              // height: "fit-content",
              // "@media(width< 1100px)": {
              //   paddingX: 0,
              // },
            }}
          >
            <Typography
              variant="body1"
              sx={{
              }}
            >
              Bangun awareness, meningkatkan jumlah pengunjung website, social
              media dan toko online, mengingkatkan jumlah lead hingga
              transaksi dengan mengirim pesan secara langsung ke nomer
              Whatsapp yang tertarget.
            </Typography>
            <ul
              style={{
                marginLeft: "20px",
                listStyleImage:
                  "url('/assets/images/landing-page/whatsapp-business/whatsapp-desc/check.svg')",
              }}
            >
              {fiturKhusus.map((fitur, index) => (
                <li key={index}>
                  <Typography
                    variant="body1"
                    sx={{
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
                  borderRadius: theme => theme.shape.pill,
                  // color: "white",
                  // fontSize: "12px",
                  // paddingX: 3,
                  // fontWeight: 400,
                  // letterSpacing: "-.3px",

                  // "@media(width > 1700px)": {
                  //   fontSize: "20px",
                  // },
                  // "@media(1500px <= width < 1700px)": {
                  //   fontSize: "20px",
                  // },
                  // "@media(1100px <=width < 1500px)": {
                  //   fontSize: "18px",
                  // },
                  // "@media(width < 1100px)": {
                  //   fontSize: "16px",
                  // },
                  // "@media (width < 900px)": {
                  //   textAlign: "center",
                  // },
                }}
                onClick={() => router.push("/konsultasi")}
              >
                Konsultasi Gratis Sekarang
              </Button>
            </Link>
          </Box>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: '1fr 1fr',
                sm: '1fr 1fr',
                // md: '1fr 1fr 1fr 1fr',
                // lg: '1fr 1fr 1fr 1fr'
              },
              // px: "4rem",
              width: "100%",
              justifyContent: "center",
              gridGap: "1rem",
              alignItems: "stretch",
              // mt: 0,
              // mb: 2,
              // "@media(width < 700px)": {
              //   gridTemplateColumns: "1fr",
              // },
            }}
          >
            {paketWhatsapp.map((item, index) => (
              <Card
                key={index}
                sx={{
                  // backgroundColor: "background.paper",
                  backgroundColor: "white",
                  boxShadow: theme => theme.shadows[1],
                }}
              >
                <CardContent
                  //gap 1rem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                    width: "100%",
                    gap: "1rem",
                  }}
                >

                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "125px",
                      // aspectRatio: "1/1",
                      objectFit: "contain",
                      borderRadius: 2,
                      // mb: 3,
                      // p: (theme) => ({
                      //   xs: 1,
                      //   sm: 2,
                      // }),
                      boxSizing: "border-box",
                      // Add extra padding if not 1:1 aspect ratio
                      aspectRatio: "1 / 1",
                      ...(item.image && {
                        padding: "12px",
                      }),
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontSize={16}
                    textAlign={'center'}
                    lineHeight={1.2}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Box>


        <Box
          sx={{
            width: "100%",
            display: "grid",
            float: "right",
            alignSelf: "end",
            justifyContent: { xs: "center", md: "start" },
            // "@media(width < 1100px)": {
            //   justifyContent: "center",
            // },
          }}
        >
          <Box
            component="img"
            src="/assets/images/landing-page/whatsapp-targeted/wa-targeted-content.png"
            alt="sms-desc"
            sx={{
              height: "500px",
              // marginLeft: "-100px",
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
                display: "none",
                // height: "auto",
                // width: "100%",
                // maxHeight: "450px",
                // marginLeft: "0",
              },
            }}
          />
        </Box>
      </Grid>
      {/* </Container> */}
    </Box>
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
