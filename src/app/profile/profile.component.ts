import { UpdateProfileAction } from './profile.actions';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IProfile} from './profile';
import { AppState } from './../store/appState';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {
  @Input() profile: IProfile;
  profileForm: FormGroup;

  get updateButtonIsDisabled(): boolean {
    return !this.profileForm.dirty || !this.profileForm.valid;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.createProfileForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['profile'] && this.profile) {
      this.setProfileForm(this.profile);
    }
  }

  ngOnInit() {
    if (this.profile) {
      console.log(this.profile);
    }
  }

  setProfileForm(profile: IProfile) {
    this.profileForm.patchValue({
      id: profile.id,
      firstName: profile.firstName,
      middleName: profile.middleName || '',
      lastName: profile.lastName,
    });
  }

  createProfileForm() {
    this.profileForm = this.fb.group({
      id: [{value: '', disabled: true}, Validators.required],
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
    });
  }

  updateProfile() {
    const newProfile = this.profileForm.getRawValue();
    this.store.dispatch(new UpdateProfileAction(newProfile));
  }

}
