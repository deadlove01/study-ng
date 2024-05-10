import {createAction, props} from "@ngrx/store";
import {User} from "./todo";


export const addTodo = createAction('[Todo Page] Add Todo', props<{todo: string}>());
export const removeTodo = createAction('[Todo Page] Remove Todo', props<{id: string}>())


export const addUser = createAction('[User Page] Add User', props<{user: User}>());
export const removeUser = createAction('[User Page] Remove User', props<{id: string}>())

