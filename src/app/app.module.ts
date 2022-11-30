import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeLoginComponent } from './employe-login/employe-login.component';
import { FormsModule } from '@angular/forms';


const myRoute:Routes=[
  {
    path :"",
    component : HomeComponent
  },
  {
    path :"employee login",
    component : EmployeLoginComponent
  },
  {
    path :"gallery",
    component : GalleryComponent
  },
  {
    path :"contactus",
    component : ContactusComponent
  },
  {
    path :"aboutus",
    component : AboutUsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    ContactusComponent,
    AboutUsComponent,
    EmployeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
