import {configureStore ,combineReducers}  from "@reduxjs/toolkit";
import ToDoReducers from "./redcucers/ToDoReducers";
import {useSelector,TypedUseSelectorHook} from "react-redux";

const rootReducer = combineReducers({
    ToDoReducers
})

export const  GlobalStore =()=>{
    return configureStore({
        reducer : rootReducer,
    })
}


export type RootState = ReturnType<typeof rootReducer>
export const  useAppSelector : TypedUseSelectorHook<RootState> = useSelector
