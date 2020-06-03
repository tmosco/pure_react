import React from "react";
import NewsSlider from "./slider";
import NewsList from "./newslist";
import VideosList from "./videolist";
import { Box } from "@chakra-ui/core";
const Home = () => {
  return (
    <Box  width="80%" ml="100px" mt="10px">
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <NewsList type="card" loadmore={true} start={3} amount={7} />
      <VideosList type="card" title={true} loadmore={true} start={0} amount={3}/>
    </Box>
  );
};

export default Home;
