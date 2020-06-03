import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import axios from "axios";
import { URL } from "../../config";
import Header from "./header";

const NewsArticle = props => {
  const [article, setArticle] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/articles?id=${props.match.params.id}`).then(response => {
      let article = response.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then(response => {
        setTeam(response.data);
        setArticle(article);
      });
    });
  }, []);

  return (
    <>
      <Header teamData={team[0]} date={article.date} author={article.author} />
      <Box>
        <Box
          textAlign="center"
          fontSize="30px"
          fontWeight="800"
          color="#4d4d4d"
        >
          {article.title}
        </Box>
        <Box
          position="relative"
          backgroundSize="80%"
          width="85%"
          height="500px"
          backgroundImage={`url(../images/articles/${article.image})`}
          backgroundRepeat="no-repeat"
          m="2px 100px"
        ></Box>
        <Box  p="20px" mx="10px">
          {article.body}
        </Box>
      </Box>
    </>
  );
};

export default NewsArticle;
