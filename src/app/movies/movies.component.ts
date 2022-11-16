import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _trendingService:TrendingService, private _NgxSpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this._NgxSpinnerService.show();
    this._trendingService.getTrending("movie").subscribe((response)=>{
      this.moviesList= response.results;
    },(error)=>{alert(error)},()=>{
      this._NgxSpinnerService.hide();
    })
    }

}
