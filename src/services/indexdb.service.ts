import { Injectable } from '@angular/core';
import { db } from './app-db';

@Injectable({
  providedIn: 'root'
})
export class IndexdbService {

  async addTodo(todo: string) {
    return db.todo.add({
      text: todo,
      completed: false
    });
  }

  async getTodos() {
    return db.todo.toArray()
  }

}
