import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-login',
  templateUrl: './employe-login.component.html',
  styleUrls: ['./employe-login.component.css']
})
export class EmployeLoginComponent {
  username=""
  password=""
  

  login=()=>
  {
let data : any ={  "username": this.username,
"password":this.password}
  
  console.log(data)
   
  if (this.username=="1122"&& this.password=="12345") {
     alert("valid login")
    
  } else {

      alert("invalid credentials")
    
  }


  }

}
