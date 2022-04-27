import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../_services/doctor-auth.service';
import { DoctorService } from '../_services/doctor.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = '';

  constructor(private doctorService: DoctorService,
    private doctorAuthService: DoctorAuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    if (this.doctorAuthService.isLoggedIn()) {
      const role: string = this.doctorAuthService.getRole();
      if (role === "secondary specialist" || role === "medical officer") this.router.navigate(['/doctor/search-patient']);
      else if (role === "admin") this.router.navigate(['/admin']);
      else if (role === 'program manager') this.router.navigate(['/programManager']);
    }
  }

  login(loginForm: NgForm) {
    this.doctorService.login(loginForm.value).subscribe({
      next: (response: any) => {
        const role = response.user.role.roleName;
        if (role === 'secondary specialist' || role === 'medical officer') {
          if (response.user.status === 0) {
            this.doctorService.tempToken = response.jwtToken;
            this.router.navigate([`/update-password/${response.user.userId}`]);
          }
          else {
            this.doctorAuthService.setId(response.user.userId);
            this.doctorAuthService.setRole(role);
            this.doctorAuthService.setToken(response.jwtToken);
            this.router.navigate(['/doctor/search-patient']);
          }
        } else if (role === 'admin') {
          this.doctorAuthService.setId(response.user.userId);
          this.doctorAuthService.setRole(role);
          this.doctorAuthService.setToken(response.jwtToken);
          this.router.navigate(['/admin']);
        } else if (role === 'program manager') {
          this.doctorAuthService.setId(response.user.userId);
          this.doctorAuthService.setRole(role);
          this.doctorAuthService.setToken(response.jwtToken);
          this.router.navigate(['/program-manager']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log(error);
        this._snackBar.open("Invalid credentials!", "", {duration: 3000});
      }
    });
  }
}
