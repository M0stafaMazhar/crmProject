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
  imagesUp:any
  baseUrl = "http://localhost:3000/public/images/uploads/"

  userType = localStorage.getItem("type")

  constructor(private activated : ActivatedRoute , private global : GlobalService){
    let projectId = this.activated.snapshot.paramMap.get('projectId')
    this.global.singleProject(projectId).subscribe(data=>{
      this.projectData = data.data
      this.buldingsData = this.projectData.buldings
      this.images = this.projectData.projectImages
    })
  }

  deleteImage(i:any){
    this.global.deleteProjecImage(this.projectData._id , i).subscribe((res)=>{
      this.images = res.data.projectImages
    })
  }

  imageUpload(ev:any){
    this.imagesUp = [...ev.target.files]
  }

  addImages(){
    let formData = new FormData()
    this.imagesUp.forEach((im: any) => formData.append("avatar", im))
    this.global.addProjectImages(this.projectData._id , formData).subscribe((res)=>{
      this.images = res.data.projectImages
      console.log(res.data);
      
      
    },(err)=>{
    })
  }
  }

  


