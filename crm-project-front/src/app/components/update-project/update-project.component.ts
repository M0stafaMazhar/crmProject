import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditProject } from 'src/app/interfaces/edit-project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';
  project:any;

  projectData:EditProject={
    projectName: "",
    projectLocation: "",
    projectType: "",
    description: "",
  }


  projectForm = new FormGroup({
    projectName: new FormControl("" , [Validators.required]),
    projectLocation: new FormControl("" , [Validators.required]),
    projectType: new FormControl("" , [Validators.required]),
    description: new FormControl("" , [Validators.required]),
  })
 

  constructor(private activated : ActivatedRoute , private global : GlobalService){
    let projectId = this.activated.snapshot.paramMap.get('projectId')
    
    this.global.singleProject(projectId).subscribe((res)=>{
     this.project = res.data
     this.projectForm.patchValue(this.project) 
    },(err)=>{
    })
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
    }

    console.log(this.projectData);
    

    this.global.updateProject(this.projectData , this.project._id).subscribe((res)=>{
      this.successFlag = true;
      this.errFlag =false;
      this.successMessage = "Project updated successfully"
      console.log(res);
      
    
    },(err)=>{
      this.errFlag = true;
      this.successFlag = false;
      this.errMessage = err.error.message
      console.log(err);
      
      
    },()=>{

    })

  }
}

}

