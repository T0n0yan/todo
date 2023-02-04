import React from 'react';
import {TodoItem} from "./TodoItem";
import {MyTodo} from "../Types/data";
import {useAppSelector} from "../Redux/store/store";

interface ITodoListProps {
    items: MyTodo[];
    toggleTodo: (id: number) => void;

}

const TodoList = () => {

    const items = useAppSelector((state) => state.ToDoReducers.data)
    return (
        <div style={{
            top: '50%',
            position: 'absolute',
            display: 'flex',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: 'max-content',
            margin: '0 auto',
            overflowY: 'scroll',
        }}>

            <TodoItem/>

        </div>

    );
}

export default TodoList;