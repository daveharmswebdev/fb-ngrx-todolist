import { Action } from '@ngrx/store';
import { ITodoList } from './todo-list';

export const LOAD_TODO_LISTS_ACTION = 'LOAD_TODO_LISTS_ACTION';
export const TODO_LISTS_LOADED_ACTION = 'TODO_LISTS_LOADED_ACTION';
export const ADD_NEW_TODO_LIST_ACTION = 'ADD_NEW_TODO_LIST_ACTION';
export const UPDATE_TODO_LISTS_VIEW = 'UPDATE_TODO_LISTS_VIEW';

export class AddNewTodoListAction implements Action {
  readonly type = ADD_NEW_TODO_LIST_ACTION;

  constructor(public payload: any) {}
}

export class LoadTodoListsAction implements Action {
  readonly type = LOAD_TODO_LISTS_ACTION;

  constructor(public payload: number) {}
}

export class TodoListsLoadedAction implements Action {
  readonly type = TODO_LISTS_LOADED_ACTION;

  constructor(public payload: ITodoList[]) {}
}

export class UpdateTodoListsView implements Action {
  readonly type = UPDATE_TODO_LISTS_VIEW;

  constructor(public payload: any) {}
}
