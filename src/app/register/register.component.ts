import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup=new FormGroup(
  {
    "frist_name": new FormControl(null),
    "last_name": new FormControl(null),
    "age": new FormControl(null),
    "email": new FormControl(null),
    "password": new FormControl(null),
  }

)


  constructor() { }

  ngOnInit(): void {
  }

}
