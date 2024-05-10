import {Component, OnInit} from '@angular/core';
import {Todo, User} from "../models/todo";
import {Observable, of, tap} from "rxjs";
import {select, Store} from "@ngrx/store";
import {addTodo} from "../models/todo.actions";
import {TodoListState, UserListState} from "../models/TodoState";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  newTodo: string = '';

  todos$: Observable<Todo[]>;
  users$: Observable<User[]>;

  constructor(private store: Store<{todoListState: TodoListState, userListState: UserListState}>) {
    // const testData: Todo[] = [{
    //   id: Date.now().toString(),
    //   description: 'this is des',
    //   done: false
    // }];
    // this.todos$ = of(testData);
    // this.todos$ = this.store.pipe(select(state => state.todos));
    // this.todos$ = this.store.select(state => state.todos)
    //   .pipe(tap(t => console.log(t)));
    this.todos$ = store.pipe(select(state => {
      console.log(state.todoListState.todos);
      return state.todoListState.todos;
    }));

    this.users$ = store.pipe(select(state => {
      console.log(state.userListState.users);
      return state.userListState.users;
    }));
    // this.todos$ = this.store.select((state) => {
    //   console.log(state.todos);
    //   return state.todos;
    // });
      // .pipe(tap(t => console.log(t)));
  }

  onRemoveTodo(id: string) {

  }

  onToggleTodo(id: string) {

  }

  onAddTodo() {
    console.log('added')
    this.store.dispatch(addTodo({todo: this.newTodo}));
    this.newTodo = '';
  }

  ngOnInit(): void {
    // this.todos$ = this.store.pipe(select(state => state.todos));
    // this.todos$ = this.store.select((state) => state.todos)
    //   .pipe(tap(t => console.log(t)));
  }
}
