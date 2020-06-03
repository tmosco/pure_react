import React from 'react'
import { Box } from "@chakra-ui/core";
import TeamInfo from "../widget/teaminfo"
import PostData from "../widget/postdata"

const Header = (props) => {
    const teamNfo =(team) =>{
        return team ? (<TeamInfo team={team}/>) : null;
    }
function postData(date, author){
return(
    <PostData date={date} author={author}/>
)
}


    return (
       <Box backgroundColor="#d7d7d7">
       {teamNfo(props.teamData)}
       {postData(props.date,props.author)}
      </Box>
       
    )
}

export default Header
