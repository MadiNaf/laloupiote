import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
@Component({
	selector: 'app-admin-article',
	templateUrl: './admin-article.component.html',
	styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
	public allFile: any =  new Array();
	public deleted: boolean = false;
	public attachment: boolean = false;
	public articleResponse: any = new Array();

	public articleToUpdate: Article = new Article();
	public contentUpdate: string;

	public startDate: string = "2018-12-24";
	public endDate: string = "2018-12-26";

	public fileUpload: any;

	constructor( 
		private articleService: ArticleService) { }
	
	ngOnInit() {
		
		//	RECUPERATION DE TOUT LES ARTICLES
		this.articleService.getArticles().subscribe(
			(data: any) => {
				this.articleToUpdate = data;
			}
		);
	}

//	RECUPERATION DES DONNÉES RENTRER PAR L'UTILISATEUR
	public getUserDate(param_start, param_end, param_article){
		this.startDate = param_start;
		this.endDate = param_end;

		this.createArticle(this.startDate, this.endDate, param_article)
		
	}

//	APPEL DE LA METHODE DE CREATION D'ARTICLE
    public createArticle(param_startDate, param_endDate, param_content): void {
        this.articleToUpdate.content = param_content;
        this.articleToUpdate.startDate = param_startDate;
        this.articleToUpdate.endDate = param_endDate;
		this.articleToUpdate.hasFile = this.attachment;

		this.articleService.addArticle(this.articleToUpdate).subscribe();
		this.uploadImaeg();
	}
//	APPEL DE LA METHODE DE SUPPRESSON D'ARTICLE	
	public deleteArticle(id): void{
		this.articleService.deleteArticle(id).subscribe();
		this.deleted = true;
        this.ngOnInit();
    }

	public deleteReset(): void{
		this.deleted = false;
	}
//	#################### UPLOAD DE FICHIER ####################
	public onFileChange(event) {
		let input:any = document.getElementById(event.target.id);
		this.fileUpload = input.files[0] ;
	}
//	APPEL DE LA METHODE D'UPLOAD DE FICHIER
	public uploadImaeg(): void {
		this.articleService.addFile( this.fileUpload ).subscribe();
	}

	public onChecked(event){
		// Permet de savoir si l'article contien oui ou non une piece jointe
	}
}
