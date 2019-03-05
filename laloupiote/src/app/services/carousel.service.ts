import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

import { Carousel } from 'src/app/models/carousel'; 
import { Image } from 'src/app/models/image';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class CarouselService {

	private serviceHttp: HttpClient;

  	constructor( private param_http: HttpClient) {
		  this.serviceHttp = param_http;
	}

	public apiUrl: string = environment.ApiUrl ;

	//  ########################### GET ALL ( READ ALL ) ###########################
	public getAllImages(): Observable <Image[]>{
		return this.serviceHttp.get( this.apiUrl + "images/all").pipe(
			map( (data: any) => {
				let imgesTab: Image[] = new Array();
				let dataLength = Object.keys(data).length;

				// Comme le carousel ne peut contenir que 5 image on verifit la quantité d'images
				if( dataLength > 5){
					// S'il y'en a plus de 5, on prend les 5 dernieres
					for( let i = 1; i < 6; i ++){
						imgesTab.push( data[ dataLength - i]);
					}
					return imgesTab;
				}else{
					data.map( image => { imgesTab.push(image) } );
					return imgesTab;
				}
				
			})
		)
	}
	//  ########################### POST ( CREATE ) ###########################
	//	Methode d'upload d'image
	public addImage(param_file: File): Observable <boolean> {

		const headers: HttpHeaders = new HttpHeaders();
		const data: FormData = new FormData();

		data.append("file", param_file, param_file.name);
		headers.append("Content-Type", "multipart/form-data");

		const Obs: Observable<boolean> = this.serviceHttp.post(
			this.apiUrl + "images/upload", data, { headers: headers}
		).pipe(
			map(
				(param_response: boolean) => {
					return param_response;
				}
			)
		);

		return Obs;

	}

}
