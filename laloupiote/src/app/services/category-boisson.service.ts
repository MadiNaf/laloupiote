import { Injectable } from '@angular/core';
import { CategoryBoisson } from 'src/app/models/categoryBoisson';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryBoissonService {

  private serviceCategoryBoissonHttp : HttpClient;

  constructor(private param_http : HttpClient) {
    this.serviceCategoryBoissonHttp = param_http;
   }

   public dataCategoryBoissonUrl : string = "src/app/assets/datas/categoryBoisson.json";

   public getCategoryBoisson() : Observable<CategoryBoisson[]> {
     return this.serviceCategoryBoissonHttp.get(this.dataCategoryBoissonUrl).pipe(
       map( (dataCategoryBoisson : any) => {

        let categoryBoissonTab : any = new Array();

        for(let i = 0; i < dataCategoryBoisson.categoryBoissons.length; i++) {

          let MyCategoryBoisson: CategoryBoisson = new CategoryBoisson();

          MyCategoryBoisson.categoryDrinkName = dataCategoryBoisson.categoryBoissons[i];

          categoryBoissonTab[i] = MyCategoryBoisson;
        }  

          return categoryBoissonTab;
       }
       )
     ) 
   }

  }

