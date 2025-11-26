import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addTask,
  decrement,
  increment,
  removetask,
  setUserAction,
  updateTask,
} from '../../../../shared/store/action';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Task } from '../../../../shared/interfaces/task.model';
import { AppState } from '../../../../shared/store/reducers';
import { Observable } from 'rxjs';
import { selectError, selectLoading, selectTodos } from '../todos/todos.selector';
import * as TodoActions from '../todos/todos.action'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-management',
  imports: [AsyncPipe, JsonPipe, CommonModule,FormsModule],
  templateUrl: './state-management.html',
  styleUrl: './state-management.scss',
})
export class StateManagement implements OnInit {
  store = inject(Store<AppState>);
  public count$ = this.store.select('count');
  public user$ = this.store.select('user');
  public tasks$ = this.store.select('tasks');

  todos$ = this.store.select(selectTodos);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  newTitle = '';

  tasks: Task[] = [];
  constructor() {
    this.store.select('tasks').subscribe((res) => (this.tasks = res));
     this.store.dispatch(TodoActions.loadTodos());
    // this.store.select('tasks').subscribe(res => this.tasks = res);
  }
addTodo() {
    this.store.dispatch(TodoActions.addTodo({ title: this.newTitle }));
    this.newTitle = '';
  }

  toggle(todo: any) {
    this.store.dispatch(TodoActions.toggleTodo({ id: todo.id }));
  }

  delete(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }
  ngOnInit() {
    this.store.subscribe((res) => console.log(res));

    // this.tasks$ = this.store.select('tasks');
    console.log(this.tasks$);
    this.tasks$.subscribe((tasks) => {
      this.tasks = tasks; // Assigning the value of the tasks from the store to local variable
      console.log(this.tasks$, this.tasks);
    });
  }
  increse() {
    this.store.dispatch(increment());
  }
  decrese() {
    this.store.dispatch(decrement());
  }
  setName() {
    this.store.dispatch(setUserAction({ name: 'ASASD' }));
  }

  addNewTask() {
    const taskCount = this.tasks ? this.tasks.length : 0;
    const newTask: Task = {
      id: taskCount,
      title: 'New Task',
      description: 'This is a new task.',
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = {
      ...task,
      title: 'Updated Task',
      description: 'This task has been updated.',
    };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(removetask({ id }));
  }
}
