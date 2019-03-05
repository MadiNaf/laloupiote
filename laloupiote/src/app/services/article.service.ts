import { Injectable } from '@angular/core';

import { Article } from 'src/app/models/article';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map, first, catchError } from 'rxjs/operators';
import { ActualiteComponent } from 'src/app/components/actualite/actualite.component';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class ArticleService {
	
	public apiUrl: string = environment.ApiUrl;
	private serviceHttp: HttpClient;

  	constructor(private param_http: HttpClient) {
		  this.serviceHttp = param_http;
	   }
//  ########################### GET ( READ ) ###########################
	public getArticles():  Observable <Article>{
		return this.serviceHttp.get( this.apiUrl + "articles" ).pipe(
			map( (data: any ) => {

				let allArticles: Article = new Article();
				if( data.length > 1){
					for(let i = 0; i < data.length; i ++){
						allArticles.id = data[i].id;
						allArticles.content = data[i].content;
						allArticles.startDate = data[i].startDate;
						allArticles.endDate = data[i].endDate;
						allArticles.hasFile = data[i].hasFile;
					}
				}else{
					allArticles.id = data[0].id;
					allArticles.content = data[0].content;
					allArticles.startDate = data[0].startDate;
					allArticles.endDate = data[0].endDate;
					allArticles.hasFile = data[0].hasFile;
				}
				return allArticles;
  
			})
		)
	}
//  ########################### POST ( CREATE ) ###########################
	addArticle(article: Article): Observable <Article> {
		return this.serviceHttp.post<Article>(this.apiUrl + "articles", article).pipe(
			map( (newArticle: any) => {
				return newArticle as Article;
			})
		);
	}

//  ########################### PUT (UPDATE) ###########################
	updateArticle (article: Article): Observable<Article> {
		return this.serviceHttp.put(this.apiUrl + "article/" + article.id, article).pipe(
			map( (articleUpdate: any) => {
				return articleUpdate as Article;
			})
		);
	} 

//  ########################### DELETE ( DELETE ) ###########################
deleteArticle(id: number): Observable<Boolean>{
	return this.serviceHttp.delete( this.apiUrl  + "articles" + "/"+id).pipe(
		map( (data: any) => {
			return true;
		})
	)
}

//  ########################### POST ( CREATE ) ###########################
	//	Methode d'upload d'image
	public addFile(param_file: File): Observable <boolean> {

		const headers: HttpHeaders = new HttpHeaders();
		const data: FormData = new FormData();

		data.append("file", param_file, param_file.name);
		headers.append("Content-Type", "multipart/form-data");

		const Obs: Observable<boolean> = this.serviceHttp.post(
			this.apiUrl + "file/upload", data, { headers: headers}
		).pipe(
			map(
				(param_response: boolean) => {
					return param_response;
				}
			)
		);

		return Obs;
	}
//  ########################### GET ALL ( READ ALL ) ###########################
	public getAllFile(): Observable <String>{
		return this.serviceHttp.get( this.apiUrl + "files/all").pipe(
			map( (data: any) => {
				let fileName: string;
				data.map( file => { 
					fileName = file.name;
				} );
				return fileName;
			})
		)
	}

}
