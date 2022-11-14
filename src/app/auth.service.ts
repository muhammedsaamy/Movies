import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {RegisterRequest} from './register-request';
import {LoginRequest} from './login-request';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

signUp(registerData:RegisterRequest):Observable<any>
{
  return this.http.post('https://routeegypt.herokuapp.com/signup',registerData)
}

signIn(loginData:LoginRequest):Observable<any>
{
  return this.http.post('https://routeegypt.herokuapp.com/signin',loginData)
}


}
