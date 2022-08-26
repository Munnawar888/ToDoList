import React  from 'react'

const ToDoList = (props)=> {


  return (
    <>
    <div className="todo_style">
        <button className='cross' onClick={()=>{
            props.onSelect(props.id)
        }}><i className='fa fa-times'></i></button>
    <li> {props.text}</li>
    </div>
    </>
  )
}

export default ToDoList
