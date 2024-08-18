import { Injectable } from '@angular/core';
import { db } from './app-db';
import { Todo } from '../interfaces/todo';

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

  async getTodoById(id: number) {
    return db.todo.where({
      id: id
    });
  }

  async deleteTodo(id: number) {
    return db.todo.delete(id);
  }

  async updateTodo(id: number, text: string) {
    return db.todo.update(id, { text: text });
  }

  async toggleTodo(id: number, completed: boolean) {
    return db.todo.update(id, { completed: completed });
  }

}
