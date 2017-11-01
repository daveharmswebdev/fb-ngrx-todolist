import {
  SINGLE_PROFILE_LOADED_ACTION,
  SingleProfileLoadedAction,
  UPDATE_PROFILE_ACTION,
  UpdateProfileAction
} from './../profile/profile.actions';
import { Action } from '@ngrx/store';
import { AppState } from './appState';

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
    default:
      return state;
  }
}
