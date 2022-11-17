import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[],term:string): any[] {
    return trendingItems.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));

  }

}
