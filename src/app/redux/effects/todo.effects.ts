import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TodoService} from "../../services/todo.service";
import * as TodoActions from '../actions/todo.actions';
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {TodoListItem} from "../../classes/todo-list-item";


@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions, private readonly todoService: TodoService) {
  }

  fetchAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.todoGetAll.type),
      switchMap(() =>
        this.todoService.getAll().pipe(
          map((data: Array<TodoListItem>) => TodoActions.todoUpdateAll({data})),
          catchError(err => of(TodoActions.failedGetAllFetch({data: err})))
        )
      )
    ));

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.todoCreate.type),
      exhaustMap((action: any) =>
        this.todoService.createTodo(action.data).pipe(
          map(data => TodoActions.todoAddItem({data})),
          catchError(err => of(TodoActions.failedCreateTodo({data: err})))
        )
      )
    )
  );
}
