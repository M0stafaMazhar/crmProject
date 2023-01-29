import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
userData :any;
constructor(private global:GlobalService ,private activated : ActivatedRoute ){
  let userId = this.activated.snapshot.paramMap.get('userId')
  this.global.showUser(userId).subscribe((res)=>{
    this.userData = res.data
  } , ()=>{

  }, ()=>{
  }
  )
}
}

