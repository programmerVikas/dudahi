import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PhotoNavbarComponent } from './photo-navbar/photo-navbar.component';
import { MatTabsModule } from "@angular/material/tabs";
import { RecentClickComponent } from './recent-click/recent-click.component';
import { DudahiMapComponent } from './dudahi-map/dudahi-map.component';
import { TempleComponent } from './temple/temple.component';
import { RiverComponent } from './river/river.component';
import { SchoolComponent } from './school/school.component';
import { RoadsComponent } from './roads/roads.component';
import { OtherPicComponent } from './other-pic/other-pic.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, PhotoNavbarComponent, RecentClickComponent, DudahiMapComponent, TempleComponent, RiverComponent, SchoolComponent, RoadsComponent, OtherPicComponent, AboutUsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
  ],
exports:[
  NavbarComponent,
  HomeComponent,
  PhotoNavbarComponent,
  RecentClickComponent,
  DudahiMapComponent,
  TempleComponent,
  RiverComponent,
  SchoolComponent,
  RoadsComponent,
  OtherPicComponent,
  AboutUsComponent
]
})
export class UserModule { }
