import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeereg',
  templateUrl: './employeereg.component.html',
  styleUrls: ['./employeereg.component.css']
})
export class EmployeeregComponent {
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobno=""
  emailid=""
  parentname=""
  gender=""
  highestdegree=""
  yearofexp=""
  dateofjoining=""
  username=""
  password=""
  confirmpassword=""
  
  constructor(private route:Router){}


  reg=()=>
  {
let data : any ={ "empid":this.empid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"housename":this.housename,
"streetname":this.streetname,
"pincode":this.pincode,"district":this.district,"state":this.state,"mobno":this.mobno,"emailid":this.emailid," parentname":this. parentname,
"gender":this.gender,"highestdegree":this.highestdegree, " yearofexp":this. yearofexp,"dateofjoining":this.dateofjoining,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
  
  console.log(data)


  if (this.password=="12345"&& this.confirmpassword=="12345") {
    alert("Registered Successfully")
    this.route.navigate(['/employee login'])
   
   
 } else {
  alert("Password doesn't match")
  
 }

}}
