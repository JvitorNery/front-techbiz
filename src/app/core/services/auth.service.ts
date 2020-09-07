import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient,
              private readonly userService: UserService) {}

  // TO DO: type the response object and create the mapping url
  authenticate(user: string, password: string): Observable<any> {
    return this.http.post('myUrl.com.br', {user, password}).pipe(
      tap((userResponse: User) => this.userService.next(userResponse)),
      catchError((err: HttpErrorResponse) => {
        console.log(err.message);
        return throwError(err);
      })
    );
  }

  // TO DO: type the response object and create the mapping url
  signOff(): Observable<any> {
    return this.http.post('myUrl.com.br', {}).pipe(
      tap(() => this.userService.next(new User())),
      catchError((err: HttpErrorResponse) => {
        console.log(err.message);
        return throwError(err);
      })
    );
  }
}
