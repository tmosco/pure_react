import React from "react";
import { Box, Text, PseudoBox } from "@chakra-ui/core";
const NewsItem = ({ item }) => {
  return (
    <>
      <PseudoBox
        boxSizing="border-box"
        borderBottom="1px solid #808080"
        p="20px"
        _hover={{ borderColor: "", bg: "#ffa07a " }}
        color={["#b22222","#2f4f4f","#191970"]}

      >
        <Text fontWeight="bold" pt={3}>
          {item.title}
        </Text>
        <Box>{item.feed}</Box>
      </PseudoBox>
    </>
  );
};
export default NewsItem;
