import { Component, OnInit} from '@angular/core';
import { Image } from 'src/app/models/image';
import { CarouselService } from 'src/app/services/carousel.service';
import { pipe } from '@angular/core/src/render3';

@Component({
	selector: 'app-admin-carousel',
	templateUrl: './admin-carousel.component.html',
	styleUrls: ['./admin-carousel.component.css']
})
export class AdminCarouselComponent implements OnInit {

	public allImages = new Array();

	public imgesUploaded: File[] = new Array();
	public nbImagesDisplay: number;

	public counter: number = 0;
	private canMove:boolean = true;

	constructor( private carouselService: CarouselService) { }

	ngOnInit() {
		this.carouselService.getAllImages().subscribe(
			(data: any) => {
				let link: string
				data.map( image => {

					if( image != null && image != undefined ){
						link = "./assets/img/carrousel/" + image.name;
						this.allImages.push(link) ;
					}
	
				});
				
			}
		)
	}
	//	Recuperation de la première image
	onFileChangeOne(event) {
		let input:any = document.getElementById(event.target.id);
		this.imgesUploaded.push( input.files[0] );
	}
	//	Recuperation de la deuxième image
	onFileChangeTwo(event) {
		let input:any = document.getElementById(event.target.id);
		this.imgesUploaded.push( input.files[0] );
	}
	//	Recuperation de la troisième image
	onFileChangeThree(event) {
		let input:any = document.getElementById(event.target.id);
		this.imgesUploaded.push( input.files[0] );
	}
	//	Récuperation de la quatrième image
	onFileChangeFour(event) {
		let input:any = document.getElementById(event.target.id);
		this.imgesUploaded.push( input.files[0] );
	}
	//	Récuperation de la cinquième image
	onFileChangeFive(event) {
		let input:any = document.getElementById(event.target.id);
		this.imgesUploaded.push( input.files[0] );
	}

	//	APPEL DE LA METHODE D'UPLOAD DE FICHIER
	public uploadImaeg(): void {
		this.imgesUploaded.map( image => {
			if( image != null && image != undefined){
				this.carouselService.addImage( image ).subscribe();
			}
			
		})
	}

}
