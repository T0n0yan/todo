import React from 'react'
import TodoForm from '../TodoForm';
import './style.scss'
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className='welcome'>
        <h1 className='title'>Add Todos</h1>
        <TodoForm />
        <Link to="todos" > <button className='linkBtn'> ToDos</button></Link>
    </div>
  )
}

export default Welcome;
