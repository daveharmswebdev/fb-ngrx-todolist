import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { IProfile} from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile$: Observable<IProfile>;
  profileForm: FormGroup;

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.profile$ = this.profileService.getProfile();
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      id: '',
      firstName: '',
      middleName: '',
      lastName: ''
    });
  }

}
