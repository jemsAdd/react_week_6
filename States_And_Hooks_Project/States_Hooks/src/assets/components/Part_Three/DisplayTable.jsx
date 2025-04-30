import React, { useEffect ,useState} from 'react'

function DisplayTable({claculateTable}) {
  const [rows, setRows] = useState([]);
  useEffect (()=> {
    console.log("Display Table Runs!");
    setRows(claculateTable(1))
  },[claculateTable]);
  return rows.map((row, index) =>{
    return <p key={index}>{row}</p>
  });
};

export default DisplayTable
