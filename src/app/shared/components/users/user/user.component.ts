import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !: number;
  userObject !: Iusers;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot);
    // this.userId = +this._route.snapshot.params['userId'];
    // this.userObject = this._userService.getSingleUser(this.userId);
    // console.log(this.userObject)
    this._route.params
          .subscribe((myParams : Params) => {
            console.log(myParams)
            this.userId = +myParams['userId'];
            this.userObject = this._userService.getSingleUser(this.userId);
          })

  }

  goToEditUser(){
    this._router.navigate(['edit'], {relativeTo : this._route})
  }
  // baseurl/users/id ?? in relative path currentUrl/edit
  //it will redirect to >>  baseUrl/users/id/edit 
}
