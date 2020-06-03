import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import FontAwesome from "react-fontawesome";

const CardInfo = props => {
  function teamName(teams, team) {
    let data = teams.find(item => item.id === team);
    if (data) {
      return data.name;
    }
  }
  return (
    <Box fontSize="15px">
      <Flex alignItems="center">
        <Box mr="7px" bg="#d1d1d1" color="#ffff" p="2px 5px">
          {teamName(props.teams, props.team)}
        </Box>
        <Box mr="50px" pl="15px" color="#2196f3">
          <FontAwesome name="clock-o">{props.date}</FontAwesome>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardInfo;
