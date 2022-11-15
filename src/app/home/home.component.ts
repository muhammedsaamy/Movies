import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _trendingService:TrendingService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getTvShows();
  }

  getMovies(){
    this._trendingService.getTrending("movie").subscribe((response)=>{
      this.moviesList= response.results;
    })
    }

    getTvShows(){
      this._trendingService.getTrending("tv").subscribe((response)=>{
        this.tvShowsList= response.results;
      })
}
}
