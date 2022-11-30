import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcourses',
  templateUrl: './viewallcourses.component.html',
  styleUrls: ['./viewallcourses.component.css']
})
export class ViewallcoursesComponent {
  constructor(private api : ApiService){

    api.fetchCourses().subscribe(

      (response)=>{

        this.course=response;
      }
    )

  }
  course :any=[]

}
