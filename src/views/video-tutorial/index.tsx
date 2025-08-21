import { Box, Container } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type VideoEmbedProps = {
  url: string;
};

import React from "react";

const VideoTutorial = (props: VideoEmbedProps) => {
  const { url } = props;
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <Container>
          <Box
            data-aos="fade-out"
            sx={{
              position: "relative",
              pt: "56.25%",
              width: { xs: "100%", md: "80%" },
              margin: "0 auto",
              display: "grid",
              alignItems: "center",
            }}
          >
            <ReactPlayer
              controls={true}
              playing={false}
              url={url}
              width="100%"
              height="80%"
              style={{ position: "absolute", top: "10%", left: 0 }}
            />
          </Box>
        </Container>
      )}
    </>
  );
};

export default VideoTutorial;
