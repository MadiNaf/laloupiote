import { Injectable } from '@angular/core';
import { CategoryNosmenus } from 'src/app/models/categoryNosmenus';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryNosmenusService {

  private serviceCategoryBoissonHttp : HttpClient;

  constructor(private param_http : HttpClient) {
    this.serviceCategoryBoissonHttp = param_http;
   }

   public dataCategoryBoissonUrl : string = "src/app/assets/datas/categoryNosmenus.json";

   public getCategoryBoisson() : Observable<CategoryNosmenus[]> {
     return this.serviceCategoryBoissonHttp.get(this.dataCategoryBoissonUrl).pipe(
       map( (dataCategoryBoisson : any) => {

        let categoryBoissonTab : any = new Array();

        for(let i = 0; i < dataCategoryBoisson.categoryBoissons.length; i++) {

          let MyCategoryBoisson: CategoryNosmenus = new CategoryNosmenus();

          MyCategoryBoisson.categoryNosmenusName = dataCategoryBoisson.categoryBoissons[i];

          categoryBoissonTab[i] = MyCategoryBoisson;
        }  

          return categoryBoissonTab;
       }
       )
     ) 
   }

  }
