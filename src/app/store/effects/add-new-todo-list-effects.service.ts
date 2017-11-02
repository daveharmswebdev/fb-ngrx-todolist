import { IProfile } from './../../profile/profile';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TodoListService } from './../../todo-list/todo-list.service';
import { ADD_NEW_TODO_LIST_ACTION } from './../../todo-list/todo-list.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../appState';

@Injectable()
export class AddNewTodoListEffectsService {
  @Effect() todoLists$: Observable<any> = this.actions$
    .ofType(ADD_NEW_TODO_LIST_ACTION)
    .withLatestFrom(this.store.select('profile'))
    .do(val => console.log(val))
    .switchMap(([action, profile]: [Action, IProfile]) => this.todoListService.postNewTodoList({
      profileId: profile.id,
      listName: action.payload.listName,
      comment: action.payload.comment
    }))
    .catch(() => Observable.of({'message': 'error'}));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}

}
