import { Injectable } from '@angular/core';
import { NosmenusAnglais } from 'src/app/models/nosMenusAnglais';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenusAnglaisService {

  private serviceHttp: HttpClient;

  constructor( private param_http : HttpClient) {
    this.serviceHttp = param_http;
   
   }

   public apiUrl: string = environment.ApiUrl + "menusAnglais/";



// ################## READ ################################""

   public getNosMenusAnglaisAdmin():Observable<NosmenusAnglais[]> {
     return this.serviceHttp.get(this.apiUrl).pipe(
       map(
         (data : any) => {
           return data as NosmenusAnglais[];
         }
       )
     );
   }



  public getMenusAnglais() : Observable<NosmenusAnglais[]> {
    return this.serviceHttp.get(this.apiUrl).pipe (
      map(
        (data :any)=> {
          return data as NosmenusAnglais[];

            }
         )
      );
   }

// ################## LIRE PAR ID ################################""  

      public getById(p_id : number):Observable<NosmenusAnglais>{
        return this.serviceHttp.get(this.apiUrl + p_id).pipe(
          map( 
            (data:any) =>{
              return data as NosmenusAnglais;
            }
          )
        );
      }

// ################## CREATE ################################""

      public createAssietteAnglaiseName(param_assietteAnglaiseName: NosmenusAnglais) : Observable<NosmenusAnglais>{
      return this.serviceHttp.post( this.apiUrl, param_assietteAnglaiseName).pipe(
      map(
        (param_response:any) => {
          return param_response as NosmenusAnglais;
      }
    )
  );
}

// ################## UPDATE ################################""

  public editMenusAnglais(p_id, param_assietteAnglaiseName: NosmenusAnglais):Observable<NosmenusAnglais>{
    return this.serviceHttp.put(this.apiUrl + p_id, param_assietteAnglaiseName).pipe(
      map(
        (param_response:any) => {
          return param_response as NosmenusAnglais;
        }
      )
    );
  }

  // ################## DELETE ################################""

      public deletMenusAnglais(p_id:number):Observable<boolean>{
        return this.serviceHttp.delete(this.apiUrl + p_id).pipe(
          map(
            (param_response:any) => {
              return param_response as boolean;
        }
      )
    )
  }



	/***********ANCRES***************/
  /** Fonction pour faire marcher les ancres**/
  
  public getNosMenusAnglaisAncres(p_ancre : string):Observable<NosmenusAnglais[]> {
    return this.getMenusAnglais().pipe(
      map(
        (menus : NosmenusAnglais[]) => {
          const submenuAnglais : NosmenusAnglais[] = [];

          for (let i:number = 0; i <menus.length; i++) {
            if (menus[i].category_name.indexOf(p_ancre)) {
              submenuAnglais.push(menus[i]);
            }
          }
          return submenuAnglais;
        }
      )
    );
  }

}





        
      
    
  

