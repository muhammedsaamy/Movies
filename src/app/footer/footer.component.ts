import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLogin:boolean=true;
  // footerLog:any=this._AuthService.userData.getValue();

  constructor(private _AuthService:AuthService) { }



  ngOnInit(): void {
    // if(this.footerLog==null){
    //   this.isLogin=false;
    // }
  }

}
