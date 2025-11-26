import { Todo } from "./model";

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}
