import React from 'react'
import { useState } from 'react'
import './style.scss'

const Edit = (props) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) || [])
    const [edit, setEdit] = useState('')


    const editTodo = () => {
        todos[props.index] =  edit;
        localStorage.setItem("Todos", JSON.stringify(todos));
    }

  return (
    <div className='editContainer'>
        <textarea onChange={(e) => setEdit(e.target.value)} className='editInput'>{props.item}</textarea> 
        <button onClick={editTodo} className='editBtn'> Edit </button>
    </div>
  )
}

export default Edit;