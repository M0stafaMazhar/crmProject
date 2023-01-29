import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-projects',
  templateUrl: './single-projects.component.html',
  styleUrls: ['./single-projects.component.css']
})
export class SingleProjectsComponent {
  projectData : any
  buldingsData : any
  images:any
  baseUrl = "http://localhost:3000/public/images/uploads/"

  constructor(private activated : ActivatedRoute , private global : GlobalService){
    let projectId = this.activated.snapshot.paramMap.get('projectId')
    this.global.singleProject(projectId).subscribe(data=>{
      this.projectData = data.data
      this.buldingsData = this.projectData.buldings
      this.images = this.projectData.projectImages
    })
  }
  }


