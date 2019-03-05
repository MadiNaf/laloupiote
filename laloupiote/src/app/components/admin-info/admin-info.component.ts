import { Component, OnInit } from '@angular/core';
import { InfoContactService } from 'src/app/services/info-contact.service';
import { InfoContact } from 'src/app/models/info-contact';

@Component({
	selector: 'app-admin-info',
	templateUrl: './admin-info.component.html',
	styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

	public infoToUpdate: InfoContact = new InfoContact();

	constructor(private infoContactService: InfoContactService) { }

	ngOnInit() {
		// RECUPERATION DES INFORMATION DE CONTACT
		this.infoContactService.getInfoContact().subscribe(
			(data: any) => {
				this.infoToUpdate = data; 
			}
		)
	}
 
//	MISE A JOUR 
	public updateInfo(param_email, param_tel){
		this.infoToUpdate.email = param_email;
		this.infoToUpdate.telephone = param_tel;

		this.infoContactService.updateInfo(this.infoToUpdate).subscribe();
	}
}
