import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo : Array<Iusers> = [];
  slectedUser !: Iusers;
  constructor(private _usersService : UsersService) { }

  ngOnInit(): void {
    this.usersInfo = this._usersService.getAllUsers();
    this.slectedUser = this.usersInfo[0]
  }

}
