import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/model';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  api = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  addTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.api, { title, completed: false });
  }

  toggleTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
