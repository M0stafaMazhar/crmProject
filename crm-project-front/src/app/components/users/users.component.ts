import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersData: any;
  constructor(private global:GlobalService){
    this.global.getUsers().subscribe((res)=>{
      this.usersData = res.data
    } , ()=>{
  
    }, ()=>{
    }
    )
  }

  deleteUser(userId:string , i:number){
    this.global.deleteUser(userId).subscribe((res)=>{
      console.log(res);
      this.usersData.splice(i,1)
    
           
    },
    (err)=>{
      console.log(err);
      
    },()=>{

    })

  }


}
