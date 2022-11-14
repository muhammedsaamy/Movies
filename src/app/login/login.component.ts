import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../login-request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.loginForm.invalid){return;}
    this._AuthService.signIn(this.loginForm.value).subscribe((data)=>{
      if(data.message=="success"){
        alert(data.message)
        this._router.navigateByUrl("/home")
      }
      else{
        alert(data.message)
      }
    })

  }

  loginForm:FormGroup=new FormGroup({
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z][0-9]{3}$/)])
  })


}
