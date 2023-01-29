import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/register'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


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

  userData:Register={
    fName: '',
    lName: '',
    userName: '',
    password: '',
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
    password: new FormControl("" , [Validators.required , Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]),
    // rePassword: new FormControl("" , [Validators.required]),
    phone: new FormControl("" , [Validators.required , Validators.pattern("^(01)[0 | 1 | 2 | 5][0-9]{8}$")]),
    role: new FormControl("" , [Validators.required]),
  })

  get Data() {return this.registerForm.controls}

  constructor(private router: Router, private global:GlobalService){
    this.global.getRoles().subscribe((res)=>{
      this.roles = res.data
    } , ()=>{
  
    }, ()=>{
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
      password: this.Data.password.value,
      phone: this.Data.phone.value,
      role: this.role
    }

    console.log(this.registerForm.valid);
    
    if(this.registerForm.valid){
      this.global.register(this.userData).subscribe((res)=>{
        this.successFlag = true;
        this.successMessage = res.message;
      }, (err)=>{
        this.errorFlag = true;
        this.errorMessage = err.error.message;
        
      }, ()=>{

      })
    }
    
    

    
    
  }

}
