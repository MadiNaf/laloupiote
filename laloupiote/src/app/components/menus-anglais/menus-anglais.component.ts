import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NosmenusAnglais } from 'src/app/models/nosMenusAnglais';
import { MenusAnglaisService } from 'src/app/services/menus-anglais.service';
import { Boissons } from 'src/app/models/boisson';
import { BoissonsPipe } from 'src/app/Pipes/boissons.pipe';
import { BoissonService } from 'src/app/services/boisson.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menus-anglais',
  templateUrl: './menus-anglais.component.html',
  styleUrls: ['./menus-anglais.component.css'],
  providers: [ BoissonsPipe]
})
export class MenusAnglaisComponent implements OnInit {

  public menusAnglaisClass : NosmenusAnglais[] = new Array();
  public menusANglaisResponseAncre : NosmenusAnglais[] = new Array();

  public boissons: Boissons[] = new Array();

  public param_getancre : string;
  public fragment : string;

  constructor(
    private menusAnglaisService : MenusAnglaisService,
    private boissonService : BoissonService,
    public boissonPipe : BoissonsPipe,
    public http : HttpClient,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {


    // ############# AFFICHAGE DONNEES MENUS ANGLAIS ###########################

    // this.menusAnglaisService.getMenusAnglais().subscribe(
    //   (data : any) => {
    //     this.menusAnglaisClass = data;
    //     console.log(this.menusAnglaisClass);
    //   }
    // )

    this.menusAnglaisService.getNosMenusAnglaisAncres(this.param_getancre).subscribe(
      (data : any) =>{
        this.menusAnglaisClass = data;
      }
    )

    

  // ############# AFFICHAGE DONNEES BOISSON ###########################

    this.boissonService.getDrink().subscribe(
      (dataBoissons : any) => {
        this.boissons = dataBoissons;

   
      })

      this.route.fragment.subscribe(fragment => {this.fragment = fragment; });
  }

  /*********METHODE ANCRE CLICKÉE**************/

  public ancreClickee(p_ancre:string): void {
    const target:HTMLElement = document.getElementById(p_ancre);
    const container : HTMLElement = document.getElementById("bigmama");
    container.scrollTop = target.offsetTop - 80;
  }
  

}
