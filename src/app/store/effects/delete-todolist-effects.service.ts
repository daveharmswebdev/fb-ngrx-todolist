import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TodoListService } from './../../todo-list/todo-list.service';
import {
  DELETE_TODOLIST_BACKEND,
  DeleteTodoListBackendSuccess
} from './../../todo-list/todo-list.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../appState';
import { parseFromUrl } from '../../shared/parseIdFromUrl';

@Injectable()
export class DeleteTodoListEffectsService {
  @Effect() todoList$: Observable<any> = this.actions$
    .ofType(DELETE_TODOLIST_BACKEND)
    .switchMap(action => this.todoListService.deleteTodoList(action.payload))
    .map(response => parseFromUrl(response.url))
    .debug('headers')
    .map(id => new DeleteTodoListBackendSuccess(id));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}
}
