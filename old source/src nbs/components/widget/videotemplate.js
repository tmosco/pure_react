import React from "react";
import CardInfo from "../widget/cardinfo";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";


const VideoTemplate = props => {
  return props.data.map((item, i) => (
    <Link to={`/videos/${item.id}`} key={item.id}>
      <Box>
        <Flex align="center">
          <Box borderBottom="2px solid #d5d5d5" bg="#fff">
            <Box
              position="relative"
              backgroundSize="150px"
              width="100px"
              height="100px"
              backgroundImage={`url(../images/videos/${item.image})`}
              backgroundRepeat="no-repeat"
            >
              <Box
                width="90px"
                height="90px"
                backgroundSize="40px"
                backgroundRepeat="no-repeat"
                backgroundPosition="center center"
                backgroundImage="url(../images/play.png)"
              ></Box>
            </Box>
          </Box>
          <Flex flexDirection="row">
            <Box ml="5px">
              <CardInfo teams={props.teams} team={item.team} date={item.date} />
              <Box flexGrow="1" fontSize="20px" color="#525252">
                {item.title}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Link>
  ));
};

export default VideoTemplate;
