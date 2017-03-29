import {Injectable}  from '@angular/core';
import {Http,Response,RequestMethod} from '@angular/http';
import {RestResource} from "ng2-resource";
import { Observable }  from 'rxjs/Rx';
import { Resource }    from '../angular2-rest-resource-master';
import 'rxjs/add/operator/map';

@Injectable()   
export class usersService extends Resource{

private check_user_url:string="http://localhost:9000/App/login";
private get_contacts_url:string="http://localhost:9000/App/Index";
private delete_contact_user_url:string="http://localhost:9000/App/DeleteContact";
private save_contact_user_url:string="http://localhost:9000/App/SaveUserInfo";

Valid:boolean
saveContactUser(userID:string,Pk:string,name:string,mobile:string){
return this.request("GET",this.save_contact_user_url,{userID:userID,Pk:Pk,name:name,mobile:mobile},{},{},res=>console.log(res));
}
checkUser( name: string , pass:string) {
    return this.request("GET",this.check_user_url,{name:name,pass:pass},{},{},res=>console.log(res));
}
getContactsUser(id:string){
return this.request("GET",this.get_contacts_url,{id:id},{},{},res=>console.log(res));
}
deleteContactUser(contactID:string,userID:string){
    return this.request("GET",this.delete_contact_user_url,{contactID:contactID,userID:userID},{},{},res=>console.log(res));
}
}