import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form.component';
import { UsersListComponent } from './users-list.component';
import { routes }     from './app-Routing-Module';
//import { RestResourceModule }  from './angular2-rest-resource-master';
import { ResourceService }        from './services/resource.service';
import { usersService }        from './services/userInfo.service';
import { HttpService }    from './angular2-rest-resource-master/http.service';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UsersListComponent,
   // RestResourceModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
   // RestResourceModule
  ],
  providers: [ResourceService,usersService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
