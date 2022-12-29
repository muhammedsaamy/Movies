import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {RegisterRequest} from './register-request';
import {LoginRequest} from './login-request';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData= new BehaviorSubject(null);
saveUserData(){
  let encodedData=JSON.stringify( localStorage.getItem('userToken'));
  let decodeToken:any=jwtDecode(encodedData);
  this.userData.next(decodeToken);
}

  constructor(private http:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }

signUp(registerData:RegisterRequest):Observable<any>
{
  return this.http.post('https://routeegypt.herokuapp.com/signup',registerData)
}

signIn(loginData:LoginRequest):Observable<any>
{
  return this.http.post('https://routeegypt.herokuapp.com/signin',loginData)
}
logOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
// this._router.navigateByUrl('/login')
this._router.navigateByUrl('/home')
}

}
