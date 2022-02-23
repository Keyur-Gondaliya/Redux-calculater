import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from '../actions/index';
export default function Task() {
  const state=useSelector((state)=>state.changeNumber);
  const dispatcher=useDispatch();
    const a={margin:'20px',padding:'20px',backgroundColor:'red'};
    const b={margin:'20px',padding:'20px',backgroundColor:'green'};

  return (
    <div>
        <button style={a} onClick={()=>dispatcher(decrement())}><h1>-</h1></button>
        <input value={state} style={{textAlign:'center'}}/>

    <button style={b} onClick={()=>dispatcher(increment())}><h1>+</h1></button>
        
        

    </div>
  )
}
