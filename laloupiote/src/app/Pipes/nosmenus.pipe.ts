import { Pipe, PipeTransform } from '@angular/core';
import { Nosmenus } from 'src/app/models/nosmenus';



@Pipe({
  name: 'nosmenus'
})
export class NosmenusPipe implements PipeTransform {

  transform(value: Nosmenus[], args?: any): Array<Nosmenus[]> {
    const results: Array<Nosmenus[]> = [];
    const results2:Array<Nosmenus[]> = [];
    let i:number = 0;

    for( i = 0 ; i < value.length; i++ ){

      let index:number = value[i].category_id;
      if( results[index] ==undefined ){
        results[index] = [];
      }
      
      results[index].push(value[i]);
    }

    for( i = 0; i < results.length; i++){
      if( results[i] == undefined || results[i].length == 0 )
        continue;

      results2.push(results[i]);
    }
    return results2;
  }
}