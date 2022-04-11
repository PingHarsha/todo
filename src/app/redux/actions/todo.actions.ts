import {createAction, props} from '@ngrx/store';
import {TodoItem} from "../../classes/todo-item";
import {TodoListItem} from "../../classes/todo-list-item";

export const todoGetAll = createAction(
  '[Todo] Todo Get All'
);

export const todoUpdateAll = createAction(
  '[Todo] Todo Create',
  props<{ data: Array<TodoListItem> }>()
);

export const failedCreateTodo = createAction(
  '[Todo] Todo Failed To Create Todo',
  props<{ data: any }>()
);

export const failedGetAllFetch = createAction(
  '[Todo] Todo Failed Get All',
  props<{ data: any }>()
);

export const todoCreate = createAction(
  '[Todo] Todo Create todo',
  props<{ data: TodoItem }>()
);

export const todoAddItem = createAction(
  '[Todo] Todo Create Item',
  props<{ data: TodoListItem }>()
);

export const todoUpdateItem = createAction(
  '[Todo] Todo Update Item',
  props<{ data: TodoListItem }>()
);

