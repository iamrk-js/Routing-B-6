import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService : AuthService,
    private _router : Router) { }
    userRole : string = 'admin'; // localStorage
  ngOnInit(): void {
    console.log(localStorage.getItem("userRole"))
  }
  // logIn(){
  //   this._authService.logInToApp()
  // }
  logOut(){
    this._router.navigate(['/'])
    this._authService.logOutFromApp();
   
  }
}
