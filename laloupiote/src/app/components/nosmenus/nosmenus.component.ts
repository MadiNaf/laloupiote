import { Nosmenus } from 'src/app/models/nosmenus';
import { Boissons } from 'src/app/models/boisson';
import { Component, OnInit } from '@angular/core';
import { NosmenusService } from 'src/app/services/nosmenus.service';
import { BoissonService } from 'src/app/services/boisson.service';
import { CategoryBoissonService } from 'src/app/services/category-boisson.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryBoisson } from 'src/app/models/categoryBoisson';
import { BoissonsPipe } from 'src/app/Pipes/boissons.pipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nosmenus',
  templateUrl: './nosmenus.component.html',
  styleUrls: ['./nosmenus.component.css'],
  providers: [ BoissonsPipe]
})

export class NosmenusComponent implements OnInit {

  public nosmenusResponse: Nosmenus[] = new Array();
  public nosmenusResponseAncre: Nosmenus[] = new Array();

  public boissons: Boissons[] = new Array();


  public param_getancre: string;
  public fragment : string;

  constructor(
    private nosmenusService: NosmenusService, 
    private boissonService : BoissonService,
    public boissonPipe : BoissonsPipe,
    public http : HttpClient,
    private route : ActivatedRoute ) { }


    

  ngOnInit() {
    // this.nosmenusService.getNosmenus().subscribe(
    //     (data: any ) =>{
    //   this.nosmenusResponse = data;
    // })

    this.nosmenusService.getNosmenusSelonancres(this.param_getancre).subscribe(
      (data: any ) =>{
      this.nosmenusResponse = data;
    })


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
    const container:HTMLElement = document.getElementById("bigmama");
    container.scrollTop = target.offsetTop - 80;
  }
  


}
