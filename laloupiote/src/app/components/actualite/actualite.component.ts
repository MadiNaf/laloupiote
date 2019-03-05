import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
 
import { Article } from 'src/app/models/article';

@Component({
	selector: 'app-actualite',
	templateUrl: './actualite.component.html',
	styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

	public attachment: string;
	public attachmentName: string;
	public article: Article = new Article();

  	constructor( private articleService: ArticleService) { }

	ngOnInit() {
		this.articleService.getArticles().subscribe(
			(data: any) => {
				this.article = data;
			
			}
		);

		//	RECUPERATION DES FICHIERS (DOWNLOAD)
		this.articleService.getAllFile().subscribe(
			(data: any) => {
				this.attachment = 'assets/files/' + data;
				this.attachmentName = data;
			}
		);
	}

}
