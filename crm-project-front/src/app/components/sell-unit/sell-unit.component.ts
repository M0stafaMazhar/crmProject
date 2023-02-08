import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { SellUnit } from 'src/app/interfaces/sell-unit';


@Component({
  selector: 'app-sell-unit',
  templateUrl: './sell-unit.component.html',
  styleUrls: ['./sell-unit.component.css']
})
export class SellUnitComponent {
  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';
  userId:any;
  unitId:any;

  usersData:any



  sellUnit:SellUnit={
    customerId:'',
    downPayment:'',
    numOfPayments:"",
  }
  constructor(private activated : ActivatedRoute , private global:GlobalService){
    this.unitId = this.activated.snapshot.paramMap.get('unitId')
    this.global.getUsers().subscribe((res)=>{
      this.usersData = res.data;
    })
  }

  get Data() {return this.sellUnitForm.controls}


  sellUnitForm = new FormGroup({
    customerId: new FormControl("" , [Validators.required]),
    downPayment: new FormControl("" , [Validators.required , Validators.pattern("^[0-9]{4,}$")]),
    numOfPayments: new FormControl( "", [Validators.required , Validators.pattern("^[0-9]{1,3}$")]),
  })

  selectedUser(ev:any){
    this.userId = ev.target.value
  }

  onSubmit(){
    if(this.sellUnitForm.valid){
      this.submitFlag = true;
      this.sellUnit = {
        customerId: this.Data.customerId.value,
        downPayment: this.Data.downPayment.value,
        numOfPayments: this.Data.numOfPayments.value
      }

      console.log(this.sellUnit);
      this.global.sellUnit(this.sellUnit , this.unitId).subscribe((res)=>{
        this.successFlag = true;
        this.errFlag = false;
        this.successMessage = res.data.message
        
      }, (err)=>{
        this.errFlag = true;
        this.successFlag = false;
        this.errMessage = err.error.message
      })
    }
  }



}
