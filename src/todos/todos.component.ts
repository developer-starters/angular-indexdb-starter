import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
todos: Todo[] = [];
  newTodoText = '';
  faCoffee = faCoffee;

  addTodo() {
    // Add new todo logic
  }

  removeTodo(id: number) {
    // Remove todo logic
  }

  toggleTodo(id: number) {
    // Toggle todo completion logic
  }
}
