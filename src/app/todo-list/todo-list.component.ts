import { TodoListService } from './todo-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.getTodoLists(1)
    .subscribe(todoLists => {
      console.log(todoLists);
    });
  }

}
