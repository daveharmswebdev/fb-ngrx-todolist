import { LOAD_TODO_LISTS_ACTION, TodoListsLoadedAction } from './../../todo-list/todo-list.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TodoListService } from '../../todo-list/todo-list.service';

@Injectable()
export class LoadTodoListsEffectsService {
  @Effect() todoLists$: Observable<Action> = this.actions$
    .ofType(LOAD_TODO_LISTS_ACTION)
    .switchMap(action => this.todoListsService.getTodoLists(action.payload))
    .map(todoLists => new TodoListsLoadedAction(todoLists));

  constructor(
    private actions$: Actions,
    private todoListsService: TodoListService
  ) {}

}
