import { Action } from '@ngrx/store';
import { ITodoList } from './todo-list';

export const LOAD_TODO_LISTS_ACTION = 'LOAD_TODO_LISTS_ACTION';
export const TODO_LISTS_LOADED_ACTION = 'TODO_LISTS_LOADED_ACTION';

export class LoadTodoListsAction implements Action {
  readonly type = LOAD_TODO_LISTS_ACTION;

  constructor(public payload: number) {}
}

export class TodoListsLoadedAction implements Action {
  readonly type = TODO_LISTS_LOADED_ACTION;

  constructor(public payload: ITodoList[]) {}
}
