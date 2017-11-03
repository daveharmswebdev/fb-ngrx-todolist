import {
  UPDATE_TODO_LISTS_VIEW,
  UpdateTodoListsView,
  UPDATE_TODOLIST_BACKEND_SUCCESS,
  UpdateTodoListBackendSuccess,
  UpdateTodoListBackend,
  DELETE_TODOLIST_BACKEND_SUCCESS,
  DeleteTodoListBackendSuccess
} from './../todo-list/todo-list.actions';
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

function handleUpdateTodoListsView(state: AppState, action: UpdateTodoListsView) {
  const newState = _.cloneDeep(state);
  const newTodoList: ITodoList = {
    id: action.payload.id,
    profileId: action.payload.profileId,
    listName: action.payload.listName,
    comment: action.payload.comment
  };
  newState.todoLists.push(newTodoList);
  return newState;
}

function handleUpdateTodoListBackendSuccess(state: AppState, action: UpdateTodoListBackendSuccess) {
  const index = state.todoLists.findIndex(element => element.id === action.payload.id);
  const newState = _.cloneDeep(state);
  newState.todoLists[index] = action.payload;

  return newState;
}

function handleDeleteTodoListBackendSuccess(state: AppState, action: DeleteTodoListBackendSuccess) {
  console.log(action.payload);
  const index = state.todoLists.findIndex(element => element.id === action.payload);
  const newState = _.cloneDeep(state);
  console.log('what i want to splice', newState.todoLists[index]);
  newState.todoLists.splice(index, 1);

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
    case UPDATE_TODO_LISTS_VIEW:
      return handleUpdateTodoListsView(state, <any>action);
    case UPDATE_TODOLIST_BACKEND_SUCCESS:
      return handleUpdateTodoListBackendSuccess(state, <any>action);
    case DELETE_TODOLIST_BACKEND_SUCCESS:
      return handleDeleteTodoListBackendSuccess(state, <any>action);
    default:
      return state;
  }
}
