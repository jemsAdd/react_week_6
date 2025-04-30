import { useState, useCallback } from "react";
import DisplayTable from "./DisplayTable";


function CallBack() {
    const [number, setNumber] = useState(0);
    const [darkTheme ,setBlackTheme]= useState();

    const claculateTable = useCallback((value) =>{
        let newNum = number + value;
        return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5];
    },[number])
    ;
    const cssStyle = {
        backgroundColor : darkTheme ? "black": "white",
        color: darkTheme? "white" : "black"
    };
    // const claculateTable = () => {
    //     return [number * 1, number * 2, number * 3, number * 4, number * 5];
    // };
  return (
    <div style = {cssStyle}>
        <input onChange={(e) => setNumber(e.target.valueAsNumber)}
        type="number" 
        value ={number}/>
        <DisplayTable claculateTable ={claculateTable}/>
        <button onClick={() => setBlackTheme(!darkTheme)}>Toggle</button>
    </div>
   
  )
}

export default CallBack
