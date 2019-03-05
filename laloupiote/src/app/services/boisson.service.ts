import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boissons } from'src/app/models/boisson';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

// Inject HttpClient into the service
  private serviceHttp : HttpClient;

  public boissons : Boissons[];
    
  constructor( param_http : HttpClient) {

    this.serviceHttp = param_http;
    
   }

 //  CREATION API URL PARTIE BACK END
 public apiUrl:string = environment.ApiUrl + "boissons/";

  
  //-----------------TOUT LIRE-------------------------------  
  


   public getDrink(): Observable<Boissons[]> {
     return this.serviceHttp.get(this.apiUrl).pipe(
       map( 
         (dataBoisson:any) => {

        let boissonTab:any = new Array();
      
        for(let i = 0; i < dataBoisson.length; i++) {

         
          let myBoisson:Boissons = new Boissons();

          myBoisson.id           = dataBoisson[i].id;
          myBoisson.categoryName = dataBoisson[i].categoryName;
          myBoisson.category     = dataBoisson[i].category;
          myBoisson.name         = dataBoisson[i].name;
          myBoisson.quantities_1 = dataBoisson[i].quantities_1;
          myBoisson.quantities_2 = dataBoisson[i].quantities_2;
          myBoisson.quantities_3 = dataBoisson[i].quantities_3;

          myBoisson.price_1 = dataBoisson[i].price_1;
          myBoisson.price_2 = dataBoisson[i].price_2;
          myBoisson.price_3 = dataBoisson[i].price_3;

          myBoisson.category_boisson_id = dataBoisson[i].category_boisson_id;

          boissonTab[i] = myBoisson;
        }
        return boissonTab;
      })
    ) 
  }



  //-----------------LIRE PAR ID-------------------------------  

    public getById(p_id : number):Observable<Boissons>{
      return this.serviceHttp.get(this.apiUrl + p_id).pipe(
        map( 
          (param_Boisson:any) =>{
            return param_Boisson as Boissons;
          }
        )
      );
    }

  //-----------------AJOUTER UNE DONNEE-------------------------------  

    public createBoisson(p_boisson : Boissons) : Observable<Boissons>{
      return this.serviceHttp.post<Boissons>( this.apiUrl , p_boisson).pipe(
        map(
          (param_Boisson:any) => {
            return param_Boisson as Boissons;
          }
        )
      );
    }

    //-----------------EDITER UNE DONNEE-------------------------------  

    public editBoisson(p_id:number, p_boisson : Boissons):Observable<Boissons>{
      return this.serviceHttp.put(this.apiUrl +  p_id, p_boisson).pipe(
        map(
          (param_Boisson:any) => {
            return param_Boisson as Boissons;
          }
        )
      )
    }

//-----------------SUPPRIMER UNE DONNEE-------------------------------  

    public deleteBoisson(p_id:number):Observable<boolean>{
      return this.serviceHttp.delete(this.apiUrl + p_id).pipe(
        map(
          (param_Boisson:any) => {
            return param_Boisson as boolean;
          }
        )
      )
    }

   /***********ANCRES***************/
	/** Fonction pour faire marcher les ancres**/
	public getNosmenusSelonancres(p_ancre:string): Observable<Boissons[]> {
		
    return this.getDrink().pipe(
      map(
        ( boissons:Boissons[]) => {
          const submenu:Boissons[] = [];

          for( let i:number = 0; i < boissons.length; i++ ){
            if( boissons[i].categoryName.indexOf(p_ancre) ){
              submenu.push(boissons[i]);
            }
          }

          return submenu;
        }
      )
    );
}


}


