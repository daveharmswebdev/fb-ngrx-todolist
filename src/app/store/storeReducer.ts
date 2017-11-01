import { Action } from '@ngrx/store';
import { AppState } from './appState';

export function storeReducer(state: AppState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
