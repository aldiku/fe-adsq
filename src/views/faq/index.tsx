import { CollapseList } from "@/components/front/shared/CollapseList";
import { theme } from "@/theme/AppThemes";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";

const FrequentlyAskedQuestions = (props: any) => {
  const { items, name } = props;

  return (
    <Box
      paddingX={{
				xs: "1rem",
				sm: "2rem",
				md: "4rem",
				xl: "8rem",
			}}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "2rem", md: "4rem" },
      }}
    >
      <Box
        sx={{
          // background: "",
          // borderRadius: "15px 15px 0px 0px",
          // paddingBottom: "5rem",
          // textAlign: "left",
        }}
      >
        <Box
          sx={({ breakpoints }) => ({
            display: "flex",
            justifyContent: "center",
            // marginBottom: 5,
            // marginTop: 5,

            [breakpoints.up("md")]: {
              display: "flex",
              justifyContent: "center",
              // marginBottom: 5,
              // marginTop: 10,
            },
          })}
          data-aos="fade-down"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              gap: "1rem",
              // display: "grid",
              // alignItems: "center",
              // gridTemplateColumns: "auto 1fr",
              // gridGap: "25px",
              // "@media (width< 752px)": {
              //   gridTemplateColumns: "1fr",
              //   gridGap: "5px",
              // },
            }}
          >
            {/* <Box
              component="img"
              src="/assets/images/landing-page/faq/asset-faq.png"
              sx={{
                height: "250px",
                "@media (500px <= width< 752px)": {
                  gridTemplateColumns: "1fr",
                  height: "200px",
                  width: "auto",
                  mx: "auto",
                },
                "@media (width < 500px)": {
                  gridTemplateColumns: "1fr",
                  height: "125px",
                  width: "auto",
                  mx: "auto",
                },
              }}
            /> */}
            <Typography
              variant="h1"
              sx={{
                // fontWeight: 600,
                // fontSize: { xs: "28px", sm: "36px", md: "40px" },
                textAlign: "left",
                // color: "#6D6E70",
                // "@media (width < 752px)": {
                //   textAlign: "center",
                // },
              }}
            >
              Pertanyaan Umum Terkait Layanan <br /> <span style={{ color: theme.palette.primary.main }}> {name}</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary"}} maxWidth={450}>
              Perlu bantuan lebih lanjut?  <br /> Silahkan hubungi kami dengan mengisi dengan dukungan team ahli kami akan menjawab semua pertanyaan Anda.
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: theme.shape.pill }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
        <Box mb={4}>
          <CollapseList items={items} />
        </Box>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
