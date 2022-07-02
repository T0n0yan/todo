import React from 'react'
import './style.scss'
import { useState } from 'react'

const Removed = (props) => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) || [])

    const remove = () => {
        if(todos)
        {
          todos.splice(props.index, 1)
        }
        localStorage.setItem("Todos", JSON.stringify(todos));
    }

  return (
    <div>
        <button onClick={remove} className='removeBtn'>Delete</button>
    </div>
  )
}

export default Removed