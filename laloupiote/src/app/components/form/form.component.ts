import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // création de l'objet form
  public form : Form;

  // Injection des services dans le composant
  private formService : FormService;
  
  private statementClick : boolean = false;
  

  constructor ( formService : FormService) 
  {
    this.formService = formService;
    this.form = new Form();
  }

  

  // envoyer un message

  public sendMail(form : Form) {
    this.formService.createEmail(this.form).subscribe(
      () => {

      }
    );
    alert("Votre message a bien été envoyé.");
    this.DeleteData();
   }

    // supprimer les données

    public DeleteData(){
      this.formService.deleteForm().subscribe(
        () => {

        }
      );
    }



  ngOnInit() {

    this.DeleteData();
   
  }

}
