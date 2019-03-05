import { Component, OnInit } from '@angular/core';
import { HorairesService } from 'src/app/services/horaires.service';

@Component({
  selector: 'app-admin-horaires',
  templateUrl: './admin-horaires.component.html',
  styleUrls: ['./admin-horaires.component.css']
})
export class AdminHorairesComponent implements OnInit{

// 	variable qui permet d'indiquer les période d'ouverture et de femeture 
	public mondayIsOpenMorning: boolean;
	public mondayIsOpenAfternoon: boolean;
	
	public tuesdayIsOpenMorning: boolean;
	public tuesdayIsOpenAfternoon: boolean;

	public wednesdayIsOpenMorning: boolean;
	public wednesdayIsOpenAfternoon: boolean;

	public thursdayIsOpenMorning: boolean;
	public thursdayIsOpenAfternoon: boolean;

	public fridayIsOpenMorning: boolean;
	public fridayIsOpenAfternoon: boolean;

	public saturdayIsOpenMorning: boolean;
	public saturdayIsOpenAfternoon: boolean;

	public sundayIsOpenMorning: boolean;
	public sundayIsOpenAfternoon: boolean;
	
	public horaireTabToUpdate: any = new Array();
// SECTION  Object Horaires
	/**NOTE
	 * variable de recuperation des horaires
	 * Chaque object permet de récupérer les horaires avec 2 proprité état 'm_state' et 'a_state'
	 * qui correspondent à l'ouverture ou la ferméture du resto
	 * hm = hour morning
	 * mm = minutes morning 
	 * 
	 * ha = hour afternoon
	 * ma =  minutes afternoon
	 */ 	
	public monday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7, 
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};

	public tuesday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
	public wednesday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
	public thursday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
	public friday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
	public saturday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
	public sunday = {
		hm_opening: 1,
		mm_opening: 2,
		hm_closing: 3,
		mm_closing: 4,

		ha_opening: 5,
		ma_opening: 6,
		ha_closing: 7,
		ma_closing: 8,

		m_state: false,
		a_state: false,
	};
// !SECTION 
	public horaireTab: any = [
		this.monday, this.tuesday,
		this.wednesday, this.thursday, 
		this.friday, this.saturday, this.sunday
	];

	constructor( private horaireService: HorairesService) { }

	ngOnInit() {
		// SECTION  RECUPERATION DES HORAIRES
		this.horaireService.getHoraires().subscribe(
			(data: any) => {
				this.horaireTabToUpdate = data;


				for(let i = 0; i < this.horaireTabToUpdate.length ; i ++){
					this.horaireTab[i].hm_opening = this.horaireTabToUpdate[i].hm_opening;
					this.horaireTab[i].mm_opening = this.horaireTabToUpdate[i].mm_opening;

					this.horaireTab[i].hm_closing = this.horaireTabToUpdate[i].hm_closing;
					this.horaireTab[i].mm_closing = this.horaireTabToUpdate[i].mm_closing;

					this.horaireTab[i].ha_opening = this.horaireTabToUpdate[i].ha_opening;
					this.horaireTab[i].ma_opening = this.horaireTabToUpdate[i].ma_opening;

					this.horaireTab[i].ha_closing = this.horaireTabToUpdate[i].ha_closing;
					this.horaireTab[i].ma_closing = this.horaireTabToUpdate[i].ma_closing;

					this.horaireTab[i].m_state = this.horaireTabToUpdate[i].m_state;
					this.horaireTab[i].a_state = this.horaireTabToUpdate[i].a_state;
				}
				// NOTE je commence à 2 car y'avait déjà une donnée dans DB avec l'id 1 
				// Je sais j'aurais pu la drop
			
				this.mondayIsOpenMorning = this.horaireTab[2].m_state ;
				this.mondayIsOpenAfternoon = this.horaireTab[2].a_state ;
				
				this.tuesdayIsOpenMorning= this.horaireTab[3].m_state;
				this.tuesdayIsOpenAfternoon= this.horaireTab[3].a_state;
			
				this.wednesdayIsOpenMorning= this.horaireTab[4].m_state;
				this.wednesdayIsOpenAfternoon= this.horaireTab[4].a_state;
			
				this.thursdayIsOpenMorning= this.horaireTab[5].m_state;
				this.thursdayIsOpenAfternoon= this.horaireTab[5].a_state;
			
				this.fridayIsOpenMorning= this.horaireTab[6].m_state;
				this.fridayIsOpenAfternoon= this.horaireTab[6].a_state;
			
				this.saturdayIsOpenMorning= this.horaireTab[7].m_state;
				this.saturdayIsOpenAfternoon= this.horaireTab[7].a_state;
			
				this.sundayIsOpenMorning= this.horaireTab[8].m_state;
				this.sundayIsOpenAfternoon= this.horaireTab[8].a_state;	

			}
		)
	}
