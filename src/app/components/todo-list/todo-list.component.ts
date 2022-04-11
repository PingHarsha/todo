import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getAllTodos} from "../../redux/selectors/todo.selectors";
import {todoGetAll} from "../../redux/actions/todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    // Action to get all TodoItems
    this.store.dispatch(todoGetAll());
    this.store.select(getAllTodos);
  }
}
