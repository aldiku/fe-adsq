import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter()
  const companyMenu = [
      {
        title: "About Us",
        path: "/about-us",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
      {
        title: "FAQ & Help",
        path: "/frequently-asked-questions",
      },
      {
        title: "Privacy & Policy",
        path: "/kebijakan-privasi",
      },
      {
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
      },
  ]

  const serviceMenu = [
    {
      title: "SMS Advertising",
      path: "/sms-advertising",
    },
    {
      title: "Outdoor Advertising",
      path: "/outdoor-advertising",
    },
    {
      title: "Online Advertising",
      path: "/online-advertising",
    },
    {
      title: "Whatsapp Bussiness",
      path: "/whatsapp-business",
    },
    {
      title: "Whatsapp Blast Tertarget",
      path: "/whatsapp-blast-tertarget",
    },
    {
      title: "Push notification",
      path: "/push-notification",
    },
]

  return (
    <>
      <Box
        sx={{
          background: "#6D6E70",
          paddingY: "4rem",
          overflow: "hidden",
        }}
      >
        <Container>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '24px' }}>
                Contact Us
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  color: 'white',
                  fontWeight: 300,
                  fontSize: '16px',
                }}
              >
                Masih bingung? atau ada kendala lain untuk menggunakan adsqoo, Anda bisa hubungi email dibawah ini.
              </Typography>
              <>
                <Box sx={{ display: 'flex', gap: '3px' }}>
                  <Typography
                    sx={{
                      mt: 1,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '16px',
                    }}
                  >
                    Email:
                  </Typography>
                  <Link href="mailto:admin@adsqoo.id" target="_blank" style={{ textDecoration: 'none' }}>
                    <Typography
                      sx={{
                        mt: 1,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '16px',
                        ':hover': { color: 'red' },
                      }}
                    >
                      admin@adsqoo.id
                    </Typography>
                  </Link>
                </Box>
                <Typography
                  sx={{
                    mt: 5,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                >
                  Address:
                </Typography>
                <Link href="https://goo.gl/maps/RWz1Ghgyxi8VTwwL7" target="_blank" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      mt: 1,
                      color: 'white',
                      fontWeight: 300,
                      fontSize: '16px',
                      ':hover': { color: 'red' },
                    }}
                  >
                    The Telkom Hub, Jl. Gatot Subroto No.52, RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan,
                    Daerah Khusus Ibukota Jakarta 12710
                  </Typography>
                </Link>
              </>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '24px' }}>
              Company
              </Typography>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                    {companyMenu.map((item,index)=>{
                      return (
                        <Link href={item.path} style={{ textDecoration: "none" }} key={index}>
                        <Button onClick={() => router.push(item.path)} sx={{
                            color: "white",
                            '&:hover': {
                                color: "#ee2645"
                            }
                        }}>{item.title}</Button>
                    </Link>
                      )
                    })}
                  </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '24px' }}>
              Our Services
              </Typography>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                    {serviceMenu.map((item,index)=>{
                      return (
                        <Link href={item.path} style={{ textDecoration: "none" }} key={index}>
                        <Button onClick={() => router.push(item.path)} sx={{
                            color: "white",
                            '&:hover': {
                                color: "#ee2645"
                            }
                        }}>{item.title}</Button>
                    </Link>
                      )
                    })}
                  </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={({ }) => ({
          background: "#404041",
          padding: 1,
        })}
      >
        <Typography
          fontSize="14px"
          fontWeight={400}
          color="white"
          textAlign="center"
        >
          Copyright {`© ${new Date().getFullYear()} - `} Adsqoo.id - All Right Reserved.
        </Typography>
      </Box>
    </>
  );
};
