import { Component, OnInit } from '@angular/core';

import { HorairesService } from 'src/app/services/horaires.service';
import { Horaires } from 'src/app/models/horaires';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent implements OnInit {

	public horaireResponse: Horaires[] = new Array();

	constructor( private horaireService: HorairesService) { }

  	ngOnInit() {
		  this.horaireService.getHoraires().subscribe(
			  (data: any ) => {
				  this.horaireResponse = data;
			  }
		  )
    }

}
