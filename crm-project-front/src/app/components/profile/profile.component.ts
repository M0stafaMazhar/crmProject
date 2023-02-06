import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData:any
  userSales:any
  userUnits:any

  constructor(private global:GlobalService){
    this.global.getProfile().subscribe((res)=>{
      this.userData = res.data.userData
      this.userSales = res.data.userSales
      this.userUnits = res.data.userUnits
    },(err)=>{
      console.log(err);
      
    })
  }
}
