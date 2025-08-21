import { ArrowDropDown, ArrowDropUp, Close } from "@mui/icons-material";
import { Box, Button, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { navbarData } from "./data";

interface props {
  open: boolean;
  close: any;
}

export default function Sidebar({ open, close }: props) {
  const router = useRouter();

  // controlled accordion
  const [expanded, setExpanded] = useState<number | null>(null);


  // const PromoList = [
  //   {
  //     title: "Promo",
  //     path: "#",
  //     children: []
  //   }
  // ];

  const updatedNavbarData = [...navbarData];

  const handleListItemClick = (path: string) => {
    void router.push(path);
    close();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      variant="temporary"
      onClose={() => close()}
      PaperProps={{
        sx: {
          width: { xs: "60%", sm: "40%" },
          paddingTop: "5vh",
          backgroundColor: "white",
          color: "red",
        },
      }}
      disableScrollLock
    >
      <Box onClick={() => close()} sx={{ pl: 2, cursor: "pointer", display: "flex", marginBottom: "20px" }}>
        <Close sx={{ color: "black", ":hover": { color: "red" } }} />
      </Box>
      <Box>
        <List>
          {updatedNavbarData?.map((item, index) => (
            <Fragment key={index}>
              <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                setExpanded(expanded === index ? null : index);
                }}
              >
                <ListItemText sx={{ color: "black" }} primary={item.title} />
                {item.children && (
                <ListItemIcon>
                  {expanded === index ? <ArrowDropUp /> : <ArrowDropDown />}
                </ListItemIcon>
                )}
              </ListItemButton>
              </ListItem>
              {expanded === index && item.children && (
              <List sx={{ listStyle: "disc" }}>
                {item.children.map((child: any, childIndex: number) => (
                <Fragment key={childIndex}>
                  <ListItemButton
                  sx={{ display: "list-item", margin: "0", pl: 4 }}
                  onClick={() => handleListItemClick(child.path)}
                  >
                  <ListItemText primary={child.title} />
                  </ListItemButton>
                  {child.children && (
                  <List sx={{ listStyle: "circle" }}>
                    {child.children.map((grandchild: any, grandchildIndex: number) => (
                    <ListItemButton
                      key={grandchildIndex}
                      sx={{ display: "list-item", margin: "0", pl: 8 }}
                      onClick={() => handleListItemClick(grandchild.path)}
                    >
                      <ListItemText primary={grandchild.title} />
                    </ListItemButton>
                    ))}
                  </List>
                  )}
                </Fragment>
                ))}
              </List>
              )}
            </Fragment>
          ))}
          <Box sx={{ paddingX: 1 }}>
            <ListItem disablePadding>
              <Button
                fullWidth
                variant="contained"
                sx={() => ({
                  paddingX: 2,
                  fontWeight: "500",
                  fontSize: "16px",
                  letterSpacing: "-1px",
                  textAlign: "left",

                })}
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                variant="outlined"
                fullWidth
                sx={({ palette }) => ({
                  marginTop: 2,
                  color: "#58595b",
                  paddingX: 2,
                  fontWeight: "500",
                  fontSize: "16px",
                  letterSpacing: "-1px",
                  textAlign: "left",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: palette.primary.main,
                  },
                })}
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </ListItem>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
}
