import { Grid, Typography } from "@mui/material";
import Hero from "./hero";
import WhatsappDesc from "./whatsapp-desc";
import AlasanWhatsapp from "./alasan-whatsapp";
import CaraPemesanan from "./cara-pemesanan";
import PaketWhatsapp from "./paket-whatsapp";
import VideoTutorial from "../video-tutorial";
import FaqList from "./faq-list";

const WhatsappBusinessPage = () => {
  return (
    <>
      <Grid sx={{ width: "100%", overflow: "hidden" }}>
        <Grid>
          <Hero />
        </Grid>

        <Grid>
          <WhatsappDesc />
        </Grid>

        <Grid >
          <AlasanWhatsapp />
        </Grid>

        <Grid >
          <CaraPemesanan />
        </Grid>

        <Grid >
          <PaketWhatsapp />
        </Grid>

        <Grid sx={{ my: "3rem" }}>
          <Typography
            data-aos="fade-up"
            variant="h1"
            sx={{
              // fontSize: { xs: "32px", md: "40px" },
              // fontWeight: 600,
              // color: "#6D6E70",
              // letterSpacing: "-1px",
              textAlign: "center",
            }}
          >
            Video Tutorial Whatsapp Business Platform
          </Typography>
          <VideoTutorial url="https://www.youtube.com/watch?v=Rzh-gz2OiWg" />
        </Grid>

        <Grid sx={{ my: { xs: 5, md: 10 } }}>
          <FaqList />
        </Grid>
      </Grid>
    </>
  );
};

export default WhatsappBusinessPage;
