import { createReducer, on } from '@ngrx/store';
import { addTask, decrement, increment, removetask, setUserAction, updateTask } from './action';
import { Task } from '../interfaces/task.model';

export const counterReducer = createReducer(
  0,
  on(increment, (stat) => stat + 1),
  on(decrement, (stat) => stat - 1)
);
export const userReducer = createReducer(
  {name:''},
  on(setUserAction, (stat,{name}) => ({...stat,name})),
);


export interface AppState {
  tasks: Task[];
}


export const initialState: Task[] = [];

export function taskReducer(state = initialState, action: any): Task[] {
  switch (action.type) {
    case addTask.type:
      return [...state, action.task];

    case updateTask.type:
      return state.map(t => t.id === action.task.id ? action.task : t);

    case removetask.type:
      return state.filter(t => t.id !== action.id);

    default:
      return state;
  }
}
// export const initialState: AppState = {
//   tasks: []
// };

// export function taskReducer(state = initialState, action:any): AppState {
//   switch (action.type) {
//     case addTask.type:
//       return {...state ,tasks:[...state.tasks,action.task]};
//     case updateTask.type:
//       return {...state, tasks: state.tasks.map(res=>(res.id === action.task.id ? action.task:res))}
//     case removetask.type:
//       return {...state, tasks: state.tasks.filter(task=>task.id!==action.id)}
//     default:
//       return state;
//   }
// }
