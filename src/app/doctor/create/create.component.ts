import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/_services/doctor.service';
import { PatientDetailService } from 'src/app/_services/patient-detail.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  created: string = '';
  abhaId: string = '';
  first_name: string = '';
  last_name: string = '';
  address_line_1: string = '';
  address_line_2: string = '';
  district: string = '';
  mobile_no: string = '';
  pin_code: string = '';
  socioeconomic_status = '';
  state = '';
  gender = '';
  education = '';
  dob = '';




  constructor(private doctorService: DoctorService, 
              private patientDetailService: PatientDetailService) { }

  ngOnInit(): void {
    this.created = '';
  }

  create(createPatientForm: NgForm){
    console.log(createPatientForm.value);
    this.doctorService.createPatient(createPatientForm.value).subscribe({
      next: (response: any) => {
        // console.log(response);
        this.created = '1';
      },
      error: (error) => {
        console.log(error);
        this.created = '0';
      }
    });
  }

  search(){
    console.log(this.abhaId);
    this.patientDetailService.getDetail(this.abhaId).subscribe({
      next: (response: any) => {
        if(response===null){
          alert(`ABHA ID: ${this.abhaId} is Invalid!`);
        }else{
          // console.log("API Response: ",response);
          this.first_name = response.first_name;
          this.last_name = response.last_name;
          this.address_line_1 = response.address_line_1;
          this.address_line_2 = response.address_line_2;
          this.district = response.district;
          this.mobile_no = response.mobile_no;
          this.pin_code = response.pin_code;
          this.socioeconomic_status = response.socioeconomic_status;
          this.state = response.state;
          this.gender = response.gender;
          this.education = response.education; 
          this.dob = response.dob;
        }
      },
      error: (error) => {
        console.log(error);
        
      }
     })
  }

  

}
