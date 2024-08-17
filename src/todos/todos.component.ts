import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { IndexdbService } from '../services/indexdb.service';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
  todos: Todo[] = [];
  newTodoText = '';
  faCoffee = faCoffee;

  constructor(public db: IndexdbService) {
    // Initialize todos from local storage or API
  }

  addTodo() {
    // Add new todo logic
    console.log(`This is the new Todo Task Added ${this.newTodoText}`);
    const newTodo: Todo = {
      id: uuid(),
      text: this.newTodoText,
      completed: false
    };
    this.todos.push(newTodo);
    this.db.addTodo(JSON.stringify(newTodo));
  }

  removeTodo(id: string) {
    // Remove todo logic
  }

  toggleTodo(id: string) {
    // Toggle todo completion logic
  }
}
