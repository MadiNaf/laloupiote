import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public onAdminSettings: boolean = false;
	public canTranslate: boolean = false;
	public currentUrl: string;

	constructor( private navbarService: NavbarService) { }

	ngOnInit() {
		this.navbarService.currentLink.subscribe( param_link => this.currentUrl = param_link);
	}
	public 	getLink(num: number){
		if( this.currentUrl.includes("nosmenus") || num == 1 ){
			this.canTranslate = true;
		}else{
			this.canTranslate = false;
			this.getLink(0);
		}

		this.ngOnInit();
		if( this.currentUrl.includes("admin") ){
			this.onAdminSettings = true;
		}else{
			this.onAdminSettings = false;
		}
	}

}
