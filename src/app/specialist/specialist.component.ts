import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  constructor(private doctorService: DoctorService,
              private router: Router) { }

  message: string = "";
  ngOnInit(): void {
    this.forSpecialist();
  }

  forSpecialist(){
    this.doctorService.specialist().subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (error) => {
        console.log(error);
        // this.router.navigate(['/login']);
      }
    })
  }

}
