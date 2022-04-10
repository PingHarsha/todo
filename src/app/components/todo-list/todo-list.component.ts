import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private readonly todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(data => {
      console.log(data);
    })
  }


}
