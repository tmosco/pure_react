import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import {CURRENT_YEAR} from "../../../config"





const Footer = () => {
  return (
    <>
      <Box
        mt="20px"
        bg="#242424"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box>
          <Link to="/">
            <img
              alt="nba logo"
              src="/images/nba_logo.png"
              height="20px"
              p="10px"
            />
          </Link>
        </Box>
        <Box flexGrow="1" color="#878787" fontSize="12px">
          @NBA {CURRENT_YEAR} All rights reserves
        </Box>
      </Box>
    </>
  );
};

export default Footer;
