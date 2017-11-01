import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProfileService } from '../../profile/profile.service';
import { UPDATE_PROFILE_ACTION } from './../../profile/profile.actions';

@Injectable()
export class UpdateProfileEffectsService {
  @Effect() profile$: Observable<any> = this.actions$
    .ofType(UPDATE_PROFILE_ACTION)
    .switchMap(action => this.profileService.updateProfile(action.payload))
    .catch(() => Observable.of({'message': 'error'}));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

}
