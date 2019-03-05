import { Pipe, PipeTransform } from '@angular/core';
import { NosmenusAnglais } from 'src/app/models/nosMenusAnglais';

@Pipe({
  name: 'menusAnglais'
})
export class MenusAnglaisPipe implements PipeTransform {

  transform(value: NosmenusAnglais[], args?: any): Array<NosmenusAnglais[]> {
    const results : Array<NosmenusAnglais[]> = [];
    const results2 : Array<NosmenusAnglais[]> = [];
    let i : number = 0;

    for (i = 0 ; i <value.length; i++){
      let index : number = value[i].category_id;
      if(results[index]==undefined){
        results[index] = [];
      }

      results[index].push(value[i]);
    }

    for (i = 0; i < results.length; i++){
      if( (results[i])==undefined || results[i].length == 0 )
      continue; 

      results2.push(results[i]);
    }
  

    return results2;

  }

}
