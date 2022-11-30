import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""
  
  constructor(private route:Router){}

  login=()=>
  {
let data : any ={  "username": this.username,
"password":this.password}
  
  console.log(data)
   
  if (this.username=="admin"&& this.password=="nestdigital") {
     alert("valid login")
     this.route.navigate(['/viewallcourses'])
    alert("valid login")
    
  } else {

      alert("invalid credentials")
    
  }


  }


}
