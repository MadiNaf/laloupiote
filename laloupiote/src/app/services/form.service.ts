import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from 'src/app/models/form';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  //  URL
  private apiUrl:string = environment.ApiUrl + "sendemail/";
 // injection du HttpClient dans le service 
  private serviceHttp : HttpClient;

  constructor( param_serviceHttp : HttpClient) { 
    this.serviceHttp = param_serviceHttp;
   }


   // CREATE EMAIL

    public createEmail( form : Form ) : Observable<Object> {
      return this.serviceHttp.post(this.apiUrl, form);
    }

    // RAZ de la table

    public deleteForm() : Observable<boolean> {
      return this.serviceHttp.delete(this.apiUrl).pipe (
        map(
          (dataResponse : any) => {
            return dataResponse as boolean;
          }
        )
      );
    }
 
}
