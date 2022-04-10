import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoItem} from "../../../classes/todo-item";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-popup',
  templateUrl: './todo-popup.component.html',
  styleUrls: ['./todo-popup.component.scss']
})
export class TodoPopupComponent {

  todoForm: FormGroup;

  get title(): FormControl {
    return this.todoForm.get('title') as FormControl
  }

  get description(): FormControl {
    return this.todoForm.get('description') as FormControl
  }

  constructor(private dialogRef: MatDialogRef<TodoPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TodoItem,
              private readonly fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.title.patchValue(this.data.title);
    this.description.patchValue(this.data.description);
  }



}
