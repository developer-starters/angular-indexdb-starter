import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from '../create-todo/create-todo.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
  { path: 'add', component: CreateTodoComponent },
  { path: 'edit', component: CreateTodoComponent },
];
