import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/interfaces/unit';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  submitFlag = false;
  errFlag = false;
  successFlag = false;
  errMessage = '';
  successMessage = '';
  floorId:any;

  images:any

  unitData:Unit={
    unitNum:'',
    unitDescription:'',
    unitSize:'',
    price:'',
    floorId:''
  } 

  unitForm = new FormGroup({
    unitNum: new FormControl("" , [Validators.required]),
    unitDescription: new FormControl("" , [Validators.required]),
    unitSize: new FormControl("" , [Validators.required , Validators.pattern("^[0-9]{2,5}$")]),
    price: new FormControl("" , [Validators.required , Validators.pattern("^[0-9]{6,}$")]),
    images:new FormControl("" , [Validators.required])
  })



  constructor(private activated : ActivatedRoute , private global : GlobalService){
     this.floorId = this.activated.snapshot.paramMap.get('floorId')
  }
  

  get Data() {return this.unitForm.controls}

  imageUpload(ev:any){
    this.images = [...ev.target.files]
    
  }

  onSubmit(){
    this.submitFlag = true;
    if(this.unitForm.valid){

    this.unitData = {
      unitNum: this.Data.unitNum.value,
      unitDescription: this.Data.unitDescription.value,
      unitSize: this.Data.unitSize.value,
      price: this.Data.price.value,
      floorId: this.floorId
    }

    let formData = new FormData()
    formData.append("unitNum", this.unitData.unitNum);
    formData.append("unitDescription", this.unitData.unitDescription);
    formData.append("unitSize", this.unitData.unitSize)
    formData.append("price", this.unitData.price)
    formData.append("floorId", this.floorId)

    this.images.forEach((im: any) => formData.append("avatar", im))

    this.global.addUnit(formData , this.floorId).subscribe((res)=>{
      this.successFlag = true;
      this.errFlag = false;
      this.successMessage = "Project added successfully"
      
    },(err)=>{
      this.errFlag = true;
      this.successFlag = false;
      this.errMessage = err.error.message
    },()=>{

    })

  }
}



}
