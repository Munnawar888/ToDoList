
import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {

  const [val, setVal] = useState()
  const [items, setItems] = useState([])

const input = (e) => {
  setVal(e.target.value)
  
}
const join = (e) => {
   setItems((olditems) => {
    return [...olditems, val];
   });
   setVal('');
}
//  array.filter
const del = (id) => {
  setItems((olditems)=>{
    return olditems.filter((arrE, index)=>{
      return index !== id;
    })
  })
  }

  return (
    <>
   <div className="main_div">
    <div className="center_div">
      <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder="Add a Item" onChange={input} value={val}  />
    <button className='plus' onClick={join}> + </button>
    <ol>
       {/* array.map */}
     { items.map( (itemval, index) => {
return <ToDoList 
             key={index} 
             id={index} 
             text={itemval} 
             onSelect={del} />
      })}
    </ol>
    </div>
   </div>
    </>
  );
}

export default App;
