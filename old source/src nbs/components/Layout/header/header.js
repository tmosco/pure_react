import React from 'react'
import {Box} from "@chakra-ui/core";
import SideBar from './sidebar'



const Header = (props) => {
    return (
        <>
        <Box bg="#000000" w="100%" py={4} color="white">
        <SideBar/>
      </Box>
        </>
    )
}

export default Header;
