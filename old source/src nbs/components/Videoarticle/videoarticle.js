import React, { useState, useEffect } from "react";
import { Box, Text} from "@chakra-ui/core";
import axios from "axios";
import { URL } from "../../config";
import Header from "./header"
import VideosRelated from './videosrelated'

const VideoArticle = (props) => {
const [article, setArticle] = useState([]);
  const [team, setTeam] = useState([]);
  const [teams, setTeams] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/videos?id=${props.match.params.id}`).then(response => {
      let article = response.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then(response => {
        setTeam(response.data);
        setArticle(article);
    });
    getRelated();
    });
  });


  function getRelated(){
    axios.get(`${URL}/teams`).then(response =>{
      let teams= response.data
    
      axios.get(`${URL}/videos?q=Boston&_limit=3`).then(response=>{
          console.log(response.data)
        setTeams(teams)
        setRelated(response.data)
   
      })
    })
  }

console.log(related)
  return (
      <>
      <Header teamData={team[0]} />
      <Box bg="#fff" border="1px solid #c5c5c5" textAlign="center" >
      <Text fontSize="30px" fontWeight="700" color="#4d4d4d">{article.title}</Text>
      <Box mx="20px">
      <iframe title="videoplayer" width="100%" height="300px"  src={`https://www.youtube.com/embed/${article.url}`}> </iframe>
      </Box>
      <VideosRelated data={related} teams ={teams}/>
      </Box>
      </>
  )
  
};

export default VideoArticle;
