import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _trendingService:TrendingService,private _NgxSpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getTvShows();
  }

    getTvShows(){
      this._NgxSpinnerService.show();
      this._trendingService.getTrending("tv").subscribe((response)=>{
        this.tvShowsList= response.results;
      },(error)=>{alert(error)} ,
      ()=>{this._NgxSpinnerService.hide();})
}

}
