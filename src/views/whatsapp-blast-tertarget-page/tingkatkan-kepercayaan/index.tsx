import { CardContent, Container, Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Typography } from "@mui/material";

const KepercayaanWaBlast = () => {
  return (
    <Box
      paddingX={{
        xs: "1rem",
        sm: "2rem",
        md: "4rem",
        xl: "8rem"
      }}
      sx={{ py: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
    >
      <Typography
        data-aos="fade-up"
        variant="h1"
        sx={{
          textAlign: "center",
        }}
      >
        Tingkatkan Kepercayaan dan Penjualan <br />
        Produk Dengan Whatsapp Blast Tertarget
      </Typography>

      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gridGap: "1rem",
          // maxBlockSize: "350px"
          // px: { xs: 0, md: "3rem" },
          // mt: 7,
          // mx: 15,
          // "@media(900px <= width< 1100px)": {
          //   gridTemplateColumns: "1fr",
          //   marginX: 10,
          // },
          // "@media(600px <= width < 900px)": {
          //   marginX: 10,
          // },
          // "@media(460px <= width < 600px)": {
          //   marginX: 5,
          // },
          // "@media(width < 460px)": {
          //   marginX: 0,
          // },
        }}
      >
        {listAlasan.map((item, index) => (
          <Card
            data-aos="fade-up"
            key={index}
            sx={{
              background: "background.paper",
              boxShadow: theme => theme.shadows[1],
              // mt: index === 0 ? 0 : 5,
              // paddingX: { xs: 3, md: 8 },
              padding: "1rem",
              borderRadius: "1.5rem",
            }}
          >
            <CardContent>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1.2,
                    maxWidth: {sm: "100", md: "85%"}
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    // color: "#6D6E70",
                    // fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "22px" },
                    // fontWeight: 300,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default KepercayaanWaBlast;

const listAlasan = [
  {
    title: "Jasa Wa Blast Dengan Audience Terproﬁle Ini Resmi dari Meta ",
    desc: "Pengiriman pesan aman dari pemblokiran. Nama pengirim (Sender masking) telah disediakan dan ditentukan. Nomer target juga kami yang sediakan. Anda cukup mengisi target audience seperti apa yang akan menerima pesan promosi produksi Anda. Menarik bukan?",
  },
  {
    title: "Kami Sediakan Target Audience dari Pengguna Telekomunikasi yang Sangat Segemented",
    desc: "Anda pilih sesuai dengan bisnis Anda. Berbagai pilihan audience terprofile tersebut antara lain: Lokasi, kategori, umur, tipe langganan, tipe device yang digunakan, lifestyle dan status banking/financer",
  },
];
