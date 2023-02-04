import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MyTodoState} from "../../../Types/data";


const initialState: MyTodoState = {
    data: [],
    completededTask: [],
    notCompletedTask: []
}


const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {

        addTodo: (state, action: PayloadAction<string>) => {
            if (state.data) {
                state.data.push({
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                })
            }
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter(el => el.id != action.payload)
        },
        checkedTodoList: (state, action) => {
            state.data = state.data.map((el) => el.id === action.payload ? {...el, completed: !el.completed} : {...el})
        },
        completedCount: (state) => {
            state.completededTask = state.data.filter((el) => el.completed === true)

        },
        notCompleted: (state) => {
            state.notCompletedTask = state.data.filter((el) => !el.completed)
        },
        editInput: (state, action) => {
            state.data = state.data.map((el) => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
    }
})

export default todoSlice.reducer
export const {addTodo, deleteTodo, checkedTodoList, completedCount, notCompleted, editInput} = todoSlice.actions