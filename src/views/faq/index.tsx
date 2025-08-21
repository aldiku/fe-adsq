import { CollapseList } from "@/components/front/shared/CollapseList";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const FrequentlyAskedQuestions = (props: any) => {
  const { items, name } = props;

  return (
    <>
      <Container
        sx={{
          background: "",
          borderRadius: "15px 15px 0px 0px",
          paddingBottom: "5rem",
          textAlign: "left",
        }}
      >
        <Box
          sx={({ breakpoints }) => ({
            display: "flex",
            justifyContent: "center",
            marginBottom: 5,
            marginTop: 5,

            [breakpoints.up("md")]: {
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
              marginTop: 10,
            },
          })}
          data-aos="fade-down"
        >
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "auto 1fr",
              gridGap: "25px",
              "@media (width< 752px)": {
                gridTemplateColumns: "1fr",
                gridGap: "5px",
              },
            }}
          >
            <Box
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
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "28px", sm: "36px", md: "40px" },
                textAlign: "left",
                color: "#6D6E70",
                "@media (width < 752px)": {
                  textAlign: "center",
                },
              }}
            >
              Pertanyaan Umum Terkait Layanan <br /> <span style={{ color: "#FE3168" }}> {name}</span>
            </Typography>
          </Box>
        </Box>
        <Box>
          <CollapseList items={items} />
        </Box>
      </Container>
    </>
  );
};

export default FrequentlyAskedQuestions;
