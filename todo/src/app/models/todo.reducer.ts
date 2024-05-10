import {TodoListState, UserListState} from "./TodoState";
import {createReducer, on} from "@ngrx/store";
import {addTodo, addUser, removeTodo, removeUser} from "./todo.actions";


export const initialstate: TodoListState = {
  todos: [
    {
      id: Date.now().toString(),
      description: 'this is des',
      done: false
    }
  ]
};

export const todoReducer = createReducer(initialstate,
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos,
      {id: Date.now().toString(), description: todo, done: false}]
  })),
  on(removeTodo, (state, {id}) => ({
    ...state,
    todos: state.todos.filter(x => x.id !== id)
  }))

  )


export const initialUserState: UserListState = {
  users: [
    {
      id: Date.now().toString(),
      name: 'ravi le',
      phone: '19001560'
    }
  ]
}


export const userReducer = createReducer(initialUserState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user]
  })),
  on(removeUser, (state, {id}) => ({
    ...state,
    todos: state.users.filter(x => x.id !== id)
  }))
)
