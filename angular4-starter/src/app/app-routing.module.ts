import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const appRoutes : Routes = [
  { path: "", component: DashboardComponent, pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent},
  { path: "signin", component:SigninComponent},
  { path: "register", component:SignupComponent},
  { path: "**", redirectTo: "/"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};