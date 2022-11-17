import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";
  term=''
  constructor(private _trendingService:TrendingService, private _NgxSpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getTvShows();
  }

  getMovies(){
    this._NgxSpinnerService.show();
    this._trendingService.getTrending("movie").subscribe((response)=>{
      this.moviesList= response.results;
    },(error)=>{alert(error)} ,
    ()=>{setTimeout(()=>{this._NgxSpinnerService.hide()},3000)})

    }

    getTvShows(){
      this._trendingService.getTrending("tv").subscribe((response)=>{
        this.tvShowsList= response.results;
      })
}
}
