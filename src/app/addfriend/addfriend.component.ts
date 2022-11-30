import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api : ApiService){}


  readvalues=()=>
  {
let data:any = {"name":this.name,"friendName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
console.log(data)
   this.api.addfriend(data).subscribe(
     (response:any)=>{
        console.log(response)
        if(response.status=="success"){
            alert("friend added successfully")
            this.name=""
            this.friendName=""
            this.DescribeYourFriend=""
            this.friendNickName=""

        }else{
           alert("something went wrong")

        }


     }


   )


  }

}
