import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class PreventLoggedInAccess implements CanActivate {
  constructor(
    private router:Router,
    private auth:AuthService
    ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(["/"]);
        return false;
      } else {
        return true
      }
  }
}