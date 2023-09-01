import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInStatus: boolean = false;
  constructor(private _router: Router) { }


  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem("token")) {
          this.isLoggedInStatus = true
        } else {
          this.isLoggedInStatus = false;
        }
        resolve(this.isLoggedInStatus)
      }, 1000);
    })
  }

  getStatusOfLoggedIn() {
    return this.isLoggedInStatus;
  }

  logInToApp(username: string, pass: string) {
    if (username === "jhon@gmail.com" && pass == "zaq1ZAQ!") {
      this.isLoggedInStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "user");
      this._router.navigate(['home'])
    } else if (username === "jen@gmail.com" && pass == "zaq1ZAQ!") {
      this.isLoggedInStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "admin");
      this._router.navigate(['home'])
    }

    else {
      alert(`Invalid Username and password`)
      this._router.navigate(['/'])
    }

  }

  logOutFromApp() {
    /// 
    this.isLoggedInStatus = false;
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
  }
}
