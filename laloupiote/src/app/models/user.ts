export class User {
    public id?: number; 

    public email:string;
    public password:string;

    public apiKey?: string;
    public role?: string;
    public token?: string;
    public connected?:boolean = false;

}