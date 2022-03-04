import { Component, OnInit } from '@angular/core';
import { AbhaDetailService } from './../../_services/abha-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  abhaId: string = '';
  mobileNumber: string = '';
  hasConsent: boolean;
  reports = [];
  isRegisterButton: boolean = true;
  routePath: string = '/doctor/create-patient';
  buttonText: string = 'Register New Patient'
  errorMessage1: string = 'Please enter either ABHA ID or Mobile Number to search patient!!';
  errorMessage2: string = 'Either patient not registered or No consultation form exist corresponding to given ABHA ID!';
  errorMessage3: string = 'Either patient not registered or No consultation form exist corresponding to given Mobile Number!';

  constructor(private abhaDetailService: AbhaDetailService) { }

  ngOnInit(): void {
  }

  async search() {
    if(this.abhaId !== ''){
      await this.abhaDetailService.getPatientConsultationByAbhaId(this.abhaId).subscribe({
        next: (response: any) => {
          this.reports = response;
          if(this.reports===null || this.reports.length===0){ 
            this.isRegisterButton = false;
            this.changeButton();  
            alert(this.errorMessage2);
          }else{
            this.isRegisterButton = true;
            this.changeButton();
          }
        },
        error: (error: any) => {
          console.log(error);
        }
      })
      
    }else if(this.mobileNumber !== ''){
      await this.abhaDetailService.getPatientConsultationByMobileNo(this.mobileNumber).subscribe({
        next: async (response: any) => {
          this.reports = response;
          if(response !==null && response.length!==0){
            await this.abhaDetailService.getPatientConsultationByAbhaId(this.abhaId).subscribe({
              next: (response: any) => {
                this.reports = response;
                if(this.reports===null || this.reports.length===0){ 
                  this.isRegisterButton = false;
                  this.changeButton();  
                  alert(this.errorMessage3);
                }else{
                  this.isRegisterButton = true;
                  this.changeButton();
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
    }else{
      this.buttonText = 'Register New Patient'
      this.routePath = '/doctor/create-patient'
    }
  }
}
