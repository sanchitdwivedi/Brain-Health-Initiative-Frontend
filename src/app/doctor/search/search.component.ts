import { Component, OnInit } from '@angular/core';
import { DateShareService } from 'src/app/_services/date-share.service';
import { PatientDetailService } from 'src/app/_services/patient-detail.service';
import { AbhaDetailService } from './../../_services/abha-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  abhaId: string = '';
  mobileNumber: number;
  name: string = '';
  hasConsent: boolean;
  reports = [];
  isRegisterButton: boolean = true;
  routePath: string = '/doctor/create-patient';
  buttonText: string = 'Register New Patient'
  errorMessage1: string = 'Please enter either ABHA ID or Mobile Number and Name to search patient!!';
  errorMessage4: string = 'There is no patient with this ABHA ID';
  errorMessage6: string = 'There is not patient with this mobile number and name';
  errorMessage5: string = 'There is no consultation form of this patient';

  optionValue: string = 'abha';
  registerDisabled: boolean = true;

  constructor(private abhaDetailService: AbhaDetailService, private dataShareService: DateShareService,
              private patientDetailService: PatientDetailService) { }

  ngOnInit(): void {
    this.dataShareService.clearQuestionnaireResponse();
    if(this.dataShareService.getPatient()){
      this.abhaId=this.dataShareService.getPatient().abhaId;
      this.hasConsent = true;
      this.search();
    }
  }

  async search() {
    if(this.optionValue === 'abha'){
      this.patientDetailService.getPatientByAbhaId(this.abhaId).subscribe({
        next: (response: any) => {
          this.dataShareService.sendPatient(response);
          if(response===null || response.length===0){
            this.isRegisterButton = false;
            this.changeButton();
            this.reports = [];
            alert(this.errorMessage4);
          }
          else{
            // this.dataShareService.sendPatient(response);
            this.abhaDetailService.getPatientConsultationByAbhaId(this.abhaId).subscribe({
              next: (response: any) => {
                this.reports = response;
                this.isRegisterButton = true;
                if(this.reports===null || this.reports.length===0){ 
                  this.changeButton();  
                  this.reports = [];
                  alert(this.errorMessage5);
                }else{
                  this.changeButton();
                  this.dataShareService.sendReports(this.reports);
                }
              },
              error: (error: any) => {
                console.log(error);
              }
            })
          }
        },
        error: (error: any) => {
          console.log(error);
        }
      })
      
      
    }else if(this.optionValue === 'name'){
      this.patientDetailService.getPatientByMobileAndName(this.name, this.mobileNumber).subscribe({
        next: (response: any) => {
          // this.reports = response;
          this.dataShareService.sendPatient(response);
          if(response===null || response.length===0){
            this.isRegisterButton = false;
            this.changeButton();  
            this.reports = [];
            alert(this.errorMessage6);
          }
          else{
            this.abhaDetailService.getPatientConsultationByAbhaId(response.abhaId).subscribe({
              next: (response: any) => {
                this.reports = response;
                this.isRegisterButton = true;
                if(this.reports===null || this.reports.length===0){
                  this.changeButton();  
                  this.reports = [];
                  alert(this.errorMessage5);
                }else{
                  this.changeButton();
                  this.dataShareService.sendReports(this.reports);
                }
              },
              error: (error: any) => {
                console.log(error);
              }
            })
          }
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }else{
        alert(this.errorMessage1);
    }
  }
  
  changeButton(){
    if(this.isRegisterButton){
      this.buttonText = 'Consultation Form'
      this.routePath = '/doctor/consultation-form'
      this.registerDisabled = false;
    }else{
      this.buttonText = 'Register New Patient'
      this.routePath = '/doctor/create-patient'
      this.registerDisabled = false;
    }
  }

  onChange(event: any){
    this.optionValue = event.target.value;
  }
}
