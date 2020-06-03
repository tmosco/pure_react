import React, { Component } from "react";

const List = [
  {
    title:'React',
    url:'http://reactjs.org',
    author:'Jordan Walke',
    num_comment:3,
    points:4,
    objectId:0,
  },
  {
    title:'pyhton',
    url:'http://python.org',
    author:'Abelt Walkee',
    num_comment:32,
    points:2,
    objectId:1,
  },
]


class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      // List: List, Es5 or 
      List
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  // onDismiss(id){
  //   const isNotID = item => item.objectId !== id;
  //   const updatedList = this.state.List.filter(isNotID);
  //   this.setState({list:updatedList});
  //   }


  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ List: updatedList });
    }

render(){
  return(
    <div className ="App">
    {this.state.List.map(item =>
      <div key ={item.objectId}>
      <span>
      <a href={item.url}> {item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comment}</span>
      <span>{item.points}</span>
      <span>
      <button
       onClick ={() => this.onDismiss(item.objectId)}
      type="button"
      >
      onDismiss
      </button>
      </span>
      
      </div>
      )}
    </div>
  )
}










}

export default App;