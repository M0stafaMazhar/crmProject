import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  userData:any
  userSales:any
  userUnits:any
  userType:any

  constructor(private activated : ActivatedRoute , private global:GlobalService){
    let userId = this.activated.snapshot.paramMap.get('userId')
    this.global.getUser(userId).subscribe((res)=>{
      this.userData = res.data.userData
      this.userSales = res.data.userSales
      this.userUnits = res.data.userUnits
      this.userType = res.data.userType
    },(err)=>{
      console.log(err);
      
    })
  }

  paymentStatus(paymentId:any , unitIndex:any){
    this.global.changePaymentStat(paymentId).subscribe((res)=>{
      this.userUnits[unitIndex] = res.data
    },(err)=>{
    })
  }
}

