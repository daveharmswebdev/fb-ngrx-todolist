import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { TodoListService } from './todo-list/todo-list.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeReducer } from './store/storeReducer';
import { INIITAL_APP_STATE } from './store/appState';
import { UpdateProfileEffectsService } from './store/effects/update-profile-effects.service';
import { LoadSingleProfileEffectService } from './store/effects/load-single-profile-effect.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoadTodoListsEffectsService } from './store/effects/load-todo-lists-effects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(storeReducer, INIITAL_APP_STATE),
    EffectsModule.run(LoadSingleProfileEffectService),
    EffectsModule.run(UpdateProfileEffectsService),
    EffectsModule.run(LoadTodoListsEffectsService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    ProfileService,
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
