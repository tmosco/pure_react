import React from "react";
import { Box } from "@chakra-ui/core";

import NewsSlider from "../Home/slider";
import NewsList from "../Home/newslist";

const News = () => {
  return (
    <Box width="80%" ml="100px" mt="10px">
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <NewsList type="allNews" loadmore={true} start={3} amount={5} />
    </Box>
  );
};

export default News;
