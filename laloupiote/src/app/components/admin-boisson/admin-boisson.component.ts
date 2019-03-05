import { Component, OnInit } from '@angular/core';
import { Boissons } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BoissonsPipe } from 'src/app/Pipes/boissons.pipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-boisson',
  templateUrl: './admin-boisson.component.html',
  styleUrls: ['./admin-boisson.component.css'],
  providers: [ BoissonsPipe]
})


export class AdminBoissonComponent implements OnInit {

  private boissonsService : BoissonService;
  public boissons : Boissons[];
  public newBoissons : Boissons;

  // DECLARATION POUR FONCTION MODAL
  public deleted: boolean = false;

 // declarer objet boisson
  public boissonsClass : Boissons = new Boissons();
  // = public articleToUpdate : Article = new Article()
  public id : number;
  public name : string;
  public qtt1 : string;
  public Prix1 : string;
  public qtt2 : string;
  public prix2 : string;
  public qtt3 : string;
  public prix3 : string;
  public categorieBoissonId : number;
  public categories:any[] =[
    { id:"1", categoryName: "Bières Pression"},
    { id:"2", categoryName: "Bières Bouteille"},
    { id:"3", categoryName: "Sodas et Jus"},
    { id:"4", categoryName: "Sirops"},
    { id:"5", categoryName: "Alcools Apéritifs"},
    { id:"6", categoryName: "Cidres"},
    { id:"7", categoryName: "Whiskies"},
    { id:"8", categoryName: "Digestifs"},
    { id:"9", categoryName: "Pichets vins Blanc"},
    { id:"10", categoryName: "Pichets vins Rosé"},
    { id:"11", categoryName: "Pichets vins Rouge"},
    { id:"12", categoryName: "Vins Blancs"},
    { id:"13", categoryName: "Vins Rosés"},
    { id:"14", categoryName: "Vins Rouges"},
    { id:"15", categoryName: "Champagne"},
    { id:"16", categoryName: "Cocktails avec alcool"},
    { id:"17", categoryName: "Cocktails sans alcool"},
    { id:"18", categoryName: "Boissons chaudes"},
    { id:"19", categoryName: "Eaux"}
  ];


  
  constructor(
    param_boissonsService : BoissonService,
    public boissonPipe : BoissonsPipe)
    {
      this.boissons =  [];
      this.boissonsService = param_boissonsService;
      this.newBoissons = { name:"", quantities_1:"", quantities_2:"",quantities_3:"",
                           price_1:"", price_2:"",price_3:"",categoryName:"",category:"",category_boisson_id:null}
      // this.boissonsClass = new Boissons();
    }
 

    // méthode pour relier tableau des categoryById au categoryName
    // pour générer de nouvelles lignes dans tableaux dans la catégorie 
    // correspondante

    public getCategoryById(p_id:number):any{
      for( let i:number = 0; i < this.categories.length; i++){
        if( this.categories[i].id == p_id )
        
          return this.categories[i];
      }

      return null;
    }

      public drinkChoice(event : any) {
        this.categorieBoissonId = event.target.value;
        let mycat:any = this.getCategoryById(this.categorieBoissonId);
  
          if( mycat != null ){
         
          let value:Boissons = {
            id : this.id,
            category_boisson_id: this.categorieBoissonId, 
            name: "", 
            price_1: "0",
            price_2: "0",
            price_3: "0",
            categoryName: mycat.categoryName,
            category:  "",
            quantities_1: "0",
            quantities_2: "0",
            quantities_3: "0"
          };
    
          this.boissons = this.boissons.concat( value  );
      }         
    } 

  


    ngOnInit():void  { 

// ############## REFRESH BOISSONS ######################################""
      this.boissonsService.getDrink().subscribe(
       
           (result:Boissons[]) => {
             this.boissons = result;
       }
      );
    }
      
    
      
   

// ##############" UPDATE ######################################""

   public update(p_boissons : Boissons) : void {
     this.boissonsService.editBoisson(p_boissons.id, p_boissons).subscribe(
       (data : Boissons)=> {
         this.ngOnInit();
       }
     );
   }

// ##############" DELETE ######################################""

   public delete(p_boissons: Boissons) : void {
    this.deleted = true;
     this.boissonsService.deleteBoisson(p_boissons.id).subscribe();
       (data : boolean) => {
        
         this.ngOnInit();
      }
    // ); 

    }
   
  


  // ##############" CREATE ######################################""

     
    public create(p_boissons : Boissons) {
      if (p_boissons.id !=null) {
        }else {
        this.boissonsService.createBoisson(p_boissons).subscribe(
          (result:Boissons) => {
            this.ngOnInit();
          }
        );
      
      }
    }

   // ##############" FONCTION POUR MODAL ######################################""
  


  //  public delete(id):void {
  //   this.boissonsService.deleteBoisson(id).subscribe();
  //   this.deleted = true;
  //   this.ngOnInit();
  // }


    public deleteReset(): void{
      this.deleted = false;
    }

   public refresh():void {
     window.location.reload();
   }
}
  

   
  
  
    




