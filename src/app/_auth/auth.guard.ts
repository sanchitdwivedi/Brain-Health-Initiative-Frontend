import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorAuthService } from '../_services/doctor-auth.service';
import { DoctorService } from '../_services/doctor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private doctorAuthService: DoctorAuthService,
              private router: Router,
              private doctorService: DoctorService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.doctorAuthService.getToken()!==null && this.doctorAuthService.getToken()){
        const role = route.data["role"] as string

        if(role!==null && role){
          const match = this.doctorService.roleMatch(role);

          if(match) return true;
          else {
            this.router.navigate(['forbidden']);
            return false;
          }
        }
      }

      this.router.navigate(['/login']);
      return false;
  }
  
}
