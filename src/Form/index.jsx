import { useState } from "react";
import Removed from "../Removed";
import Todo from '../Todo'
import Edit from "../Edit";
import './style.scss'


const Form = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) || [])
    const text = 'no todos!'

    const removeTodo = (i) => {
        setTodos(JSON.parse(localStorage.getItem('Todos')) || []);
        if(todos){ todos.splice(i, 1)}
        localStorage.setItem("list", JSON.stringify(todos));
    }

    function todoList(){
      return todos ? todos.map((el, i) => {
        return <div key={i} className='Form'> 
            <Todo el={el}/> 
            <Removed index={i} removeTodo={removeTodo}/>
            <Edit item={el} index={i}/>
        </div>
       }): text;
    }

  
  

    return(
        <div>
            {/* <button onClick={todoList}>Show</button> */}
            { todoList()}
        </div>
    )

}

export default Form;