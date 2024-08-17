import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { IndexdbService } from '../services/indexdb.service';
import { Todo } from '../interfaces/todo';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
  newTodoText = '';
  faCoffee = faCoffee;

  constructor(public db: IndexdbService) {
    // Initialize todos from local storage or API
    this.db.getTodos().then((todos) => {
      console.log(todos);
    });
  }

  addTodo() {
    // Add new todo logic
    console.log(`This is the new Todo Task Added ${this.newTodoText}`);
    this.db.addTodo(this.newTodoText);
  }

  removeTodo(id: string) {
    // Remove todo logic
  }

  toggleTodo(id: string) {
    // Toggle todo completion logic
  }
}
