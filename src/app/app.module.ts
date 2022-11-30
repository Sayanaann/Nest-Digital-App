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
import { AddcourseComponent } from './addcourse/addcourse.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import {HttpClientModule} from '@angular/common/http';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewallcoursesComponent } from './viewallcourses/viewallcourses.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { ViewallfriendsComponent } from './viewallfriends/viewallfriends.component';


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
  },
  {
    path :"addcourses",
    component : AddcourseComponent
  },
  {
    path :"addfriend",
    component : AddfriendComponent
  },
  {
    path :"adminlogin",
    component : AdminloginComponent
  },
  {
    path :"viewallcourses",
    component : ViewallcoursesComponent
  },
  {
    path :"viewallfriends",
    component : ViewallfriendsComponent
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
    EmployeLoginComponent,
    AddcourseComponent,
    Navbar2Component,
    AddfriendComponent,
    AdminloginComponent,
    ViewallcoursesComponent,
    Navbar3Component,
    ViewallfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
