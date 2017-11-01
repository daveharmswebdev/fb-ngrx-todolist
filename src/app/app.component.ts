import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './store/appState';
import { IProfile } from './profile/profile';
import { LoadSingleProfileAction } from './profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile$: Observable<IProfile>;
  title = 'app';

  constructor(private store: Store<AppState>) {
    this.profile$ = this.store.select('profile');
  }

  ngOnInit() {
    this.store.dispatch(new LoadSingleProfileAction());
    this.profile$.subscribe(
      profile => console.log(profile)
    );
  }
}
