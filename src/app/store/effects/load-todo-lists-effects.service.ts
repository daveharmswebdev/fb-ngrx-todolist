import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TodoListService } from '../../todo-list/todo-list.service';

@Injectable()
export class LoadTodoListsEffectsService {

  constructor(
    private actions$: Actions,
    private todoListsService: TodoListService
  ) {}
}
