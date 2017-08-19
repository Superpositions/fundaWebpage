import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CONSTANTS } from '../../environments/constants';

@Injectable()
export class DataService {
  constructor(private _http: Http) {}

  // Handling error
  private _serverError(err: any) {
    return Observable.throw(err || 'backend server error');
  }

  // Fetch data from API
  loadDetails(): Observable<any> {
    return this._http
      .get(CONSTANTS.BASE_URL + CONSTANTS.APIKEY + '/koop/' + CONSTANTS.DEMO_ID)
      .map(res => res.json())
      .catch(err => this._serverError(err));
  }
}
