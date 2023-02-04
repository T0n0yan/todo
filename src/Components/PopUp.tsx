import React, {useEffect} from 'react';
import './popup.scss'
import {useDispatch} from "react-redux";
import {MyTodo} from "../Types/data";
import {deleteTodo} from "../Redux/store/redcucers/ToDoReducers";


interface PopUpProps {
    setPopUp: (popUp: boolean) => void
    unique: MyTodo;
    popUp: boolean;

}

const PopUp = (props: PopUpProps) => {

    const dispatch = useDispatch()

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div className={props.popUp ? 'popupContainer' : 'disabled'}>
            <div className='popup'>
                <p>Are u sure ???</p>
                <div className='buttons'>
                    <button onClick={() => {
                        handleDelete(props.unique.id)
                        props.setPopUp(!props.popUp)
                    }}>A
                    </button>
                    <button onClick={() => props.setPopUp(!props.popUp)}> N</button>
                </div>
            </div>
        </div>
    );
}

export default PopUp;