import React,{useState} from 'react'

export default function Task() {
    const [value,setValue]=useState(0);
    const a={margin:'20px',padding:'20px',backgroundColor:'red'};
    const b={margin:'20px',padding:'20px',backgroundColor:'green'};

  return (
    <div>
        <button style={a} onClick={()=>setValue(value-1)}><h1>-</h1></button>
        <input value={value} style={{textAlign:'center'}}/>

    <button style={b} onClick={()=>setValue(value+1)}><h1>+</h1></button>
        
        

    </div>
  )
}
