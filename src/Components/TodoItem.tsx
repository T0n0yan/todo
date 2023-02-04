import React from "react";
import {useAppSelector} from "../Redux/store/store";
import {useDispatch} from "react-redux";
import {checkedTodoList, completedCount, notCompleted} from "../Redux/store/redcucers/ToDoReducers";
import './todobody.scss'
import TodoBottoms from "./TodoButtoms";

export const TodoItem = () => {


    const data = useAppSelector((state) => state.ToDoReducers.data)
    const dispatch = useDispatch()

    return (
        <div className=''>
            {data.map((el, index) => {
                return (
                    <div className='TodoContainer' key={index}>
                        <input checked={el.completed} type='checkbox'
                               className='checkBox'
                               onChange={() => {
                                   dispatch(checkedTodoList(el.id))
                                   dispatch(completedCount())
                                   dispatch(notCompleted())
                               }}/>
                        <TodoBottoms el={el}/>
                    </div>
                )
            })}

        </div>


    )
}