import {ModuleWithProviders} from '@angular/core';
import { NgModule }     from '@angular/core';
import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form.component';
import {UsersListComponent} from './users-list.component';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'userForm' , component: UserFormComponent },
  { path: 'usersList',     component: UsersListComponent }
];
/*@NgModule({
  imports: [ RouterModule.forRoot([routes]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}*/
export const routes: ModuleWithProviders = RouterModule.forRoot(router);