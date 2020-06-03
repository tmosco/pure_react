import React ,{useState } from 'react';




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
      points:28,
      objectId:1,
    }
  ]
  
  function App(){
    const [state, setstate] = useState(List)
      return(
          <>
        <div className ="App">
        {state.map(item =>
          <div key ={item.objectId}>
          <span>
          <a href={item.url}> {item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comment}</span>
          <span>{item.points}</span>
          <span></span>
          
          </div>
          )}
        </div>
        </>
      )
  }

  export default App;