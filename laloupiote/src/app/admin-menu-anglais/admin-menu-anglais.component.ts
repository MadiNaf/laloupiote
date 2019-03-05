import { Component, OnInit } from '@angular/core';

import { NosmenusAnglais } from 'src/app/models/nosMenusAnglais';
import { MenusAnglaisService } from 'src/app/services/menus-anglais.service';
import { BoissonService } from 'src/app/services/boisson.service';
import { MenusAnglaisPipe } from 'src/app/Pipes/menus-anglais.pipe';
import { HttpClient } from '@angular/common/http';
import { Boissons } from '../models/boisson';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-admin-menu-anglais',
  templateUrl: './admin-menu-anglais.component.html',
  styleUrls: ['./admin-menu-anglais.component.css'],
  providers: [ MenusAnglaisPipe]
})
export class AdminMenuAnglaisComponent implements OnInit {

  public menusAnglaisResponse : NosmenusAnglais[] = new Array();
  public boissons : Boissons[] = new Array();


// *************Back CRUD admin nosmenusAnglais******************//

public newMenusAnglais : NosmenusAnglais;
public fragment : string;

public assietteAnglaiseService : MenusAnglaisService;

private service : HttpClient;

private target : string;


  constructor(
    public menusAnglaisPipe : MenusAnglaisPipe,
    private menusAnglaisService : MenusAnglaisService,
    private boissonService : BoissonService,
    public http : HttpClient,
    private route : ActivatedRoute,
    
    //le lien back CRUD admin nosmenus
    param_service : MenusAnglaisService,
    param_assietteAnglais : MenusAnglaisService,
    ) { 
      this.assietteAnglaiseService = param_assietteAnglais;
      this.menusAnglaisService = param_service;
      this.newMenusAnglais = { name:"", price:"", category_name:"",
                               category_id:1, position:0  };

    }

  ngOnInit() {

    this.menusAnglaisService.getMenusAnglais().subscribe(
      (data : any) => {
        this.menusAnglaisResponse = data;
      }
    )

//##################### CRUD BOISSON #########################################

      this.boissonService.getDrink().subscribe(
      (dataBoissons : any) => {    
      this.boissons = dataBoissons;
      })

      this.route.fragment.subscribe(fragment => {this.fragment = fragment; });
    }
/*********METHODES UP AND DOWN*************/

      public up( current: NosmenusAnglais, submenuAnglais:NosmenusAnglais[]) : void {
        let index : number = submenuAnglais.indexOf(current);
        if (index == 0) {
        return};

       let previous: NosmenusAnglais = submenuAnglais[index - 1];

       let tmp:number = previous.position;
       previous.position = current.position;
       current.position = tmp;

       this.menusAnglaisService.editMenusAnglais(previous.id, previous).subscribe(
         (data : NosmenusAnglais) => {
           this.menusAnglaisService.editMenusAnglais(current.id, current ).subscribe(
             (data:NosmenusAnglais)=>{
               this.ngOnInit();
             }
           )
         }
       );

     }
        
      public down(current:NosmenusAnglais, submenuAnglais:NosmenusAnglais[]): void {
        let index:number = submenuAnglais.indexOf(current);
        if (index ==submenuAnglais.length -1)
        return;

        let previous: NosmenusAnglais = submenuAnglais[index + 1];
        let tmp:number = previous.position;
        previous.position = current.position;
        current.position = tmp;

        this.menusAnglaisService.editMenusAnglais(previous.id, previous).subscribe(
          (data: NosmenusAnglais) => {
            this.menusAnglaisService.editMenusAnglais(current.id, current).subscribe(
              (data:NosmenusAnglais) => {
                this.ngOnInit();
              }
            )
          }
        );
      }



//****************METHODE CREATE*********************/

    public create(p_create: NosmenusAnglais) : void {

      this.newMenusAnglais.category_id = p_create.category_id;
      this.newMenusAnglais.category_name = p_create.category_name;

      this.assietteAnglaiseService.createAssietteAnglaiseName(this.newMenusAnglais).subscribe(
        (data : NosmenusAnglais)=> {
          this.ngOnInit();
        }
      );
  
    }

//****************METHODE UPDATE********************/

    public update (p_update): void {
      let index : number = this.menusAnglaisResponse.indexOf(p_update);
      p_update.position = index;
      alert("modifications prises en comptes");
      this.menusAnglaisService.editMenusAnglais(p_update.id, p_update).subscribe (
        (data: NosmenusAnglais) => {
          this.ngOnInit();
        }
      );
    }

//****************METHODE DELETE********************/

    public delete(p_delete : NosmenusAnglais) : void {
      this.menusAnglaisService.deletMenusAnglais(p_delete.id).subscribe (
        (dataPrice : boolean) => {
          this.ngOnInit();
        }
      );
    }
}


