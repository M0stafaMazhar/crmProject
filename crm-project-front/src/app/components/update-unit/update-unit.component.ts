import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/interfaces/unit';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.css']

})
export class UpdateUnitComponent {

  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';
  unit:any

  unitData:Unit={
    unitNum:'',
    unitDescription:'',
    unitSize:'',
    price:'',
    floorId:''
  }

  updateUnitForm = new FormGroup({
    unitNum: new FormControl('' , [Validators.required]),
    unitDescription: new FormControl('' , [Validators.required]),
    unitSize: new FormControl('' , [Validators.required]),
    price: new FormControl('' , [Validators.required]),
    status: new FormControl('', [Validators.required])
  })



  constructor(private activated : ActivatedRoute , private global : GlobalService){
     let unitId = this.activated.snapshot.paramMap.get('unitId')
     
     this.global.getUnit(unitId).subscribe((res)=>{
      this.unit = res.data
      this.updateUnitForm.patchValue(this.unit) 
     },(err)=>{
     })
  }
  
  get Data() {return this.updateUnitForm.controls}

  onSubmit(){
    this.submitFlag = true;
    if(this.updateUnitForm.valid){

    this.unitData = {
      unitNum: this.Data.unitNum.value,
      unitDescription: this.Data.unitDescription.value,
      unitSize: this.Data.unitSize.value,
      price: this.Data.price.value,
      floorId:this.unit.floorId
    }

    this.global.updateUnit( this.unitData , this.unit._id ).subscribe((res)=>{
      this.successFlag = true;
      this.errFlag = false;
      this.successMessage = "Unit Updated successfully"
      
    },(err)=>{
      this.errFlag = true;
      this.successFlag = false;
      this.errMessage = err.error.message
    },()=>{

    })

  }
}




}
