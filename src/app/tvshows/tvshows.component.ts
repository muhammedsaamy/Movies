import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _trendingService:TrendingService) { }

  ngOnInit(): void {
    this.getTvShows();
  }

    getTvShows(){
      this._trendingService.getTrending("tv").subscribe((response)=>{
        this.tvShowsList= response.results;
      })
}

}
