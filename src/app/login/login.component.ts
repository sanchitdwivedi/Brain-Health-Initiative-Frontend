import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../_services/doctor-auth.service';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private doctorService: DoctorService, 
              private doctorAuthService: DoctorAuthService,
              private router: Router) { }

  ngOnInit(): void {
    // this.checkLoggedIn();
  }

  // checkLoggedIn(){
  //   if(this.doctorAuthService.isLoggedIn()){
  //     const role: string = this.doctorAuthService.getRole();
  //     if(role==="specialist") this.router.navigate(['/specialist']);
  //     else if(role==="medical officer") this.router.navigate(['/medical-officer']);
  //   }
  // }

  login(loginForm: NgForm) {
    this.doctorService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const role = response.doctor.role.roleName; 
        if(role==='specialist' || role==='medical officer'){
          this.doctorAuthService.setRole(role);
          this.doctorAuthService.setToken(response.jwtToken);
          this.router.navigate(['/doctor/search-patient']);
        }else{
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
