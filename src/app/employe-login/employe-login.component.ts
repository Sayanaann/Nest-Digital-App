import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-login',
  templateUrl: './employe-login.component.html',
  styleUrls: ['./employe-login.component.css']
})
export class EmployeLoginComponent {
  username=""
  password=""
  
  constructor(private route:Router){}

  login=()=>
  {
let data : any ={  "username": this.username,
"password":this.password}
  
  console.log(data)
   
  if (this.username=="1122"&& this.password=="12345") {
     alert("valid login")
     this.route.navigate(['/addcourses'])
    alert("valid login")
    
  } else {

      alert("invalid credentials")
    
  }


  }

}
