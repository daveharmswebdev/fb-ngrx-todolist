import { SINGLE_PROFILE_LOADED_ACTION, SingleProfileLoadedAction } from './../profile/profile.actions';
import { Action } from '@ngrx/store';
import { AppState } from './appState';

function handleSingleProfileLoadedAction(state: AppState, action: SingleProfileLoadedAction) {
  return Object.assign({}, state, {
    profile: action.payload
  });
}

export function storeReducer(state: AppState, action: Action) {
  switch (action.type) {
    case SINGLE_PROFILE_LOADED_ACTION:
      return handleSingleProfileLoadedAction(state, <any>action);
    default:
      return state;
  }
}
