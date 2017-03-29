import { Component,ViewChild, ElementRef,Input  } from '@angular/core';
import {NgForm} from "@angular/forms";
import {usersService} from './services/userInfo.service';
import {Contacts} from './contacts';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers:[usersService]
})
export class UsersListComponent  {
       @ViewChild('datatableTeaching') table;

@Input() getUserID:string;
@Input() loggedIn:boolean;
name:string;mobile:string;
 contacts:Contacts[]=[];
 returnedContact:Contacts;
 oldContact:Contacts;
isAdd=true;

constructor(private _usersService :usersService){}
emptyUUID:string="00000000-0000-0000-0000-000000000000";
ID:string;

ngOnInit(){
    this._usersService.getContactsUser(this.getUserID).subscribe(resUserData=>this.contacts=resUserData);
    }

deleteRow(id:string,index:number){
this.contacts.splice(index,1)
 this._usersService.deleteContactUser(id ,this.getUserID).subscribe(resUserData=>this.ID=resUserData);
}

viewDetails(contact:Contacts,index:number){
    this.oldContact=contact;
    this.isAdd=false;
this.name=contact.ContactName;
this.mobile=contact.ContactPhone;
}

onSubmit(form:NgForm){
  if(this.oldContact!=undefined){
      //edit
  this._usersService.saveContactUser(this.getUserID,this.oldContact.Pk,form.value.name,form.value.mobile).subscribe(resUserData=>this.returnedContact=resUserData);
    this.contacts[this.contacts.indexOf(this.oldContact)].ContactName=form.value.name;
    this.contacts[this.contacts.indexOf(this.oldContact)].ContactPhone=form.value.mobile;
}
  else{
      //Add
  this._usersService.saveContactUser(this.getUserID,this.emptyUUID,form.value.name,form.value.mobile).subscribe(resUserData=>this.returnedContact=resUserData);
    this.table.refresh() 
}
}
}
