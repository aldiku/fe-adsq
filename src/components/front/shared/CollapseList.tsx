import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Typography from "@mui/material/Typography";
import HTMLReactParser, { HTMLReactParserOptions, DOMNode } from "html-react-parser";
import { makeStyles, createStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import { theme } from "@/theme/AppThemes";
import { shadows } from "@/theme/theme";

interface Item {
  id: number;
  title: string;
  content: string;
}

interface Props {
  items: Item[];
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      maxWidth: 500,
      margin: "auto",
      color: "white",
    },
    header: {
      backgroundColor: "white",
      color: "white",
    },
    content: {
      paddingTop: 0,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

export const CollapseList = ({ items }: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleExpandClick = (id: number) => {
    setExpanded(expanded === id ? false : id);
  };

  const handleImage = (node: DOMNode): string | boolean | void | object | Element | null => {
    if (node.type === "tag" && node.name === "img") {
      // Modify the style attribute of the image
      return React.createElement(node.name, {
        ...node.attribs,
        style: {
          maxWidth: "100%",
          height: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        },
        key: Math.random(), // Using a random key, you can use a better strategy for keys
      });
    }

    // Handle other cases or return null if no transformation is needed
    return null;
  };

  const options: HTMLReactParserOptions = {
    replace: handleImage,
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        gap: "1rem",
        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ width: "100%" }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            sx={{ 
              background: "white", 
              textAlign: "left", 
              // border: "1px solid rgb(223,223,223)", 
              border: "none",
              boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)",
              mt: 0.5, 
              width: "100%",
              // padding: "1rem",
            }}
          >
            <CardHeader
              sx={{ cursor: "pointer", paddingX:"2rem", paddingY: "1rem"}}
              // sx={{ cursor: "pointer" }}
              onClick={() => handleExpandClick(item.id)}
              title={
                <Typography
                  variant="body1"
                  sx={{
                    // fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    // color: expanded === item.id ? "#fe3168" : "#58595B",
                  }}
                >
                  {item.title}
                </Typography>
              }
              action={
                <IconButton
                  className={`${classes.expand} ${expanded === item.id ? classes.expandOpen : ""}`}
                  onClick={() => handleExpandClick(item.id)}
                  aria-expanded={expanded === item.id}
                  aria-label="show more"
                >
                  <ExpandMoreOutlinedIcon />
                </IconButton>
              }
            />
            <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
              <CardContent sx={{ paddingX: "2rem !important", paddingBottom: "1rem !important", paddingTop: 0 }}>
                <List component="div" disablePadding sx={{ padding: "0 !important" }}>
                  <ListItem disablePadding>
                    <Typography
                      variant="body1"
                      sx={{ 
                        // fontSize: { xs: "12px", md: "15px" }, 
                        // fontWeight: 500, 
                        // color: "#58595B" 
                        lineHeight: 1.2
                      }}
                    >
                      {HTMLReactParser(`${item?.content}`, options)}
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Box>

    </Box>
  );
};
