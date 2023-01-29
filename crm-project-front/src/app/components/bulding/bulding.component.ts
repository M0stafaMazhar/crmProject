import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulding',
  templateUrl: './bulding.component.html',
  styleUrls: ['./bulding.component.css']
})
export class BuldingComponent {
  buldingData: any
  images:any
  floors:any
  units:any
  baseUrl = "http://localhost:3000/public/images/uploads/"
  constructor(private activated : ActivatedRoute , private global : GlobalService){
    let buldingId = this.activated.snapshot.paramMap.get('buldingId')
    this.global.getBulding(buldingId).subscribe((res)=>{
      this.buldingData = res.data;
      this.images = this.buldingData.buldingImages
      this.floors = this.buldingData.floors
      
    }, (err)=>{
      console.log(err.error);
      
    },()=>{

    })
  }

  selectedFloor(e:any){
    console.log(e.target.value);
    
    this.global.getFloorUnits(e.target.value).subscribe((res)=>{
     console.log(res);
     this.units = res.data
      
    },(err)=>{
      console.log(err);
      
    },()=>{

    })
  }

}
