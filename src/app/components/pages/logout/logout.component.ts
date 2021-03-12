import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private localStorage:CookieService,private route:Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.localStorage.removeAll();

  }


  login(){
    this.route.navigate(['/']);
  }

}
