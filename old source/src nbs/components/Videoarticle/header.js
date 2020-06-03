import React from 'react'
import { Box } from "@chakra-ui/core";
import TeamInfo from "../widget/teaminfo"

const header = (props) => {
    const teamNfo =(team) =>{
        return team ? (<TeamInfo team={team}/>) : null;
    }
    return (
        <Box backgroundColor="#d7d7d7">
        {teamNfo(props.teamData)}
       
       </Box>
    )
}

export default header
