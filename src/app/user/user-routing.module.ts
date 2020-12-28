import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from "./home/home.component";
import { PhotoNavbarComponent } from './photo-navbar/photo-navbar.component';

const routes: Routes = [
  {
    path:"",
    component:PhotoNavbarComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