// !SECTION 
// SECTION STATE HORAIRES
/** NOTE 
 * Les Methodes suivantes permetent de récup l'état d'ouverture ou de fermeture des jours
 * grace au SELECT
 *  */   
	// ################################ CHAMPS DES HORAIRES DE LUNDI ################################
    public mondayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.mondayIsOpenMorning = true;
		}else{
			this.mondayIsOpenMorning = false;
		}
	}
	public mondayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.mondayIsOpenAfternoon = true;
		}else{
			this.mondayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE MARDI ################################
	public tuesdayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.tuesdayIsOpenMorning = true;
		}else{
			this.tuesdayIsOpenMorning = false;
		}
	}
	
	public tuesdayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.tuesdayIsOpenAfternoon = true;
		}else{
			this.tuesdayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE MERCREDI ################################
	public wednesdayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.wednesdayIsOpenMorning = true;
		}else{
			this.wednesdayIsOpenMorning = false;
		}
	}
	public wednesdayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.wednesdayIsOpenAfternoon = true;
		}else{
			this.wednesdayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE JEUDI ################################ 
	public thursdayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.thursdayIsOpenMorning = true;
		}else{
			this.thursdayIsOpenMorning = false;
		}
	}
	public thursdayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.thursdayIsOpenAfternoon = true;
		}else{
			this.thursdayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE VENDREDI ################################ 
	public fridayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.fridayIsOpenMorning = true;
		}else{
			this.fridayIsOpenMorning = false;
		}
	}
	public fridayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.fridayIsOpenAfternoon = true;
		}else{
			this.fridayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE SAMEDI ################################
	public saturdayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.saturdayIsOpenMorning = true;
		}else{
			this.saturdayIsOpenMorning = false;
		}
	}
	public saturdayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.saturdayIsOpenAfternoon = true;
		}else{
			this.saturdayIsOpenAfternoon = false;
		}
	}
	// ################################ CHAMPS DES HORAIRES DE DIMANCHE ################################
	public sundayOpeningMorning( event: any){

		if( event.target.value == 'open'){
			this.sundayIsOpenMorning = true;
		}else{
			this.sundayIsOpenMorning = false;
		}
	}
	public sundayOpeningAfternoon( event: any){

		if( event.target.value == 'open'){
			this.sundayIsOpenAfternoon = true;
		}else{
			this.sundayIsOpenAfternoon = false;
		}
	}
// !SECTION 

// SECTION Mise à jour	################################## MISE A JOUR ##################################
	public updateHoraire(param_monday, param_tuesday, param_wednesday, param_thursday, 
					param_friday, param_saturday, param_sunday){

		this.monday.m_state = this.mondayIsOpenMorning;
		this.monday.a_state = this.mondayIsOpenAfternoon;
						
		this.tuesday.m_state = this.tuesdayIsOpenMorning;
		this.tuesday.a_state = this.tuesdayIsOpenAfternoon;

		this.wednesday.m_state = this.wednesdayIsOpenMorning;
		this.wednesday.a_state = this.wednesdayIsOpenAfternoon;
					
		this.thursday.m_state =  this.thursdayIsOpenMorning;
		this.thursday.a_state =  this.thursdayIsOpenAfternoon;
					
		
		this.friday.m_state = this.fridayIsOpenMorning;
		this.friday.a_state = this.fridayIsOpenAfternoon;
					
		this.saturday.m_state = this.saturdayIsOpenMorning;
		this.saturday.a_state = this.saturdayIsOpenAfternoon;
					
		this.sunday.m_state = this.sundayIsOpenMorning;
		this.sunday.a_state = this.sundayIsOpenAfternoon;

		this.horaireTab = [param_monday, param_tuesday, param_wednesday, param_thursday, 
			param_friday, param_saturday, param_sunday];

			console.log("NewTab: ", this.horaireTab);
			console.log("Taille: ", this.horaireTabToUpdate.length);

		for( let i = 0; i < this.horaireTabToUpdate.length; i ++){
			this.horaireTabToUpdate[i].hm_opening =	this.horaireTab[i].hm_opening.toString();
			this.horaireTabToUpdate[i].mm_opening =	this.horaireTab[i].mm_opening.toString();

			this.horaireTabToUpdate[i].hm_closing =	this.horaireTab[i].hm_closing.toString();
			this.horaireTabToUpdate[i].mm_closing =	this.horaireTab[i].mm_closing.toString();

			this.horaireTabToUpdate[i].ha_opening =	this.horaireTab[i].ha_opening.toString();
			this.horaireTabToUpdate[i].ma_opening =	this.horaireTab[i].ma_opening.toString();

			this.horaireTabToUpdate[i].ha_closing =	this.horaireTab[i].ha_closing.toString();
			this.horaireTabToUpdate[i].ma_closing =	this.horaireTab[i].ma_closing.toString();

			this.horaireTabToUpdate[i].m_state = this.horaireTab[i].m_state;
			this.horaireTabToUpdate[i].a_state = this.horaireTab[i].a_state;
			
			// NOTE pareille ici l'id commence à 2 
			this.horaireTabToUpdate[i].id = i + 2; 
/** NOTE 
 * IMPORTANT tu va peut etre le remarquer mais il n'ya pas de methode POST pour les horaires
 * on était partie sur la base de juste mettre à jour les horaires que d'en crée des nouveau 
 * pas de panique une methode POST est quand même disponible  côté back 
 */
			console.log( '==============jour' + this.horaireTabToUpdate[i].id + this.horaireTabToUpdate[i] + '===================');
			this.horaireService.updateHoraires(this.horaireTabToUpdate[i]).subscribe();

			console.log("Updater: ", this.horaireTabToUpdate[i]);
		}
	}
}
// !SECTION 