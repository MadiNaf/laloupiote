import { Injectable } from '@angular/core';
import { Horaires } from 'src/app/models/horaires';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { map, first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HorairesService {

	private serviceHttp: HttpClient;
	 
	constructor( private param_http: HttpClient) {
		this.serviceHttp = param_http;
	}

//  ########################### GET ( READ ) ###########################
	public apiUrl: string = environment.ApiUrl;

	public getHoraires(): Observable <Horaires[]>{
		return this.serviceHttp.get( this.apiUrl + "horaires").pipe(
			map( (data: any) => {

				let horaireTab: any = new Array();
				console.log(data.length);
				console.log( "toute les données", data)

				for( let i = 0; i < data.length; i++){
					let myHoraires: Horaires = new Horaires();

					myHoraires.day =  data[i].day

					myHoraires.hm_opening =  data[i].hm_opening;
					myHoraires.mm_opening =  data[i].mm_opening;

					myHoraires.hm_closing =  data[i].hm_closing;
					myHoraires.mm_closing =  data[i].mm_closing;

					myHoraires.ha_opening =  data[i].ha_opening;
					myHoraires.ma_opening =  data[i].ma_opening;

					myHoraires.ha_closing =  data[i].ha_closing;
					myHoraires.ma_closing =  data[i].ma_closing;

					myHoraires.m_state =  data[i].m_state;
					myHoraires.a_state =  data[i].a_state;

					horaireTab[i] = myHoraires;
				}

				return horaireTab;
			})
		)
	}

//  ########################### POST ( CREATE ) ###########################
	public addHoraires( param_horaire: Horaires): Observable<Horaires>{
		return this.serviceHttp.post<Horaires>( this.apiUrl + "horaires", param_horaire).pipe();
	}
//  ########################### PUT ( UPDATE ) ###########################
	public updateHoraires( param_horaire): Observable<Horaires>{
		return this.serviceHttp.put<Horaires>( this.apiUrl + "horaires/" + param_horaire.id, param_horaire).pipe();
	}

//  ########################### DELETE ( DELETE ) ###########################
	public deleteHoraire( param_id: number): Observable<{}>{
		return this.serviceHttp.delete( this.apiUrl + "horaires/" + param_id).pipe();
	}
}
