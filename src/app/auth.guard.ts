import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private router:Router,
    private auth:AuthService
    ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log(this.auth.isLoggedIn())
      if (this.auth.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(["/uzivatel"]);
        return false
      }
  }
}