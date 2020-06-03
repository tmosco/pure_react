import React from "react";
import { Link as ButtonLink, PseudoBox } from "@chakra-ui/core";


const myButton = props => {
  let template = null;

  switch (props.type) {
    case "loadmore":
      template = (
        <PseudoBox
          as="button"
          textAlign="center"
          borderColor="#d7d7d7"
          onClick={props.loadMore}
          bg="#2196f3"
          width="400px"
          ml="170px"
          fontStyle="500"
          color="#f9f9f9"
          _hover={{ bg: "#eeeeee", color: "#696969 " }}
          p="9px"
          cursor="pointer"
        >
          {props.cta}
        </PseudoBox>
      );
      break;
      case "linkTo":
        template = (
          <ButtonLink
            textAlign="center"
            borderColor="#d7d7d7"
            onClick={props.loadMore}
            bg="#2196f3"
            width="400px"
            ml="170px"
            fontStyle="500"
            color="#f9f9f9"
            _hover={{ bg: "#eeeeee", color: "#696969 " }}
            p="9px"
            cursor="pointer"
          >
            {props.cta}
          </ButtonLink>
        );
        break;  
    default:
      template = null;
  }
  return template;
};

export default myButton;
