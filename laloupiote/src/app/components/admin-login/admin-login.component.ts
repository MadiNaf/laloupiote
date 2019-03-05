import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-admin-login",
    templateUrl: "./admin-login.component.html",
    styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
    public authStat: string = "se connecter";

    public link: string = "/adminlogin" 
    public courrentUser: User = new User();
    public emailValide: boolean;
    public pwValide: boolean;

    public emailClass: string = "form-control";
    public pwClass: string = "form-control";
    public inputHelperClass: string = "d-none";

    constructor( private userService: UserService) { }

    ngOnInit() { 

    }

    public userAuth(param_email, param_pw){
        let param_user: User = new User();

        param_user.email = param_email;
        param_user.password = param_pw;

        console.log("test", param_email, param_pw);
        this.userService.userLogin( param_user).subscribe(
            (userData: any) => {
                console.log(userData)
                this.courrentUser.id = userData.id;
                this.courrentUser.email = userData.email;
                this.courrentUser.connected = userData.connected;
                this.courrentUser.apiKey = userData.apiKey;

                if(  this.courrentUser.connected ){
                    this.link = "/adminsetting"
                    this.authStat = "continuer"
                }
                
            }
        )


    }

    public getEmailValidation(param_email){
        let emailRegex = new RegExp( '[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.{1}[a-z]{2,3}' );

        if( emailRegex.test(param_email) == true){
            this.emailValide = true;
            this.emailClass = "form-control input-valide";
            this.inputHelperClass =  "input-helper";
        }else{
            this.emailValide = false;
            this.emailClass = "form-control input-notvalide";
            this.inputHelperClass =  "input-helper";
        }
        
    }
    public getPwlValidation(param_pw){
        let passwordRegex = new RegExp('[0-9]+[a-zA-Z]+');

        if( passwordRegex.test(param_pw) == true ){
            this.pwValide = true;
            this.pwClass = "form-control input-valide";
            this.inputHelperClass =  "input-helper";
        }else{
            this.pwValide = false;
            this.pwClass = "form-control input-notvalide";
            this.inputHelperClass =  "input-helper";
        }
    }


}
