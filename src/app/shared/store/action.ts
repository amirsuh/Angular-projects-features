import { createAction, props } from "@ngrx/store"
import { Task } from "../interfaces/task.model";

export const increment =  createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// Set User action

export const setUserAction  = createAction('[User] Set Name',props<{name:string}>());

export const addTask  = createAction('[Task] Add Task',props<{task:Task}>());
export const updateTask  = createAction('[Task] Update Task',props<{task:Task}>());
export const removetask  = createAction('[Task] Remove Task',props<{id:number}>());
