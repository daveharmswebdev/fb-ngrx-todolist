import { Action } from '@ngrx/store';
import { IProfile } from './profile';

export const LOAD_SINGLE_PROFILE_ACTION = 'LOAD_SINGLE_PROFILE_ACTION';
export const SINGLE_PROFILE_LOADED_ACTION = 'SINGLE_PROFILE_LOADED_ACTION';
export const UPDATE_PROFILE_ACTION = 'UPDATE_PROFILE_ACTION';

export class LoadSingleProfileAction implements Action {
  readonly type = LOAD_SINGLE_PROFILE_ACTION;
}

export class SingleProfileLoadedAction implements Action {
  readonly type = SINGLE_PROFILE_LOADED_ACTION;

  constructor(public payload: IProfile) {}
}

export class UpdateProfileAction implements Action {
  readonly type = UPDATE_PROFILE_ACTION;

  constructor(public payload: IProfile) {}
}
