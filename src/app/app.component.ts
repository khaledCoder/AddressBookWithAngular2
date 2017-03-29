import { NgModule }     from '@angular/core';
import { Component } from '@angular/core';
import {UserFormComponent} from './user-form.component';
import {UsersListComponent} from './users-list.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  template:`
  <app-user-form></app-user-form>
  `
})
export class AppComponent {  
}
