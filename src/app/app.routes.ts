import { Routes } from '@angular/router';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { TodosComponent } from '../todos/todos.component';

export const routes: Routes = [
  { path: 'todo', component: TodosComponent },
  { path: 'add', component: CreateTodoComponent },
  { path: 'update', component: UpdateTodoComponent },
];
