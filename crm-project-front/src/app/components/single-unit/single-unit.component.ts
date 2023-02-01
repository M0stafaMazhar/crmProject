import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-unit',
  templateUrl: './single-unit.component.html',
  styleUrls: ['./single-unit.component.css']
})
export class SingleUnitComponent {

  unitData : any
  images:any
  baseUrl = "http://localhost:3000/public/images/uploads/"

  constructor(private activated : ActivatedRoute , private global : GlobalService){
    let unitId = this.activated.snapshot.paramMap.get('unitId')
    this.global.getUnit(unitId).subscribe((res)=>{
      this.unitData = res.data
      this.images = this.unitData.unitImages
    },(err)=>{
      console.log(err);
      
    })
  }

}

