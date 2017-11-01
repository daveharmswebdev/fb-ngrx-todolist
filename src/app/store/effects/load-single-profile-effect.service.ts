import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProfileService } from '../../profile/profile.service';
import { LOAD_SINGLE_PROFILE_ACTION, SingleProfileLoadedAction } from './../../profile/profile.actions';

@Injectable()
export class LoadSingleProfileEffectService {
  @Effect() profile$: Observable<Action> = this.actions$
    .ofType(LOAD_SINGLE_PROFILE_ACTION)
    .switchMap(() => this.profileService.getProfile())
    .map(profile => new SingleProfileLoadedAction(profile));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

}
