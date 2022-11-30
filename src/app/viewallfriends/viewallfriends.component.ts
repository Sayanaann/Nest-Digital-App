import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallfriends',
  templateUrl: './viewallfriends.component.html',
  styleUrls: ['./viewallfriends.component.css']
})
export class ViewallfriendsComponent {
  name=""
friendNickname=""
DescribeYourFriend=""

  constructor(private api : ApiService){
    api.fetchCourse().subscribe(

      (response)=>{

        this.friend=response;
      }
    )
  }
  friend:any=
  []

}
