import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  
  userType = localStorage.getItem('type') 

  constructor(private global:GlobalService , private router:Router){
    this.global.getProfile().subscribe((res)=>{
      this.userData = res.data.userData
      this.userSales = res.data.userSales
      this.userUnits = res.data.userUnits
    },(err)=>{
      console.log(err);
      
    })
  }

  invoice(id:any){
    this.global.invoices(id).subscribe((res)=>{
      // const pdfUrl = URL.createObjectURL(res);
      window.open(res);
      
    },(err)=>{
      console.log(err);
      
    })
  }
}
