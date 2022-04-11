import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoPopupComponent} from "../popups/todo-popup/todo-popup.component";
import {TodoItem} from "../../classes/todo-item";
import {todoCreate} from "../../redux/actions/todo.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly dialog: MatDialog, private readonly store: Store) {
  }

  createTodo(): void {
    const popup = this.dialog.open(TodoPopupComponent, {
      data: new TodoItem('', ''),
      maxWidth: '500px',
      width: '100%',
      closeOnNavigation: true,
      disableClose: true
    });

    popup.afterClosed().subscribe((data: TodoItem | undefined) => {
      if (data) {
        this.store.dispatch(todoCreate({data}));
      }
    })
  }
}
