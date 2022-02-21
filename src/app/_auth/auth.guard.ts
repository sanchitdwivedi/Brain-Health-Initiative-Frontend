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
        const role = route.data["role"];

        if(role!==null && role.length>0){
          let match = false;
          for(let i=0; i<role.length; i++){
            if(this.doctorAuthService.getRole()===role[i]){
              match=true;
              break;
            }
          }
          // const match = this.doctorService.roleMatch(role);

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
