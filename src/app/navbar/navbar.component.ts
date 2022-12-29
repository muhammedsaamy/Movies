import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TrendingService } from '../trending.service';
TrendingService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false;


  constructor(private _auth:AuthService,private _TrendingService:TrendingService) { }

  ngOnInit(): void {
    // this._auth.userData.subscribe({
    //   next:()=>{
    //     if(this._auth.userData.getValue() != null){
    //       this.isLogin=true;
    //     }
    //     else{
    //       this.isLogin=false;
    //     }
    //   }
    // })
    this.isLogin=true;
  }

  logOut(){
    this._auth.logOut();
  }

}
