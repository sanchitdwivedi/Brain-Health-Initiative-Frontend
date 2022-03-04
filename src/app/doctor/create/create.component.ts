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
  patient_detail: any;
  is_filled: boolean = false;




  constructor(private doctorService: DoctorService,
    private patientDetailService: PatientDetailService) { }

  ngOnInit(): void {
    this.created = '';
  }

  create(createPatientForm: NgForm) {
    console.log("createPatient Called")
    var response = this.patient_detail;
    console.log(response)
    console.log("Create Patient Values: ", createPatientForm.value);

    createPatientForm.value.first_name = response.first_name;
    createPatientForm.value.last_name = response.last_name;
    createPatientForm.value.address_line_1 = response.address_line_1;
    createPatientForm.value.address_line_2 = response.address_line_2;
    createPatientForm.value.district = response.district;
    createPatientForm.value.mobile_no = response.mobile_no;
    createPatientForm.value.pin_code = response.pin_code;
    createPatientForm.value.socioeconomic_status = response.socioeconomic_status;
    createPatientForm.value.state = response.state;
    createPatientForm.value.gender = response.gender;
    createPatientForm.value.education = response.education;
    createPatientForm.value.dob = response.dob;

    this.doctorService.createPatient(createPatientForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.created = '1';
      },
      error: (error: any) => {
        console.log(error);
        this.created = '0';
      }
    });
  }

  countDigits(){
    if(this.abhaId.length===12){
      this.search();
    }
    this.is_filled = false;
  }

  search() {
    console.log(this.abhaId);
    this.patientDetailService.getDetail(this.abhaId).subscribe({
      next: (response: any) => {
        if (response === null) {
          this.abhaId = "";
          this.patient_detail = "";
          this.first_name = "";
          this.last_name = "";
          this.address_line_1 = "";
          this.address_line_2 = "";
          this.district = "";
          this.mobile_no = "";
          this.pin_code = "";
          this.socioeconomic_status = "";
          this.state = "";
          this.gender = "";
          this.education = "";
          this.dob = "";
          alert(`ABHA ID: ${this.abhaId} is Invalid!`);
        } else {
          this.patient_detail = response;
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
          this.is_filled = true;
          alert(`Fields populated from National Health Record!`);
        }
      },
      error: (error) => {
        console.log(error);

      }
    })
  }
}
