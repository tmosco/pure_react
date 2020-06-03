import React from "react";
import Slick from "react-slick";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const sliderTemplates = ({ data, type, HomeSettings }) => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...HomeSettings
  };

  switch (type) {
    case "featured":
      template = data.map((item, i) => {
        return (
          <Box m="" backgroundColor="#696969" key={i}>
            <Box
              position="relative"
              size="500px"
              width="100%"
              objectFit="cover"
              backgroundImage={`url(../images/articles/${item.image})`}
              // backgroundSize="cover !important"
              backgroundSize="100%"
              backgroundRepeat="no-repeat"
              alt=""
            >
              <Link to={`/articles/${item.id}`}>
                hi
                <Box
                  display="flex"
                  color="#c5c5c5"
                  //     width="100%"
                  fontWeight="600"
                  fontSize="40px"
                  my="350px"
                  ml="10px"
                  // position="absolute"
                >
                  {item.title}
                </Box>
              </Link>
            </Box>
          </Box>
        );
      });
      break;

      deafult: template = null;
  }

  return <Slick {...settings}>{template}</Slick>; // for the slider
};

export default sliderTemplates;
