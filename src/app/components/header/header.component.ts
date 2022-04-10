import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoPopupComponent} from "../popups/todo-popup/todo-popup.component";
import {TodoItem} from "../../classes/todo-item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly dialog: MatDialog) {
  }

  createTodo(): void {
    this.dialog.open(TodoPopupComponent, {data: new TodoItem('', ''), maxWidth: '500px', width: '100%'});
  }
}
