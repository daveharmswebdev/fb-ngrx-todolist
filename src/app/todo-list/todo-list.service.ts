import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoListService {
  private _serviceUrl = 'http://localhost:3000/todolists';

  constructor(private http: Http) { }

  getTodoLists(profileId) {
    return this.http.get(`${this._serviceUrl}?profileId=${profileId}`)
    .map(todoLists => todoLists.json());
  }
}
