import React from "react";
import { Box } from "@chakra-ui/core";

import VideosList from "../Home/videolist";

const Videos = () => {
  return (
    <Box>
      <VideosList
        type="card"
        title={false}
        loadmore={true}
        start={0}
        amount={5}
      />
    </Box>
  );
};

export default Videos;
