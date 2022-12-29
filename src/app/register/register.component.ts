import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading:boolean=false;
  submitForm(){
    // this.isLoading=true;
    if(this.registerForm.invalid){return;}
    // this._AuthService.signUp(this.registerForm.value).subscribe((data)=>{
    //   if(data.message=="success"){
    //     this.isLoading=false;
    //     alert(data.message)
    //     this._router.navigateByUrl("/login")
    //   }
    //   else{
    //     this.isLoading=false;
    //     alert(data.message)
    //   }
    // })
  }

registerForm:FormGroup=new FormGroup(
  {
    "first_name": new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
    "last_name": new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
    "age": new FormControl(null,[Validators.required,Validators.min(10), Validators.max(50)]),
    "email": new FormControl(null,[Validators.required,Validators.email]),
    "password": new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z][0-9]{3}$/)]),
  }

)


  constructor( private _AuthService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

}
