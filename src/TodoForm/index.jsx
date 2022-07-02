import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import './style.scss'

const TodoForm = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) || [])
  const [post, setPost] = useState('')
  const [text, setText] = useState('')

const addTodo = () => {
  setTodos([...todos, post])
}

useEffect(() => {
  localStorage.setItem('Todos', JSON.stringify(todos))
}, [todos])

  return (
    <div className='formContainer'>
        <div className='todoResult'>{text}</div>
        <textarea className='toDoInput' placeholder='add ToDo' onChange={(e) => setPost(e.target.value)} ></textarea>
        <button onClick={addTodo} className='welcomeBtn'> Add </button>
    </div>
  )
}

export default TodoForm;