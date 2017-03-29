import { Component,Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppModule} from "./app.module";
import {usersService} from './services/userInfo.service';
import {Contacts} from './contacts';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
contacts : Contacts[]=[];
 UserID: string="00000000-0000-0000-0000-000000000000";
 emptyID:string="00000000-0000-0000-0000-000000000000";
constructor(private userInfo:usersService){}
isValid(){
  if (this.UserID==this.emptyID){
    return false;
  }
  return true;
}
  onSubmit(form : NgForm){
   this.userInfo.checkUser(form.value.name,form.value.pass).subscribe(data=>this.UserID=data);
}
}
