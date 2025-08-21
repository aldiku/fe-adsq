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
import { makeStyles , createStyles } from "@mui/styles";

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
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          sx={{ background: "white", textAlign: "left", border: "1px solid rgb(223,223,223)", mt: 0.5 }}
        >
          <CardHeader
            sx={{ cursor: "pointer", background: "#ffe5e7", paddingY: 1, paddingX: { xs: 1, md: 3 } }}
            onClick={() => handleExpandClick(item.id)}
            title={
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: expanded === item.id ? "#fe3168" : "#58595B",
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
            <CardContent sx={{ padding: "0 !important" }}>
              <List component="div" disablePadding sx={{ padding: "0 !important" }}>
                <ListItem>
                  <Typography sx={{ fontSize: { xs: "12px", md: "15px" }, fontWeight: 500, color: "#58595B" }}>
                    {HTMLReactParser(`${item?.content}`, options)}
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};
