export interface  MyTodoState {
    data:MyTodo[] ,
    completededTask: [] | MyTodo[],
    notCompletedTask:[] | MyTodo[]
}

export  interface MyTodo {
    id:number,
    title:string,
    completed: boolean,
}