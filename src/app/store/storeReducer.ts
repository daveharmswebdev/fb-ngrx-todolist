import {
  TODO_LISTS_LOADED_ACTION,
  TodoListsLoadedAction
} from '../todo-list/todo-list.actions';
import {
  SINGLE_PROFILE_LOADED_ACTION,
  SingleProfileLoadedAction,
  UPDATE_PROFILE_ACTION,
  UpdateProfileAction
} from './../profile/profile.actions';
import { Action } from '@ngrx/store';
import { AppState } from './appState';
import * as _ from 'lodash';

function handleTodoListsLoadedAction(state: AppState, action: TodoListsLoadedAction) {
  const newState = _.cloneDeep(state);
  newState.todoLists = action.payload;
  return newState;
}

function handleSingleProfileLoadedAction(state: AppState, action: SingleProfileLoadedAction) {
  return Object.assign({}, state, {
    profile: action.payload
  });
}

function handleUpdateProfileAction(state: AppState, action: UpdateProfileAction) {
  return Object.assign({}, state, {
    profile: action.payload
  });
}

export function storeReducer(state: AppState, action: Action) {
  switch (action.type) {
    case SINGLE_PROFILE_LOADED_ACTION:
      return handleSingleProfileLoadedAction(state, <any>action);
    case UPDATE_PROFILE_ACTION:
      return handleUpdateProfileAction(state, <any>action);
    case TODO_LISTS_LOADED_ACTION:
      return handleTodoListsLoadedAction(state, <any>action);
    default:
      return state;
  }
}
