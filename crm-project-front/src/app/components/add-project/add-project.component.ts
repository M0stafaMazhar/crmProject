import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';


  images:any
  projectData:Project={
    projectName: "",
    projectLocation: "",
    projectType: "",
    description: "",
    numOfBuldings: "",
    numOfFloors: "",
  }


  projectForm = new FormGroup({
    projectName: new FormControl("" , [Validators.required]),
    projectLocation: new FormControl("" , [Validators.required]),
    projectType: new FormControl("" , [Validators.required]),
    description: new FormControl("" , [Validators.required]),
    numOfBuldings: new FormControl("" , [Validators.required , Validators.pattern("^[0-9]{2}$")]),
    numOfFloors: new FormControl("" , [Validators.required , Validators.pattern("^[0-9]{2}$")]),
    images:new FormControl("" , [Validators.required])
  })
 

  constructor(private global:GlobalService){}
  imageUpload(ev:any){
    this.images = [...ev.target.files]
    
    
  }

  get Data() {return this.projectForm.controls}

  onSubmit(){
    this.submitFlag = true;
    if(this.projectForm.valid){

    this.projectData = {
      projectName: this.Data.projectName.value,
      projectLocation: this.Data.projectLocation.value,
      projectType: this.Data.projectType.value,
      description: this.Data.description.value,
      numOfBuldings: this.Data.numOfBuldings.value,
      numOfFloors: this.Data.numOfFloors.value, 
    }

    

    let formData = new FormData()
    formData.append("projectName", this.projectData.projectName);
    formData.append("projectLocation" , this.projectData.projectLocation);
    formData.append("projectType" , this.projectData.projectType);
    formData.append("description" , this.projectData.description);
    formData.append("numOfBuldings" , this.projectData.numOfBuldings);
    formData.append("numOfFloors" , this.projectData.numOfFloors);

    this.images.forEach((im: any) => formData.append("avatar", im))
    this.global.addProject(formData).subscribe((res)=>{
      this.successFlag = true;
      this.errFlag =false;
      this.successMessage = "Project added successfully"
    
    },(err)=>{
      this.errFlag = true;
      this.successFlag = false;
      this.errMessage = err.error.message
      
    },()=>{

    })

  }
}

}