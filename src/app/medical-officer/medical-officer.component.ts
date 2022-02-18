import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-medical-officer',
  templateUrl: './medical-officer.component.html',
  styleUrls: ['./medical-officer.component.css']
})
export class MedicalOfficerComponent implements OnInit {

  constructor(private doctorService: DoctorService,
              private router: Router) { }

  message: string = "";
  ngOnInit(): void {
    this.forMedicalOfficer();
  }

  forMedicalOfficer(){
    this.doctorService.medicalOfficer().subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    })
  }

}
