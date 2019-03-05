import { Pipe, PipeTransform } from '@angular/core';
import { Boissons } from '../models/boisson';
import { environment } from 'src/environments/environment';

 
@Pipe({
  name: 'boissonscat'
})
export class BoissonsPipe implements PipeTransform {

  transform(value: Boissons[], args?: any[]): Array<Boissons[]> {
    const results: Array<Boissons[]> = [];
    const results2:Array<Boissons[]> = [];
    let i:number = 0

    for( i = 0 ; i < value.length; i++ ){

      let index:number = value[i].category_boisson_id;
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
