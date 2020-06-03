import React from "react";
import { Box, Text } from "@chakra-ui/core";

const PostData = props => {
  console.log(props);
  return (
    <Box  backgroundColor="#f9f9f9" pl="10px">
      <Box display="inline-flex">
        Date: <Text fontFamily="Roboto" fontWeight="600" ml="4px">{props.date}</Text>
      </Box>
      <Box display="flex">
        Author: <Text fontWeight="600" ml="5px">{props.author}</Text>
      </Box>
    </Box>
  );
};

export default PostData;
