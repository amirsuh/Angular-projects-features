import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../todos/todos.action'
import { TodosState } from './models/todos.state.model';

export const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialState,

  // Load
  on(TodoActions.loadTodos, state => ({
    ...state,
    loading: true
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    todos
  })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Add
  on(TodoActions.addTodosSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),

  // Toggle
  on(TodoActions.toggleTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => (t.id === todo.id ? todo : t))
  })),

  // Delete
  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id)
  }))
);
