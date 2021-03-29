import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './typescript/typescript.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"html",component:HtmlComponent},
  {path:"css",component:CssComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
  {path:"technologies",component:TechnologiesComponent,
children:[
{path:"javascript",component:JavascriptComponent},
{path:"typescript",component:TypescriptComponent},
{path:"angular",component:AngularComponent},
{ path:'**', component: PagenotfoundComponent }
]},
{path:'',redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
