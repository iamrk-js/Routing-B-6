import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray: Array<Iusers> = [
    {
      username: "Jhon",
      id: 1,
      userRole : 'user'
    },
    {
      username: "Jen",
      id: 2,
      userRole : 'admin'
    },
    {
      username: "July",
      id: 3,
      userRole : 'user'
    }
  ]
  constructor() { }
  getAllUsers(): Array<Iusers> {
    return this.usersArray;
  }

  getSingleUser(id: number) : Iusers{
    return this.usersArray.find(user => user.id === id)!
  }
}
