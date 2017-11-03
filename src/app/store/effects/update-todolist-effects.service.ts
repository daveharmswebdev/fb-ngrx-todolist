import { IProfile } from './../../profile/profile';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TodoListService } from './../../todo-list/todo-list.service';
import {
  ADD_NEW_TODO_LIST_ACTION,
  UpdateTodoListsView,
  UPDATE_TODOLIST_BACKEND,
  UpdateTodoListBackendSuccess
} from './../../todo-list/todo-list.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../appState';

@Injectable()
export class UpdateTodoListEffectsService {
  @Effect() todoList$: Observable<any> = this.actions$
    .ofType(UPDATE_TODOLIST_BACKEND)
    .switchMap(action => this.todoListService.updateTodoList(action.payload))
    .map(response => response.json())
    .debug('updated backend')
    .map(response => new UpdateTodoListBackendSuccess(response));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}
}
