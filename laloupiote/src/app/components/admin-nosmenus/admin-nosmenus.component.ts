import { Nosmenus } from 'src/app/models/nosmenus';
import { NosmenusService } from 'src/app/services/nosmenus.service';

import { Component, OnInit } from '@angular/core';
import { Boissons } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BoissonsPipe } from 'src/app/Pipes/boissons.pipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';

@Component({
  selector: 'app-admin-nosmenus',
  templateUrl: './admin-nosmenus.component.html',
  styleUrls: ['./admin-nosmenus.component.css'],
  providers: [ BoissonsPipe]
})

export class AdminNosmenusComponent implements OnInit {

  public nosmenusResponse: Nosmenus[] = new Array();
  public boissons: Boissons[] = new Array();


// *************Back CRUD admin nosmenus******************//

  public newAssiette: Nosmenus;
  public fragment : string;
  public assietteService:NosmenusService;
  private service:HttpClient;
  private target:string;

  constructor(
    private nosmenusService: NosmenusService, 
    private boissonService : BoissonService,
    public boissonPipe : BoissonsPipe,
    public http : HttpClient,
    private route : ActivatedRoute, 
    
    //le lien back CRUD admin nosmenus
    param_service:NosmenusService,   
    param_assiette:NosmenusService, 

    ) {
      this.assietteService = param_assiette;
      this.nosmenusService = param_service;
      this.newAssiette = { name: "", price: "", 
      category_name: "", category_id: 1, position: 0 };
     }



  ngOnInit() {
    this.nosmenusService.getNosmenusAdmin().subscribe(
      (data: any ) =>{
      this.nosmenusResponse = data;
    })



//##################### CRUD BOISSON #########################################

    this.boissonService.getDrink().subscribe(
      (dataBoissons : any) => {    
      this.boissons = dataBoissons;
      })
      
      this.route.fragment.subscribe(fragment => {this.fragment = fragment; });
  }


/*********METHODES UP AND DOWN*************/

  public up( current:Nosmenus, submenu:Nosmenus[] ):void{
    let index:number = submenu.indexOf(current);
    if( index == 0 ) {
      // console.log("trucmachin");
      return;}

    //on déclare variable d'index nosmenusResponse (les data sql)
    let previous:Nosmenus = submenu[index - 1];

    let tmp:number = previous.position;
    previous.position = current.position;
    current.position = tmp;
    
    this.nosmenusService.updateAssiettename(previous.id, previous).subscribe(
      (data: Nosmenus) => {
        this.nosmenusService.updateAssiettename(current.id, current).subscribe(
          (data: Nosmenus) => {
            this.ngOnInit();
          }
        )
      }
    );
    
    
  }

  public down( current:Nosmenus, submenu:Nosmenus[] ):void{
    let index:number = submenu.indexOf(current);
    if( index == submenu.length - 1 )
      return;

    //on déclare variable d'index nosmenusResponse (les data sql)
    let previous:Nosmenus = submenu[index + 1];
    let tmp:number = previous.position;
    previous.position = current.position;
    current.position = tmp;
    
    this.nosmenusService.updateAssiettename(previous.id, previous).subscribe(
      (data: Nosmenus) => {
        this.nosmenusService.updateAssiettename(current.id, current).subscribe(
          (data: Nosmenus) => {
            this.ngOnInit();
          }
        )
      }
    );
  }

//****************METHODE CREATE*********************/

  public create(p_create: Nosmenus): void {

    this.newAssiette.category_id = p_create.category_id;
    this.newAssiette.category_name = p_create.category_name;

    this.assietteService.createAssiettename(this.newAssiette).subscribe(
      (data: Nosmenus) => {
        this.ngOnInit();
      }
    );
    console.log(p_create);
  }

//****************METHODE UPDATE********************/

 
  public update(p_update): void {
    let index:number = this.nosmenusResponse.indexOf(p_update);
    p_update.position = index;
    alert("modifications prises en comptes");
    this.nosmenusService.updateAssiettename(p_update.id, p_update).subscribe(
      (data: Nosmenus) => {
      this.ngOnInit();
      }
    )
  }

  //****************METHODE DELETE********************/

  public delete(p_delete: Nosmenus): void {
    console.log(p_delete);

    this.nosmenusService.deleteAssiettename(p_delete.id).subscribe(
      (dataPrice: boolean) => {
        this.ngOnInit();
      }
    );
  }

}
