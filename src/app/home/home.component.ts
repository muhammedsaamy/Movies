import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplaySpeed:200,
    autoplay:true,
    margin:10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  moviesList:any[]=[];
  tvShowsList:any[]=[];
  imgBaseurl:string="https://image.tmdb.org/t/p/original";
  term='';
  // pic:string='./node_modules/assets/images/movies.png'
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
