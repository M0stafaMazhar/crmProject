import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
projects :any;
userType = localStorage.getItem('type')
baseUrl = "http://localhost:3000/public/images/uploads/"
constructor(private global:GlobalService){
  this.global.getProjects().subscribe((res)=>{
    this.projects = res.data
  } , ()=>{

  }, ()=>{
  }
  )
}

deleteProject(id:any , i:any){
  
  this.global.deleteProject(id).subscribe((res)=>{
    console.log(res);
    this.projects.splice(i, 1);
    
  } , (err)=>{
    console.log(err);
    
  } )
}

}
