import React from "react";
import { Box, Text,Flex } from "@chakra-ui/core";

const TeamInfo = props => {
  return (
      <Box my="1px" pl="5px" backgroundColor="#f9f9f9">
      <Flex>
      <Box
      position="relative"
      backgroundSize="100%"
      width="68px"
      height="70px"
        backgroundImage={`url(../images/teams/${props.team.logo})`}
        backgroundRepeat="no-repeat"
        ></Box>
      <Box m="15px 20px 5px 20px">
      <Box display="inline-flex"  >
      <Text>{props.team.city}</Text>
      <Text ml="5px">{props.team.name}</Text>
      </Box>
      <Box>
      <strong>
      W{props.team.stats[0].wins} -L{props.team.stats[0].defeats}
      </strong>
      </Box>
      </Box>
      </Flex>
    </Box>
  );
};

export default TeamInfo;
