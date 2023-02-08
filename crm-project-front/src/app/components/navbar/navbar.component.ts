import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userType = localStorage.getItem('type');
  token = localStorage.getItem('token');

  constructor(private global : GlobalService , private router : Router){}

  logout(){
    this.global.logOut().subscribe((res)=>{
      localStorage.clear()
      window.location.href = ''
      // this.router.navigateByUrl("")
    })
  }

}
