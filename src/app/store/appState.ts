import { IProfile } from './../profile/profile';

export interface AppState {
  profile: IProfile;
}

export const INIITAL_APP_STATE: AppState = {
  profile: undefined
};
