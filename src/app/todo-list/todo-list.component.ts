import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITodoList } from './todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoLists: ITodoList[];

  constructor() { }

  ngOnInit() {
    console.log('on init', this.todoLists);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['todoLists'] && this.todoLists) {
      console.log('on change', this.todoLists);
    }
  }

}
