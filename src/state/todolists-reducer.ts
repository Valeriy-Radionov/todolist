import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: tsarType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistId1)
        }
        case "ADD-TODOLIST": {
            // let newTodolistId = v1();
            let newTodolist = {id: action.payload.todolistId, title: action.payload.newTodolistTitle, filter: 'all'};
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.todolistId2 ? {
                ...el,
                title: action.payload.newTodolistTitle
            } : el)
        }
        case "CHANGE-TODOLIST-FILTER":{
            // let todolist = todolists.find(tl => tl.id === todolistId);
            // if (todolist) {
            //     todolist.filter = value;
            //     setTodolists([...todolists])
            // }
            return state.map(el=>el.id===action.payload.todolistId2 ? {...el,filter:action.payload.newFilter}: el)
        }
        default:
            return state
    }
}

type tsarType = removeTodolistACType
    | addTodolistACType
    | changeTodolistTitleACType
    | changeFilterACType

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}

    } as const
}


export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTodolistTitle, todolistId: v1()}

    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2, newTodolistTitle
        }

    } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId2, newFilter
        }

    } as const
}