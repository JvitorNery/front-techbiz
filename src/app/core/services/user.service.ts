import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<User>  = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User> = this.userSubject.asObservable();
  public authenticated = false;

  constructor() {}

  public next(user: User) {
    this.userSubject.next(user);
    this.authenticated = !!user && !!user.email;
  }

}
