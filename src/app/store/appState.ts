import { ITodoList } from './../todo-list/todo-list';
import { IProfile } from './../profile/profile';

export interface AppState {
  profile: IProfile;
  todoLists: ITodoList[];
}

export const INIITAL_APP_STATE: AppState = {
  profile: undefined,
  todoLists: undefined
};
