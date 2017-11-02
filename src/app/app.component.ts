import { LoadTodoListsAction } from './todo-list/todo-list.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './store/appState';
import { ITodoList } from './todo-list/todo-list';
import { IProfile } from './profile/profile';
import { LoadSingleProfileAction } from './profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile$: Observable<IProfile>;
  todoLists$: Observable<ITodoList>;
  title = 'app';

  constructor(private store: Store<AppState>) {
    this.profile$ = this.store.select('profile');
    this.todoLists$ = this.store.select('todoLists');
  }

  ngOnInit() {
    this.store.dispatch(new LoadSingleProfileAction());
    this.profile$.skip(1).take(1).subscribe(
      profile => {
        if (profile) {
          this.store.dispatch(new LoadTodoListsAction(profile.id));
        }
      }
    );
  }

}
