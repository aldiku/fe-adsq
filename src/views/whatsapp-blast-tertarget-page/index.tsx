import { Grid, Typography } from "@mui/material";
import HeroWaBlast from "./hero-wa-blast";
import WaBlastDesc from "./wa-blast-desc";
import KepercayaanWaBlast from "./tingkatkan-kepercayaan";
import CaraPemesananWaBlast from "./cara-pemesanan-wa-blast";
import PaketWaBlast from "./paket-whatsapp-blast";
import VideoTutorial from "../video-tutorial";
import FaqList from "./faq-list";

const WhatsappTargetedPage = () => {
  return (
    <>
      <Grid sx={{ width: "100%", overflow: "hidden" }}>
        <Grid>
          <HeroWaBlast />
        </Grid>

        <Grid >
          <WaBlastDesc />
        </Grid>

        <Grid 
          // sx={{ mt: { xs: 15, md: 20 } }}
        >
          <KepercayaanWaBlast />
        </Grid>

        <Grid 
          // sx={{ mt: { xs: 15, md: 20 } }}
        >
          <CaraPemesananWaBlast />
        </Grid>

        <Grid >
          <PaketWaBlast />
        </Grid>

        <Grid sx={{ my: { xs: 15, md: 20 } }}>
          <Typography
            data-aos="fade-in"
            variant="h1"
            sx={{
              textAlign: "center",
              // fontSize: { xs: "32px", md: "40px" },
              // fontWeight: 600,
              // color: "#6D6E70",
              // letterSpacing: "-1px",
            }}
          >
            Video Tutorial Whatsapp Blast Targeted
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

export default WhatsappTargetedPage;
