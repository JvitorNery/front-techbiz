import { Injectable } from '@angular/core';
import { CanActivate
         // ,ActivatedRouteSnapshot
         // ,RouterStateSnapshot
} from '@angular/router';

import { UserService } from '../services/user.service';
@Injectable()
export class AccessRouteGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(): boolean {
    return this.userService.authenticated;
  }
}
