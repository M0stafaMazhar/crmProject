import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userRole = localStorage.getItem('role');




  usersData: any;
  customersData: any;
  employeesData: any;



  constructor(private global:GlobalService){
    this.global.getUsers().subscribe((res)=>{
      this.usersData = res.data
      this.customersData = this.usersData.filter((u: any)=> u.userType == "customer")
      this.employeesData = this.usersData.filter((u: any)=> u.userType == "employee")
    } , (err)=>{
      console.log(err);
      
    }, ()=>{
    }
    )
  }

  deleteUser(userId:string , i:number , userType:any){
    this.global.deleteUser(userId).subscribe((res)=>{
      if(userType == "customer"){
      this.customersData.splice(i,1)
    } else if(userType == "employee"){
      this.employeesData.splice(i,1)
    }
    },
    (err)=>{
    },()=>{

    })

  }


}
