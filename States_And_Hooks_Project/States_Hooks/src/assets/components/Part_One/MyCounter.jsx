import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer';
export default class MyCounter extends Component {
    constructor(){
        super();
        this.state = {
            clickCount: 0, 
            evenCounter: 0,
        };
    }
    allClicksCounter=()=>{
        this.setState((prevCount)=>({
          clickCount:prevCount.clickCount + 1
        }))
        this.setState((prevCount)=>{
          if(prevCount.clickCount %2 ===0){
           return{
            evenCounter:prevCount.clickCount
           } 
          }

        })
    }
  render() {
    return (
        <>
      <div className="counter-container">
      <button onClick={this.allClicksCounter}>Click Me</button>
      <div className="counter-text"><CounterDisplayer clickCount={this.state.clickCount}/></div>
       
       <div className="counter-text"><EvenCounterDisplayer evenCounter={this.state.evenCounter}/>
       </div>
       
      </div>
        
    
      </>
      
    )
  }
}
