import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';
import { ITodoList } from './todo-list';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoLists: ITodoList[];
  @Output() newTodoList = new EventEmitter();
  todoListForm: FormGroup;

  get todoListArray(): FormArray {
    return this.todoListForm.get('todoListArray') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoListForm = this.fb.group({
      todoListArray: this.fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['todoLists'] && this.todoLists) {
      const todoListsGroups = this.todoLists.map(this.createTodoListGroup.bind(this));
      const todoListArray = this.fb.array(todoListsGroups);
      this.todoListForm.setControl('todoListArray', todoListArray);
    }
  }

  createTodoListGroup(todoList: ITodoList) {
    return this.fb.group({
      id: todoList.id,
      profileId: todoList.profileId,
      listName: todoList.listName,
      comment: todoList.comment
    });
  }

  addNewTodoList() {
    console.log('add*****');
    this.newTodoList.next({test: 'test'});
  }

}
