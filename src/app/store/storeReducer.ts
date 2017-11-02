import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { AppState } from './appState';
import { ITodoList } from './../todo-list/todo-list';
import {
  AddNewTodoListAction,
  ADD_NEW_TODO_LIST_ACTION,
  TODO_LISTS_LOADED_ACTION,
  TodoListsLoadedAction
} from '../todo-list/todo-list.actions';
import {
  SINGLE_PROFILE_LOADED_ACTION,
  SingleProfileLoadedAction,
  UPDATE_PROFILE_ACTION,
  UpdateProfileAction
} from './../profile/profile.actions';

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

function handleAddNewTodoListAction(state: AppState, action: AddNewTodoListAction) {
  const newState = _.cloneDeep(state);
  const newTodoList: ITodoList = {
    id: 10,
    profileId: state.profile.id,
    listName: action.payload.listName,
    comment: action.payload.comment
  };
  console.log('new todo list', newTodoList);
  newState.todoLists.push(newTodoList);
  return newState;
}

export function storeReducer(state: AppState, action: Action) {
  switch (action.type) {
    case SINGLE_PROFILE_LOADED_ACTION:
      return handleSingleProfileLoadedAction(state, <any>action);
    case UPDATE_PROFILE_ACTION:
      return handleUpdateProfileAction(state, <any>action);
    case TODO_LISTS_LOADED_ACTION:
      return handleTodoListsLoadedAction(state, <any>action);
    case ADD_NEW_TODO_LIST_ACTION:
      return handleAddNewTodoListAction(state, <any>action);
    default:
      return state;
  }
}
