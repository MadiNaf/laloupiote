import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NavbarService {

	private link = new BehaviorSubject<string>("demo");
	currentLink = this.link.asObservable();

	constructor() { }

	public setCurrentLink( param_link: string){
		this.link.next(param_link);
	}
}
