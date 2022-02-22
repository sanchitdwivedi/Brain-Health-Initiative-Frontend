import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/_services/doctor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  created: string = '';

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.created = '';
  }

  create(createPatientForm: NgForm){
    console.log(createPatientForm.value);
    this.doctorService.createPatient(createPatientForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.created = '1';
      },
      error: (error) => {
        console.log(error);
        this.created = '0';
      }
    });
  }

}
