import { Component, OnInit } from '@angular/core';

import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/services/carousel.service';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public carouselImg = new Array();

	//	variable qui permet de savoir si oui ou non ily'a un article
	public isAnArticle: boolean = false;

	//	variable de la date du jour
	public endDate: string;
	public year: number;
	public month: number;
	public day: any;
	public dayOfTheWeek: string;
	public monthOfTheYear: string;
	public stringDate: string;

  	constructor( private carouselSservice: CarouselService, private articleService: ArticleService ) { }

	ngOnInit() {
		this.getGlobaleDate();

		this.articleService.getArticles().subscribe(
			( data: any ) => {
				this.endDate = data.endDate;
				this.notificationBar;

				this.notificationBar();
			}
		)

		this.carouselSservice.getAllImages().subscribe(
			(data: any ) => {
				data.map( image => {
					this.carouselImg.push("assets/img/carrousel/" + image.name);
				});
		})

		this.articleService.getArticles().subscribe(
			(data: any) => {
			this.endDate = data.endDate;
			this.notificationBar();
			})
		
	}

// 	#################### SCROLL SMOOTH ####################
	public scrollToElement($element): void {
		$element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	}

// 	#################### RECUPERATION DE LA DATE  A TEMPS REEL ####################
	public getGlobaleDate(): void{
		let dateGlobale = new Date();

		const ALL_MONTHS = [ "janvier", "février", "mars", "avril", "mai", "juin",
							"juillet", "août", "septembre", "octobre", "novembre", "decembre" ];

		const ALL_NUMERIC_MONTHS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

		const ALL_DAYS = [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ];

		this.year = dateGlobale.getFullYear();
		let month = dateGlobale.getMonth();
		let numericDay = dateGlobale.getDay();
		this.day = dateGlobale.getDate();
		
		if( this.day < 10){
			let myDay: string;
			this.day = `0${this.day}`
		}
		this.dayOfTheWeek = ALL_DAYS[numericDay];
		this.monthOfTheYear = ALL_MONTHS[month];

		this.stringDate = `${this.year}-${ALL_NUMERIC_MONTHS[month]}-${this.day}`
	}

// 	########################## Methode d'affichage de la barre de notification ##########################
	public notificationBar(){
		if( this.endDate >= this.stringDate){
			this.isAnArticle = true;
		}else{
			this.isAnArticle = false;
		}
	}

//  ******************Ancres horaires et localisation sur la navbar******************************

public ancreClickee(p_ancre:string): void {

    
    const target:HTMLElement = document.getElementById(p_ancre);
    const container:HTMLElement = document.getElementById("bigmama");
    container.scrollTop = target.offsetTop - 80;
  }

}
