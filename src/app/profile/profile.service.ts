import { Injectable } from '@angular/core';
import { IProfile } from './profile';
import { Observable } from 'rxjs/Observable';

const testProfile: IProfile = {
  id: '1a',
  firstName: 'Dave',
  middleName: 'Cheese',
  lastName: 'Barns'
};

@Injectable()


export class ProfileService {

  constructor() { }

  getProfile() {
    return Observable.of(testProfile);
  }

}
