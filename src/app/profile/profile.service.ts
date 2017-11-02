import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProfile } from './profile';

@Injectable()
export class ProfileService {
  private _serviceUrl = 'http://localhost:3000/profiles';

  constructor(private http: Http) { }

  getProfile(): Observable<IProfile> {
    return this.http.get(`${this._serviceUrl}/1`)
    .map(profile => profile.json());
  }

  updateProfile(newProfile: IProfile) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.patch(
      `${this._serviceUrl}/1`,
      JSON.stringify(newProfile),
      options
    );
  }

}
