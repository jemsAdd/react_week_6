import {useState, useEffect} from 'react'


function UseEffect() {
    const [count, setCount] = useState(0);
    function Increase(){
        setCount((preCount) =>{
            return preCount + 1;
        })
       }
       useEffect(()=>{
        alert('Alert : Component is Mounted')
       },[])
       useEffect(()=>{
        document.title=`title Counter:${count}`
       },[count])
  return (
    <>
    <div className="counter-container">
      <button onClick={Increase}>Click Here</button>
      </div>
      
    <div className= "counter-text" >  <h1>Counter Displayer:{count}</h1></div>
     
    </>
  )
}

export default UseEffect
