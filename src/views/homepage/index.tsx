import LangkahPasangIklan from "./langkah-pasang-iklan";
import AdsqooDesc from "./adsqoo-desc";
import AlasanBeriklan from "./alasan-beriklan";
import LayananAdsqoo from "./layanan-adsqoo";
import OurClients from "./our-clients";
import Testimoni from "./testimoni";
import TelahDiliput from "./telah-diliput";
import BannerIklan from "./banner-iklan";
import { Grid } from "@mui/material";
import HeroSectionLandingPageViews from "./hero-homepage";

const HomePage = () => {
  return (
    <>
      <Grid 
        sx={{ 
          width: "100%",
          overflow: "hidden",
          backgroundColor:"background.paper",
        }}
      >
        <Grid className="shadow-lg">
          <HeroSectionLandingPageViews />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 7, md: 10 } }}
          >
          <LangkahPasangIklan />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 15, md: 20 } }}
          >
          <AdsqooDesc />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 5, md: 0 } }}
        >
          <AlasanBeriklan />
        </Grid>

        <Grid>
          <LayananAdsqoo />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 15, md: 20 } }}
        >
          <OurClients />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 15, md: 20 } }}
        >
          <Testimoni />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 15 } }}
        >
          <TelahDiliput />
        </Grid>

        <Grid 
          // sx={{ my: { xs: 15 } }}
        >
          <BannerIklan />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
