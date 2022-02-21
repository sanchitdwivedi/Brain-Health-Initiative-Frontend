import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../_services/doctor-auth.service';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private doctorAuthService: DoctorAuthService,
              private router: Router,
              private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.doctorAuthService.isLoggedIn();
  }

  public logout(){
    this.doctorAuthService.clear();
    this.router.navigate(['/login']);
  }

  public roleMatch(allowedRole: any): boolean{
    if(!this.isLoggedIn()) return false;
    for(let i=0; i<allowedRole.length; i++){
      if(this.doctorService.roleMatch(allowedRole[i])) return true;
    }
    return false;
  }
}
