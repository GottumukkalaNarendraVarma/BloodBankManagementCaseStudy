import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RequestorauthenticationService } from './requestorauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RequestorauthguardService {

  constructor(private router: Router,
    private authService: RequestorauthenticationService) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isRequestorLoggedIn())
      return true;
    this.router.navigate(['loginrequestor']);
    return false;
  }
}
