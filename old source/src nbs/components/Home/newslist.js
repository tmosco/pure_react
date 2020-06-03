import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../config";
import { Box, Flex } from "@chakra-ui/core";
import NewButton from "../widget/buttons";
import CardInfo from "../widget/cardinfo";
import styles from "../widget/style.css";

const NewsList = props => {
  const [items, setItems] = useState([]);
  const [start, setStart] = useState(props.start);
  const [amount, setAmount] = useState(props.amount);
  const [end, setEnd] = useState(props.start + props.amount);
  const [teams, setTeams] = useState([]);


  console.log(items);
  useEffect(() => {
    if (teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        setTeams(i => response.data);
      });
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      return setItems(i => [...items, ...response.data]);
    });
  }, [start, end]);

  function renderNews(type) {
    let template = null;

    switch (type) {
      case "card":
        template = items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <Box
              className="Box"
              border="1px solid #f2f2f2"
              bg="#fff"
              mt="0px"
              p="8px 5px 0 5px"
            >
              <Link to={`articles/${item.id}`}>
                <CardInfo teams={teams} team={item.team} date={item.date} />
                <Box
                  fontSize="15px"
                  lineHeight="21px"
                  m="5px 0"
                  color="#525252"
                >
                  {item.title}
                </Box>
              </Link>
            </Box>
          </CSSTransition>
        ));
        break;
      case "allNews":
        template = items.map((item, i) => (
          <Box>
            <Flex align="center">
              <Box borderBottom="2px solid #d5d5d5" bg="#fff">
                <Box
                  position="relative"
                  backgroundSize="150px"
                  width="100px"
                  height="100px"
                  backgroundImage={`url(../images/articles/${item.image})`}
                  backgroundRepeat="no-repeat"
                ></Box>
              </Box>
              <Flex flexDirection="row">
              <Box ml="10px">
              <Link to={`articles/${item.id}`}>
              <CardInfo teams={teams} team={item.team} date={item.date} />
              <Box
              fontSize="15px"
              lineHeight="21px"
                    m="5px 0"
                    color="#525252"
                    >
                    {item.title}
                    </Box>
                    </Link>
                    </Box>
              </Flex>
            </Flex>
          </Box>
        ));
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

  return (
    <div className={styles.Box}>
      <TransitionGroup component="Box" className="list">
        {renderNews(props.type)}
      </TransitionGroup>

      <NewButton
        type="loadmore"
        loadMore={() => loadMore()}
        cta="Load More News"
      />
    </div>
  );
};

export default NewsList;
