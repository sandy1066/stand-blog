import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient) { }

  getPosts()
  {
    let apiUrl="https://api.mocki.io/v1/ba2ea350";
    return this.http.get(apiUrl);
  }
}
