import { Component, OnInit } from '@angular/core';
import { DoctorAuthService } from 'src/app/_services/doctor-auth.service';
import { DoctorService } from 'src/app/_services/doctor.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent implements OnInit {
  referrals: any = [];

  constructor(private doctorService: DoctorService,
              private doctorAuthService: DoctorAuthService) { }

  ngOnInit(): void {
    this.doctorService.getReferrals(this.doctorAuthService.getId()).subscribe({
      next: (response: any) => {
        this.referrals = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
