import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorFlag = false;
  errMessage = '';
  submitFlag = false;
  token = localStorage.getItem('token');

  userData : Login ={
    userName:'',
    password:''
  }

  loginForm = new FormGroup({
    userName: new FormControl("" , [Validators.required , Validators.pattern("^[1 | 2 | 3][0-9]{13}$")]), 
    password: new FormControl("" , [Validators.required]),
  })

  constructor(private router: Router , private global:GlobalService){
    if(this.token){
      this.router.navigate([''])
    }
  }

  get Data() {return this.loginForm.controls}

  handleSubmit(){
    this.userData = {
      userName : this.Data.userName.value,
      password : this.Data.password.value
    }
    if(this.loginForm.valid){
      this.global.login(this.userData).subscribe((res)=>{
        localStorage.setItem('token', res.data.token);
        console.log(res.data.token);
        console.log(res.data.userData.role.rolename);
        
        
        localStorage.setItem('role', res.data.userData.role.rolename);
        this.router.navigate([''])
        
      } , (err)=>{
        this.errorFlag = true;
        this.errMessage = err.error.message
        
    
      }, ()=>{
      }
      )
    }
    }
  }




