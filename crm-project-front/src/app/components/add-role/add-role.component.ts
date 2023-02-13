import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent {
  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';
  roleUrls:object[]=[]
  urlsDisplay = ""
  urls:any

  role:any

  


    roleForm = new FormGroup({
    roleName: new FormControl("" , [Validators.required]),
    roleUrls: new FormControl("" , []),
  })

  constructor(private global:GlobalService){
    this.global.getUrls().subscribe((res)=>{
      this.urls = res.data.urls
      console.log(res.data);
      
    }, (err)=>{
      console.log(err);
      
    })
  }

  get Data() {return this.roleForm.controls}


  selectedRoleUrls(ev:any){
    this.roleUrls.push(this.urls[ev.target.value])

    
    this.urlsDisplay += this.urls[ev.target.value].url + " | "

    
  }

  onSubmit(){
    this.submitFlag = true
    if(this.roleForm.valid){
      this.role ={
        roleName : this.Data.roleName.value,
        urls: this.roleUrls
      }

        this.global.addRole(this.role).subscribe((res) =>{
          this.successFlag = true;
          this.errFlag = false;
          this.successMessage = res.message
          
        },(err)=>{
          this.successFlag = false;
          this.errFlag = true;
          this.errMessage = err.error.message
        })
      }
    }
  }


