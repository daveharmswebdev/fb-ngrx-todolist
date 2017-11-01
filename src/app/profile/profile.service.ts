import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProfile } from './profile';

const testProfile: IProfile = {
  id: 1,
  firstName: 'Dave',
  middleName: 'Cheese',
  lastName: 'Barns'
};

@Injectable()


export class ProfileService {
  private _serviceUrl = 'http://localhost:3000/profiles';

  constructor(private http: Http) { }

  getProfile(): Observable<IProfile> {
    return this.http.get(`${this._serviceUrl}/1`)
    .map(profile => profile.json());
  }

}
