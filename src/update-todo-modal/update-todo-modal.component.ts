import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../interfaces/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-todo-modal',
  standalone: true,
  imports: [MatDialogModule, FormsModule],
  templateUrl: './update-todo-modal.component.html',
  styleUrl: './update-todo-modal.component.sass',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UpdateTodoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateTodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) {
      console.log(JSON.stringify(data));
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
