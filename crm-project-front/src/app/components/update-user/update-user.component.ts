import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/register'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EditUser } from 'src/app/interfaces/edit-user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userRole = localStorage.getItem('role');




  roles:any
  successFlag = false
  successMessage = ""
  errorMessage = ""
  errorFlag = false
  submitFlag = false
  role = {
    roleName: '',
    roleId: ''
  }
  roleIndex :any
  userId:any

  userData:EditUser={
    fName: '',
    lName: '',
    userName: '',
    phone: '',
    role: {
      roleName:'',
      roleId:''
    }
  }


  registerForm = new FormGroup({
    fName: new FormControl("" , [Validators.required]),
    lName: new FormControl("" , [Validators.required]),
    userName: new FormControl("" , [Validators.required , Validators.pattern("^[2 | 3][0-9]{13}$")]),
    // rePassword: new FormControl("" , [Validators.required]),
    phone: new FormControl("" , [Validators.required , Validators.pattern("^(01)[0 | 1 | 2 | 5][0-9]{8}$")]),
  })

  get Data() {return this.registerForm.controls}

  constructor(private activated : ActivatedRoute , private router: Router, private global:GlobalService){
    this.userId = this.activated.snapshot.paramMap.get('userId')

    this.global.getRoles().subscribe((res)=>{
    this.roles = res.data
    } , ()=>{
  
    }, ()=>{
      this.global.getUser(this.userId).subscribe((res)=>{
        this.registerForm.patchValue(res.data.userData)
        
      },(err)=>{
  
      })
    }
    )
  }


  selectedRole(ev:any){
    this.role.roleName = this.roles[ev.target.value].roleName
    this.role.roleId = this.roles[ev.target.value]._id  
  }

  handleSubmit() {
    this.submitFlag = true;
    
    this.userData = {
      fName: this.Data.fName.value,
      lName: this.Data.lName.value,
      userName: this.Data.userName.value,
      phone: this.Data.phone.value,
      role: this.role
    }

    if(this.registerForm.valid){
      this.global.updateUser(this.userData , this.userId).subscribe((res)=>{
        this.successFlag = true;
        this.errorFlag = false;
        this.successMessage = "User updated successfully";
      }, (err)=>{
        this.errorFlag = true;
        this.successFlag = false;
        this.errorMessage = err.error.message;
        
      }, ()=>{

      })
    }
    
    

    
    
  }

}

