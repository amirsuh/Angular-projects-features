import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from '../todos/todos.action';
import { Todos} from '../todos/todos';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.service.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(error =>
            of(TodoActions.loadTodosFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap(({ title }) =>
        this.service.addTodo(title).pipe(
          map(todo => TodoActions.addTodosSuccess({ todo })),
          catchError(error =>
            of(TodoActions.addTodosFailure({ error: error.message }))
          )
        )
      )
    )
  );

  toggleTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.toggleTodo),
      mergeMap(({ id }) =>
        this.service.toggleTodo({ id } as any).pipe(
          map(todo => TodoActions.toggleTodoSuccess({ todo })),
          catchError(error =>
            of(TodoActions.toggleTodoFailure({ error: error.message }))
          )
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap(({ id }) =>
        this.service.deleteTodo(id).pipe(
          map(() => TodoActions.deleteTodoSuccess({ id })),
          catchError(error =>
            of(TodoActions.deleteTodoFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: Todos) {}
}
