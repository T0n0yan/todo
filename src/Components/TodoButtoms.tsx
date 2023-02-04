import React, {useState} from 'react';
import {MyTodo} from "../Types/data";
import {useDispatch} from "react-redux";
import {editInput} from "../Redux/store/redcucers/ToDoReducers";
import PopUp from "./PopUp";

interface TodoBottomsTypes {
    el: MyTodo
}


const TodoBottoms = ({el}: TodoBottomsTypes) => {
    const [editTask, setEditTask] = useState<boolean>(false)
    const [editValue, setEditValue] = useState<string>(el.title)
    const [unique, setUniqueTodo] = useState<MyTodo | null>(null)
    const [popUp, setPopUp] = useState<boolean>(false)
    const dispatch = useDispatch()

    const saveTask = () => {
        if (editValue && editValue.trim() && editValue !== 'Fill the place !!!') {
            dispatch(editInput({
                id: el.id,
                title: editValue
            }))
            setEditTask(!editTask)
        } else {
            dispatch(editInput({
                id: el.id,
                title: setEditValue('Fill the place !!!'),
            }))
        }

    }

    return (
        <div className='buttomsDiv'>
            {editTask
                ? <input className='changedInput' value={editValue}
                         onChange={(evt: { target: HTMLInputElement }) => setEditValue(evt.target.value)}/>
                : <span className={el.completed ? 'Active' : 'Disable'}>{el.title}</span>
            }
            {editTask
                ? <button className='saveBottom' onClick={saveTask}> = </button>
                : <button className='editBottom' onClick={() => setEditTask(!editTask)}>!</button>
            }
            <button className='deleteBottom' onClick={() => {
                setUniqueTodo(el)
                setPopUp(!popUp);
            }}>
                x
            </button>
            {unique && <PopUp setPopUp={setPopUp} popUp={popUp} unique={unique}/>}
        </div>
    );
};

export default TodoBottoms;