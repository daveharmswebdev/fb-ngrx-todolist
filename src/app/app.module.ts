import { LoadSingleProfileEffectService } from './store/effects/load-single-profile-effect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeReducer } from './store/storeReducer';
import { INIITAL_APP_STATE } from './store/appState';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(storeReducer, INIITAL_APP_STATE),
    EffectsModule.run(LoadSingleProfileEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
