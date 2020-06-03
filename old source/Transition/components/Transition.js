import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import '../css/App.css';

class TransitionComp extends Component{


    state = {
        show:false
    }

    showDisplay =() =>{
        this.setState({
            show:!this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
              <Transition
              in={this.state.show}
              timeout={{
                  enter:2000,
                  exit:2000
              }}
              enter ={true}
              exit={true}
              >
             {state => 
            <div className={`square square-${state}`}>
            {`square square-${state}`}
            
            </div>}
              
              </Transition>
                <div className="showButton"
                onClick = {this.showDisplay}
                >
                show or hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;