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
              timeout={2000}
              mountOnEnter
              unmountOnExit
              >
             {state => 
            <div style={{
                background:'red',
                height:'100px',
                transition:'all 2s',
                opacity:state === 'exited'|| state === 'exiting' ? 0 : 1
            }}>
            {state}
            
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