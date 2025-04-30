import React, {useState} from 'react'

function IncreaseDecreaseCount() {
  
   const [count, setCount] = useState(0)
   function Increase(){
    setCount((preCount) =>{
        return preCount + 1;
    })
   }
   function Decrease(){
    setCount((preCount) =>{
        return preCount - 1;
    })
   }
   function Reset(){
    setCount(0);
   }
  return (
    <>
    <div className="counter-text">
    <h2>Initial Click Count:{count}</h2>
    </div>
   
    <div>
      <div className="counter-container">
        <button onClick={Increase}>Increase</button>
        
      </div>
      <div className="counter-container">
        <button onClick={Decrease}>Decrease</button>
        </div>
      <div className="counter-container">
        <button onClick={Reset}>Reset</button>
        </div>
    
      
      
    </div>
      
    </>
  )
}

export default IncreaseDecreaseCount
