import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  rolesData: any

  constructor(private global : GlobalService){
  this.global.getRoles().subscribe((res) =>{
  this.rolesData = res.data
  })
  }

  deleteRole(id:any , i:any){
    this.global.deleteRole(id).subscribe((res) =>{
      this.rolesData.splice(i , 1)
      
    })
  }
}
