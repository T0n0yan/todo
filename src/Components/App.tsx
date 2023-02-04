import React, {useRef, useState} from "react";
import './App.scss'
import {useDispatch} from "react-redux";
import {addTodo, notCompleted} from "../Redux/store/redcucers/ToDoReducers";
import {TodoItem} from "./TodoItem";
import {useAppSelector} from "../Redux/store/store";


const App = () => {
    const dispatch = useDispatch()

    const [todos, setTodos] = useState<string>('')
    const InputValue = (el: { target: HTMLInputElement }) => {
        setTodos(el.target.value)
    }
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addHandleClick()
            dispatch(notCompleted())
        }
    }

    const addHandleClick = () => {
        if (todos && todos.trim()) {
            dispatch(addTodo(todos))
            dispatch(notCompleted())
        }
        setTodos('')
    }

    const checkedCount = useAppSelector((state) => state.ToDoReducers.completededTask)
    const notCheckedCount = useAppSelector((state) => state.ToDoReducers.notCompletedTask)
    return (
        <div className="App">
            <video style={{
                width:'100%',
                height:'100vh'
            }} >
                <source src='../a.mp4' type="video/mp4"/>
            </video>
            <div className='main'>
                <div className='CheckBox'>
                    <p>Done -</p>
                    <span style={{color: 'yellowgreen'}}>{checkedCount.length}</span>
                    /
                    <p>Is Left - </p>
                    <span style={{color: 'yellowgreen'}}>{notCheckedCount.length}</span>
                </div>
                <input value={todos} onChange={InputValue} ref={inputRef} onKeyDown={handleKeyDown}
                       className='mainInput' placeholder='Tap here to add post !!!'/>
                <button className='mainButton' onClick={() => {
                    addHandleClick()
                }}>
                    <span className='symbol'>[</span>
                    Add
                    <span className='symbol'>[</span>
                </button>
                <TodoItem/>
            </div>
        </div>
    );
}

export default App;