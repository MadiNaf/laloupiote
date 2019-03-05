import { Component, OnInit } from '@angular/core';

import { InfoContactService } from 'src/app/services/info-contact.service';
import { InfoContact } from 'src/app/models/info-contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public infosContact: InfoContact = new InfoContact();

	constructor(private infoContactService: InfoContactService) { }

  	ngOnInit() {
		this.infoContactService.getInfoContact().subscribe(
			(data: any ) => {
				this.infosContact = data;
			}
		)
  	}

}
