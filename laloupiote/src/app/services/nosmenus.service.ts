import { Injectable } from '@angular/core';
import { Nosmenus } from 'src/app/models/nosmenus';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
// import { debug } from 'util';

@Injectable({
	providedIn: 'root'
})
export class NosmenusService {

	private serviceHttp: HttpClient;	

	constructor(private param_http: HttpClient) {
		this.serviceHttp = param_http;
	}

	public apiUrl:string = environment.ApiUrl + "nosmenus/";

	//Le mock qui fonctionne :
	// public dataUrl: string = "./assets/datas/nosmenus.json";

	
	
	/*************CREATE******************/
	
	public createAssiettename(param_assiettename:Nosmenus): Observable<Nosmenus> {

		return this.serviceHttp.post(this.apiUrl, param_assiettename).pipe(
			map((param_response: any) => {
				return param_response as Nosmenus;
				}
			)
		);
	}
		
		
	/**************UPDATE*****************/
	
	public updateAssiettename(p_id, param_assiettename:Nosmenus): Observable<Nosmenus> {

		return this.serviceHttp.put(this.apiUrl + p_id, param_assiettename).pipe(
			map((param_response: any) => {
				return param_response as Nosmenus;
				}
			)
		);
	}
			
	/*************DELETE******************/
			
	public deleteAssiettename(p_id: number): Observable<boolean> {
				return this.serviceHttp.delete(this.apiUrl + p_id).pipe(
					map((param_response: any) => {
				return param_response as boolean;
			})
		);
	}
	
	
	/*****************READ*****************/

	// c'était comme ça quand c'était sur le fichier JSON
	// return data.assiette as Nosmenus[];

	public getNosmenusAdmin(): Observable<Nosmenus[]> {
		return this.serviceHttp.get(this.apiUrl).pipe(
			map(
				(data: any) => {
						return data as Nosmenus[];
						
				}
			)
		);
	}
	
	public getNosMenus():Observable<Nosmenus[]>{
		return this.serviceHttp.get(this.apiUrl).pipe(
			map(
				(data:any)=>{
					return data as Nosmenus[];
				}
			)
		);
	}

	/***********ANCRES***************/
	/** Fonction pour faire marcher les ancres**/
	public getNosmenusSelonancres(p_ancre:string): Observable<Nosmenus[]> {
		
			return this.getNosMenus().pipe(
				map(
					( menus:Nosmenus[]) => {
						const submenu:Nosmenus[] = [];

						for( let i:number = 0; i < menus.length; i++ ){
							if( menus[i].category_name.indexOf(p_ancre) ){
								submenu.push(menus[i]);
							}
						}

						return submenu;
					}
				)
			);
	}
}
