import { Action } from '@ngrx/store';
import { ITodoList } from './todo-list';

export const LOAD_TODO_LISTS_ACTION = 'LOAD_TODO_LISTS_ACTION';
export const TODO_LISTS_LOADED_ACTION = 'TODO_LISTS_LOADED_ACTION';
export const ADD_NEW_TODO_LIST_ACTION = 'ADD_NEW_TODO_LIST_ACTION';
export const UPDATE_TODO_LISTS_VIEW = 'UPDATE_TODO_LISTS_VIEW';
export const DELETE_TODOLIST_BACKEND = 'DELETE_TODOLIST_BACKEND';
export const UPDATE_TODOLIST_BACKEND = 'UPDATE_TODOLIST_BACKEND';
export const UPDATE_TODOLIST_BACKEND_SUCCESS = 'UPDATE_TODOLIST_BACKEND_SUCCESS';

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

export class DeleteTodoListBackend implements Action {
  readonly type = DELETE_TODOLIST_BACKEND;

  constructor(public payload: ITodoList) {}
}

export class UpdateTodoListBackend implements Action {
  readonly type = UPDATE_TODOLIST_BACKEND;

  constructor(public payload: ITodoList) {}
}

export class UpdateTodoListBackendSuccess implements Action {
  readonly type = UPDATE_TODOLIST_BACKEND_SUCCESS;

  constructor(public payload: any) {}
}

