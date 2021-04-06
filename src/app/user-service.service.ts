import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient) { }

  getData()
  {
    let apiUrl="https://api.mocki.io/v1/24bc60c6";
    return this.http.get(apiUrl);
  }
}
