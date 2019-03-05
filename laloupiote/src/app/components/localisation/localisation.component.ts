import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {

  public address: string = " 2 Rue de l'Abreuvoir, 28240 La Loupe";
  public mobilite: string = " Restaurant accessible aux personnes à mobilité réduite";
  public parking: string = " Parking gratuit à proximité";
  constructor() { }

  ngOnInit() {
  }

}
