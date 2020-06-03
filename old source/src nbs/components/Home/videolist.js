import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import axios from "axios";
import { URL } from "../../config";
import NewButton from "../widget/buttons";
import VideoTemplate from "../widget/videotemplate";

const VideoList = props => {
  const [teams, setTeams] = useState([]);
  const [start, setStart] = useState(props.start);
  const [amount, setAmount] = useState(props.amount);
  const [end, setEnd] = useState(props.start + props.amount);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        setTeams(i => response.data);
      });
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      setVideos([...videos, ...response.data])
     
 
    });
  }, [start, end]);


 
  function renderTitle(title) {
    return title ? (
      <Box backgroundColor="#dcdcdc" fontSize="30px" fontWeight="600" py="10px">
        <strong>NBA</strong>
        <span> Videos</span>
      </Box>
    ) : null;
  }

  function renderVideos(type) {
    let template = null;

    switch (type) {
      case "card":
        template = <VideoTemplate data={videos} teams={teams} />;
        break;
      default:
        template = null;
    }
    return template;
  }

  function loadMore() {
    let NewEnd = end + amount;
    setStart(end);
    setEnd(NewEnd);
  }

  function isLoadMore(value) {
    return value ? (
      <NewButton
        type="loadmore"
        loadMore={() => loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <NewButton cta="More videos" type="linkTo" LinkTo="/videos" />
    );
  }

  return (
    <>
      <Box textAlign="center" py="10px" mt="5px" color="#353535">
        {renderTitle(props.title)}
      </Box>
      {renderVideos(props.type)}
      {isLoadMore(props.loadmore)}
    </>
  );
};

export default VideoList;
