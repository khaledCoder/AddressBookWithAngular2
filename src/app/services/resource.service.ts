import {Http} from '@angular/http';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Resource }    from '../angular2-rest-resource-master';
 import 'rxjs/add/operator/map';
@Injectable()
export class ResourceService extends Resource {
//constructor(private _http:Http){
    //super(_http);}
    //http://localhost:9000/App/login

    _url:string="http://localhost:9000/App/login";
 /*checkUser(){
    console.log("inside check user method");
    
    return this.request("GET","http://localhost:9000/App/login",{name:"khaled",pass:"123"},{},{},res=>console.log(res));
     //return this.get("http://localhost:9000/App/login").map(
        // (res)=>console.log(res));
 }*/
}