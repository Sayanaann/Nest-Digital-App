import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';


const myRoute:Routes=[
  {
    path :"",
    component : HomeComponent
  },
  {
    path :"gallery",
    component : GalleryComponent
  },
  {
    path :"contactus",
    component : ContactusComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
