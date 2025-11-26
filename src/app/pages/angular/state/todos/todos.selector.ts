import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../todos/models/todos.state.model';

export const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectTodos = createSelector(
  selectTodosState,
  state => state.todos
);

export const selectLoading = createSelector(
  selectTodosState,
  state => state.loading
);

export const selectError = createSelector(
  selectTodosState,
  state => state.error
);

export const selectCompletedTodos = createSelector(
  selectTodos,
  todos => todos.filter(t => t.completed)
);

export const selectPendingTodos = createSelector(
  selectTodos,
  todos => todos.filter(t => !t.completed)
);
