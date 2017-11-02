import { Action } from '@ngrx/store';
import { ITodoList } from './todo-list';

export const LOAD_TODO_LISTS_ACTION = 'LOAD_TODO_LISTS_ACTION';

export class LoadTodoListsAction implements Action {
  readonly type = LOAD_TODO_LISTS_ACTION;

  constructor(public payload: number) {}
}
