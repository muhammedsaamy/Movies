import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people:any;
  imgBaseurl:string="https://image.tmdb.org/t/p/original";

  constructor(private _TrendingService:TrendingService) { }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople(){
    this._TrendingService.getTrending("person").subscribe((response)=>{
      this.people= response.results;
    })
}

}
