import React, { Component } from "react";

import Header from './components/header';
import JSON from './data/db.json';
import NewsList from "./components/newsList";
import  './style.css';






class App extends Component{

  state = {
    news:JSON,
    filteredNews:[]
  }
  getKeyword =(e) =>{
    console.log(e.target.value)
    const value= e.target.value
    let filtered= this.state.news.filter((item)=>{
      return item.title.indexOf(value) > -1
    });
    this.setState({
      filteredNews:filtered
    })
  }
  

  render(){
    return(
      <>
      <Header keywords={this.getKeyword}/>
      <NewsList news={this.state.filteredNews.length === 0 ? this.state.news : this.state.filteredNews}>
      <div className="title"> This is the news: </div>
      </NewsList>
      </>
    )
  }
  }

export default App;
