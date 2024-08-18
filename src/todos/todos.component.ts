import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { IndexdbService } from '../services/indexdb.service';
import { Todo } from '../interfaces/todo';
import { liveQuery } from 'dexie';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTodoModalComponent } from '../update-todo-modal/update-todo-modal.component';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule, UpdateTodoModalComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.sass'
})
export class TodosComponent {
  newTodoText = '';
  faCoffee = faCoffee;
  todos$;

  constructor(public db: IndexdbService, private dialog: MatDialog) {
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

  toggleTodo(todo: Todo) {
    // Toggle todo completion logic
    todo.id ? this.db.toggleTodo(todo.id, !todo.completed) : undefined;
  }

  openModal(todo: Todo) {
    const dialogRef = this.dialog.open(UpdateTodoModalComponent, {
      panelClass: 'dialog-centered',
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        todo.id ? this.db.updateTodo(todo.id, result) : undefined;
      }
    });
  }
}
