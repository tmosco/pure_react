import React  from "react";
import { Box, Input } from "@chakra-ui/core";

const Header =(props) =>{


    return (
      <div className="App">
        <Box bg="#00bfff">
          <Box p={4} textAlign="center" fontSize="32px">
            LOGO
            <Input
              fontSize="20px"
              ml="480px"
              w="25%"
              onChange={props.keywords}
            />
          </Box>
        </Box>
      </div>
    );
  
}

export default Header;
