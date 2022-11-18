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
  pageNum:number=1
  constructor(private _trendingService:TrendingService, private _NgxSpinnerService:NgxSpinnerService) { }
  getPaginatedData(pageNumber:number){
    this.pageNum=pageNumber;
    this._trendingService.getTrendingPaginatedItems('movie',pageNumber).subscribe((response)=>{
      this.moviesList= response.results;
    },(error)=>{alert(error)},()=>{
      this._NgxSpinnerService.hide();
    })
  }
  prev(){
    if(this.pageNum>1){
    this.pageNum--;
    this.getPaginatedData(this.pageNum)
    }
  }
  next(){
    if(this.pageNum<5){
      this.pageNum++;
      this.getPaginatedData(this.pageNum)
      }
    }

  ngOnInit(): void {
    this.getPaginatedData(1);
    // this.getMovies();
  }

  // getMovies(){
  //   this._NgxSpinnerService.show();
  //   this._trendingService.getTrending("movie").subscribe((response)=>{
  //     this.moviesList= response.results;
  //   },(error)=>{alert(error)},()=>{
  //     this._NgxSpinnerService.hide();
  //   })
  //   }

}
