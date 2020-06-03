import React from "react";

import NewsItem from './newsItemList'


const NewsList = props => {
  const items = props.news.map(item => {
    return (
        
        <NewsItem key={item.id} item={item}/>
    )
  });

  return(
      <>
      {props.children}
      {items}
      </>
  )
};

export default NewsList;
