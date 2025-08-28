import { CardContent, Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";

const CaraPemesananList = (props: any) => {
  const { nama, items } = props;

  return (
    <Box
      sx={{ py: "2.5rem", width: "100%" }}
      paddingX={{
        xs: "1rem",
        sm: "2rem",
        md: "4rem",
        xl: "8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "2rem",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "2.5rem",
          background: "radial-gradient(147.47% 141.42% at 0% 0%, #762793 0%, rgba(118, 39, 147, 0.00) 100%), radial-gradient(100.2% 141.42% at 100% 100%, #ED821B 0%, rgba(237, 130, 27, 0.00) 100%), radial-gradient(184.9% 141.42% at 0% 100%, #EE3040 0%, rgba(238, 48, 64, 0.00) 100%), radial-gradient(244% 141.42% at 100% 0%, #AA4862 0%, rgba(170, 72, 98, 0.00) 100%)",
          gap: "2rem",
        }}
      >
          <Box data-aos="fade-down">
            <Typography
              variant="h1"
              sx={{
                color: "white",
                textAlign: "center",
                // fontWeight: 600, fontSize: "31px", letterSpacing: "-.3px" 
              }}
            >
              Cara Pemesanan {nama}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr 1fr 1fr'
              },
              gap: "1rem",
            }}
            data-aos="fade-up"
          >
            {items.map((item: any, index: number) => (
              <Box
                key={index}
                sx={{
                  boxShadow: theme => theme.shadows[1],
                  borderRadius: "2rem",
                  minWidth: 0, // prevents overflow
                }}
              >
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "100%",
                  background: "white",
                  borderRadius: "1rem",
                  gap: "2rem",
                }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: { xs: "0.5rem", md: "1rem" },
                    }}
                  >
                    {/* <Icon icon={item?.icon} style={{ height: "50px", width: "auto" }} /> */}
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "auto",
                        height: { xs: "80px", md: "65px", lg: "85px" },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        textAlign="left"
                        color="text.primary"
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          {/* <Grid
            container
            spacing={1.5}
            sx={{
              // display: "flex",
              // alignItems: "stretch",
              // justifyContent: "center",
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
          </Grid> */}
      </Box>
    </Box>
  );
};

export default CaraPemesananList;
