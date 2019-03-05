import { Injectable } from '@angular/core';

import { InfoContact } from 'src/app/models/info-contact';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { map, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoContactService {

	private serviceHttp: HttpClient;

	constructor( private param_http: HttpClient) {
		this.serviceHttp = param_http;
	}

	public apiUrl: string = environment.ApiUrl;

//  ########################### GET ( READ ) ###########################
	public getInfoContact(): Observable <InfoContact>{
		return this.serviceHttp.get( this.apiUrl + "infocontact").pipe(
			map( (data: any) => {

				let infosContact: InfoContact = new InfoContact();

				infosContact.id = data[0].id;
				infosContact.email = data[0].email;
				infosContact.telephone = data[0].telephone;

				return infosContact; 
			})
		)
	}

//  ########################### POST ( CREATE ) ###########################
	addInfo(infoContact: InfoContact): Observable<InfoContact>{
		return this.serviceHttp.post<InfoContact>( this.apiUrl + "infocontact", infoContact).pipe();
	}

//  ########################### PUT ( UPDATE ) ###########################
	updateInfo(infoContact: InfoContact): Observable<InfoContact>{
		return this.serviceHttp.put<InfoContact>( this.apiUrl + "infocontact/" + infoContact.id, infoContact).pipe();
	}
//  ########################### DELETE ( DELETE ) ###########################
	deleteInfo(id: number): Observable<{}>{
		return this.serviceHttp.delete( this.apiUrl  + "infocontact" + "/"+id).pipe();
	}
}
