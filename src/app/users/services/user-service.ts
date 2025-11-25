import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly urlUserBase = 'http://localhost:3000/users';
  private readonly http = inject(HttpClient);

  addUser(user : User){
    return this.http.post<User>(this.urlUserBase,user);
  }

  
}
