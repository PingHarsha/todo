import {createReducer, on} from '@ngrx/store';
import {TodoListItem} from "../../classes/todo-list-item";
import {todoUpdateAll} from "../actions/todo.actions";


export const todoFeatureKey = 'todo';

export interface State {
  todoList: Array<TodoListItem>
}

export const initialState: State = {
  todoList: []
};

export const TodoReducer = createReducer(
  initialState,
  on(todoUpdateAll, (state, {data}) => ({...state, todoList: data}))
);
