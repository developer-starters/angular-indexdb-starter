import { Component } from '@angular/core';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
todos: Todo[] = [];
  newTodoText = '';

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
