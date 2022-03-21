import { Component, OnInit } from '@angular/core';
import { DoctorAuthService } from 'src/app/_services/doctor-auth.service';
import { DoctorService } from 'src/app/_services/doctor.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: any = [];

  constructor(private doctorService: DoctorService,
              private doctorAuthService: DoctorAuthService) { }

  ngOnInit(): void {
    this.doctorService.getPatients(this.doctorAuthService.getId()).subscribe({
      next: (response: any) => {
        this.patients = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
