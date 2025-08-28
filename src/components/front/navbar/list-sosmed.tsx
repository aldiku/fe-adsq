import React, { JSX } from "react";
import { Grid, Button, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

interface SocialButtonProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

const socialButtons: SocialButtonProps[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/adsqoo.id",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adsqoo_id/",
    icon: <InstagramIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/adsqoo-indonesia/",
    icon: <LinkedInIcon />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Adsqoo_id",
    icon: <TwitterIcon />,
  },
  // {
  //   name: "WhatsApp",
  //   href: "https://wa.link/kt62eh",
  //   icon: <WhatsAppIcon />,
  // },
];

const SocialButtons: React.FC = () => {
  const Mobile = useMediaQuery("(min-width:800px)");

  return (
    <Grid
      container
      justifyContent="center"
      sx={() => ({
        color: "white",
      })}
    >
      {socialButtons.map((button) => (
        <Grid key={button.name}>
          <Button
            variant="text"
            sx={({ palette }) => ({
              fontSize:"0.9em",
              color: "white",
              minWidth: 0,
              ":hover": {
                color: palette.primary.main,
                background: "none",
              },
            })}
            href={button.href}
            startIcon={button.icon}
            target="_blank"
          >
            {Mobile ? button.name.toUpperCase() : ""}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialButtons;
