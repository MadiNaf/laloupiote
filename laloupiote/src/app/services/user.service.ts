import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private serviceHttp: HttpClient;
 
	constructor( private param_http: HttpClient) {
		this.serviceHttp = param_http;
	}

	public apiUrl: string = environment.ApiUrl;

	public userLogin(param_user: User): Observable<User>{
		return this.serviceHttp.post<User>( this.apiUrl + "auth", param_user).pipe(
			map( (userData: any) =>{
				let currentUser: User = new User();
				currentUser = userData;

				return currentUser
			})
		);
	}
}
