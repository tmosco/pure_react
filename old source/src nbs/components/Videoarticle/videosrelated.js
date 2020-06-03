import React from 'react'
import { Box } from "@chakra-ui/core";
import VideoTemplate from '../widget/videotemplate'

const VideosRelated = (props) => {
    return (
        <Box ml="15px">
        <VideoTemplate data={props.data} teams={props.teams} />
        </Box>
    )
}

export default VideosRelated; 
