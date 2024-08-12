import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexdbService } from '../services/indexdb.service';
import { TodosComponent } from "../todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  constructor(private indexDb: IndexdbService){

  }

  ngOnInit(): void {
    this.indexDb.connectToDb();
  }

  title = 'Angular With IndexDB';
}
