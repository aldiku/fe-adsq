"use client";

import { PersonOutline } from "@mui/icons-material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from "@mui/material";
import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { useRouter } from "next/navigation";
import { cloneElement, useEffect, useState } from "react";
import SocialButtons from "./list-sosmed";
import Logo from "./logo";
import { useAuth } from "@/hooks/useAuth";
import NavbarItems from "./navbar-items";
import UserDropdown from "../shared/UserDropdown";


// dayjs.extend(isSameOrAfter);
// dayjs.extend(isSameOrBefore);

export default function Navbar({ openSidebar }: { openSidebar: any }) {
  const [openNav, setOpenNav] = useState(true);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setOpenNav(true);
      } else {
        setOpenNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useAuth()

  return (
    <>
      <Box sx={() => ({
        display: "flex",
      })}>
        <ElevationScroll>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: theme.palette.background.default,
              backgroundImage: "none",
              boxShadow: "none",
              zIndex: theme.zIndex.drawer + 1,
            }}
          >
            {openNav && <SocialBarViews />}

            <Container maxWidth="lg" sx={{
              display: "flex",
              gap: 1,
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: 5,
              mt: 1,
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <Box
                className='LandingPage-navbar'
                sx={({ breakpoints }) => ({
                  width: "100%",
                  minWidth: "100px",
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  [breakpoints.down("md")]: {
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  },
                  alignItems: "center"
                })}
              >
                <Logo />
                {!isMobile && (
                  <Box
                    sx={{
                      paddingX: 3,
                      paddingY: 0,
                      display: "flex",
                      justifyContent: { xs: "center", md: "space-between" },
                      alignItems: "flex-end",
                      xs: {
                        display: "none",
                      },
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <NavbarItems />
                    </div>
                  </Box>
                )}

                {/* logedin user */}
                {user?.user?.data && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button
                      size="large"
                      onClick={() => router.push("/dashboards")}
                      sx={({ palette }) => ({
                        color: "#58595b",
                        paddingX: 2,
                        fontWeight: "500",
                        fontSize: "16px",
                        letterSpacing: "-1px",
                        ":hover": {
                          backgroundColor: "white",
                          color: palette.primary.main,
                        },
                      })}
                      startIcon={
                        <PersonOutline
                          sx={{ fontSize: "22px", marginRight: "-0.3rem" }}
                        />
                      }
                    >
                      DASHBOARD
                    </Button>
                    <UserDropdown name={user.user.data.fullname} settings={{
                      skin: "default",
                      mode: "dark",
                      appBar: undefined,
                      footer: undefined,
                      navHidden: undefined,
                      appBarBlur: false,
                      direction: "ltr",
                      navCollapsed: false,
                      themeColor: "error",
                      contentWidth: "full",
                      layout: undefined,
                      lastLayout: undefined,
                      verticalNavToggleType: "collapse",
                      toastPosition: undefined
                    }} role={""} />
                  </Box>
                )}

                {/* menu regis login */}
                <Grid
                  sx={({ breakpoints }) => ({
                    display: "flex",
                    justifyContent: "end",
                    [breakpoints.up("md")]: {
                      justifyContent: "space-between",
                    },
                  })}
                >
                  {!isMobile && !user?.user?.data && (
                    <>
                      <Grid item>
                        <Link href={"/register"} style={{ textDecoration: "none" }}>
                          <Button onClick={() => router.push("/register")} sx={{
                            color: "#3A4F66",
                            '&:hover': {
                              color: "#ee2645"
                            }
                          }} startIcon={
                            <PersonOutline
                              sx={{ fontSize: "22px", marginRight: "-0.3rem" }}
                            />
                          }>Register</Button>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href={"/login"} style={{ textDecoration: "none" }}>
                          <Button onClick={() => router.push("/login")} sx={{
                            color: "#3A4F66",
                            '&:hover': {
                              color: "#ee2645"
                            }
                          }} startIcon={
                            <LoginOutlinedIcon
                              sx={{ fontSize: "22px", marginRight: "-0.2rem" }}
                            />
                          }>Login</Button>
                        </Link>
                      </Grid>
                    </>
                  )}

                  {/* Button Drawer for Mobile Version */}
                  {isMobile && (
                    <Grid item>
                      <IconButton
                        onClick={() => openSidebar((prev: boolean) => !prev)}
                        sx={{
                          marginLeft: "1rem",
                          marginTop: "3px",
                        }}
                      >
                        <MenuOutlinedIcon className="DrawerButton" />
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Container>
            <Divider />
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </Box>

    </>
  );
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 0,

    sx: () => ({
      backgroundColor: "white",
      color: "black",

      "& .MuiTypography-root": {
        color: "black",
      },

      "& .DrawerButton": {
        color: "black",
      },

      "& .LandingPage-Navigation": {
        color: "black",
      },
    }),
  });
}

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const SocialBarViews = () => {
  return (
    <>
      <Box
        sx={() => ({
          height: "30px",
          // display: openNav ? "flex" : "none",
          display: "flex",
          background:
            "linear-gradient(to left, #4409E0, #6307BA, #7606A4, #8E0587, #CF0239)",
          justifyContent: "center",
          transition: "all 0.5s ease-out",
          alignItems: "center",
        })}
      >
        <SocialButtons />
      </Box>
    </>
  );
};
