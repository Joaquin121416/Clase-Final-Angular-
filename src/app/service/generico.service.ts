import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  constructor() { }

  protected options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
    params: new HttpParams()
};

  protected getURL() {
    return environment.url_base;
  }
}
