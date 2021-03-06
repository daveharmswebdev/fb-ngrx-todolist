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

  postNewTodoList(newTodoList) {
    const body = JSON.stringify(newTodoList);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.post(
      `${this._serviceUrl}`,
      JSON.stringify(newTodoList),
      options
    );
  }

  updateTodoList(updateData) {
    const todoListId = updateData.id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log(updateData, todoListId);
    return this.http.patch(
      `${this._serviceUrl}/${todoListId}`,
      JSON.stringify(updateData),
      options
    );
  }

  deleteTodoList(deleteData) {
    const deleteId = deleteData.id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Delete-ID', deleteId);
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(
      `${this._serviceUrl}/${deleteId}`,
      options
    );

  }
}
