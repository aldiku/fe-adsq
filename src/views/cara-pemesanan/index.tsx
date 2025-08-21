import { CardContent, Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";

const CaraPemesananList = (props: any) => {
  const { nama, items } = props;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "radial-gradient(circle, rgba(191,32,38,1) 0%, rgba(191,44,110,1) 55%, rgba(182,36,110,1) 100%)",
          minHeight: "400px",
          paddingY: 10,
        }}
      >
        <Container>
          <Box data-aos="fade-down">
            <Typography
              sx={{ color: "white", textAlign: "center", fontWeight: 600, fontSize: "31px", letterSpacing: "-.3px" }}
            >
              Cara Pemesanan {nama}
            </Typography>
          </Box>
          <Grid
            container
            spacing={1.5}
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              mt: 3,
              paddingX: 15,
              "@media(1000px <=width< 1150px)": { px: 10 },
              "@media(900px <=width <= 1000px)": { px: 0 },
              "@media(width < 900px)": { px: 0 },
            }}
          >
            {items.map((item: any, index: number) => (
              <Grid
                data-aos="fade-up"
                key={index}
                xs={15}
                md={12 / 5}
                item
                container
                sx={{ minHeight: "100% !important" }}
              >
                <Grid
                  direction="column"
                  container
                  item
                  sx={{
                    width: { xs: "90%", sm: "75%", md: "100%" },
                    margin: { xs: "auto", md: 0 },
                    height: "100% !important",
                  }}
                >
                  <Grid item sx={{ height: "inherit !important" }}>
                    <Card
                      sx={{
                        background: "white",
                        height: "inherit",
                        paddingY: { xs: "25px", md: "0" },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "start",
                            flexShrink: { md: "0" },
                            height: { xs: "fit-content", md: "auto" },
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.title}
                            sx={{
                              width: "auto",
                              height: { xs: "80px", md: "65px", lg: "85px" },
                            }}
                          />
                          <Typography
                            textAlign="center"
                            fontSize="14px"
                            color="#58595B"
                            fontWeight={400}
                            sx={{ letterSpacing: "-.3px", mt: 2 }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CaraPemesananList;
