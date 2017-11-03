import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import * as R from 'ramda';

import { AppState } from '../appState';
import { ITodoList } from '../../todo-list/todo-list';
import {
  AddNewTodoListAction,
  ADD_NEW_TODO_LIST_ACTION,
  TODO_LISTS_LOADED_ACTION,
  TodoListsLoadedAction,
  UPDATE_TODO_LISTS_VIEW,
  UpdateTodoListsView,
  DELETE_TODOLIST_BACKEND,
  DeleteTodoListBackend,
  UPDATE_TODOLIST_BACKEND_SUCCESS,
  UpdateTodoListBackend
} from '../../todo-list/todo-list.actions';

function handleUpdateTodoListBackendSuccess(state: AppState, action: UpdateTodoListBackend) {
  const index = R.findIndex(R.propEq('id', action.payload.id))(state.todoLists);
  console.log(index);

  return state;
}

export function todoReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case UPDATE_TODOLIST_BACKEND_SUCCESS:
      return handleUpdateTodoListBackendSuccess(state, <any>action);
    default:
      return state;
  }
}
