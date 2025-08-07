import { Box } from "@mui/material";
import { useEffect, useState } from "react";


type VideoEmbedProps = {
  url: string;
};

import React from "react";

const VideoDesc = (props: VideoEmbedProps) => {
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
        <Box data-aos="fade-out" sx={{ position: "relative", pt: "56.25%" }}>
          <video
            controls
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={url}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      )}
    </>
  );
};

export default VideoDesc;
