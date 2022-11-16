import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currentId:number=0;
  movieDetails:any;
  mediaType:string='';
  imgPath:string=''
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor( private _activatedRoute:ActivatedRoute , private _TrendingService:TrendingService,private _NgxSpinnerService:NgxSpinnerService) {
    this.currentId= this._activatedRoute.snapshot.params.id
    this.mediaType= this._activatedRoute.snapshot.params.mediaType
  }

  getTrendingDetails(){
    this._NgxSpinnerService.show();
    this._TrendingService.getTrendingDetails(this.mediaType,this.currentId).subscribe((response)=>{
      this.movieDetails=response
      // console.log(response)
    },(error)=>{alert(error)} ,
    ()=>{this._NgxSpinnerService.hide();})
  }
  ngOnInit(): void {
    this.getTrendingDetails();

  }

}
