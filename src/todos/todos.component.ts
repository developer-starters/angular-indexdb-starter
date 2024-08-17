import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { IndexdbService } from '../services/indexdb.service';
import { Todo } from '../interfaces/todo';
import { liveQuery } from 'dexie';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
  newTodoText = '';
  faCoffee = faCoffee;
  todos$;

  constructor(public db: IndexdbService) {
    // Initialize todos from local storage or API
    this.db.getTodos().then((todos) => {
      console.log(todos);
    });
    this.todos$ = liveQuery(() => this.db.getTodos());
  }

  identifyList(index: number, list: Todo) {
    return `${list.id}${list.text}`;
  }

  addTodo() {
    // Add new todo logic
    console.log(`This is the new Todo Task Added ${this.newTodoText}`);
    this.db.addTodo(this.newTodoText);
    this.newTodoText = '';
  }

  removeTodo(id: number) {
    // Remove todo logic
    this.db.deleteTodo(id);
  }

  toggleTodo(id: string) {
    // Toggle todo completion logic
  }
}
