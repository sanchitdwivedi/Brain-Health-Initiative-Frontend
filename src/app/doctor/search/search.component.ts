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
  reports: any = [];
  routePath: string = '/doctor/create-patient';
  buttonText: string = 'Register New Patient'
  errorMessage1: string = 'Please enter either ABHA ID or Mobile Number to search patient!!';
  errorMessage2: string = 'Either ABAH ID & Mobile Number Or Patient is not registered (this is no consultataion form exist';

  // abhaId: string = '';
  // mobileNumber: string = '';
  // hasConsent: boolean;
  // reports: [];

  constructor(private abhaDetailService: AbhaDetailService) { }

  ngOnInit(): void {
  }

  search() {
    if (this.abhaId === '' && this.mobileNumber === '') {
      alert(this.errorMessage1);
    }else if(this.abhaId !== ''){
      this.getPatientConsultationByAbhaId(this.abhaId);
      if(this.reports===[]){
        this.getPatientConsultationByMobileNo(this.mobileNumber);
        if(this.reports===[]){
          alert(this.errorMessage2);
        }else{
          // this.changeButton();
        }
      }else{
        // this.changeButton();
      }
    }else if(this.mobileNumber !== ''){
      this.getPatientConsultationByMobileNo(this.mobileNumber);
      if(this.reports===[]){
        alert(this.errorMessage2);
      }else{
        // this.changeButton();
      }
    }

    if(this.reports!=[]){
      this.changeButton()
    }
  }
  
  changeButton(){
    this.buttonText = 'Consultation Form'
    this.routePath = '/doctor/consultation-form'
  }

  getPatientConsultationByAbhaId(abhaId: string) {
    this.abhaDetailService.getPatientConsultationByAbhaId(abhaId).subscribe({
      next: (response: any) => {
        this.reports = response;
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getPatientConsultationByMobileNo(mobileNumber: string) {
    this.abhaDetailService.getPatientConsultationByMobileNo(mobileNumber).subscribe({
      next: (response: any) => {
        this.reports = response;
        this.getPatientConsultationByAbhaId(response.abhaId);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

<<<<<<< HEAD
  // public isLoggedIn(){
  //   return this.doctorAuthService.isLoggedIn();
  // }

  // public logout(){
  //   this.doctorAuthService.clear();
  //   this.router.navigate(['/login']);
  // }

  // public roleMatch(allowedRole: any): boolean{
  //   if(!this.isLoggedIn()) return false;
  //   for(let i=0; i<allowedRole.length; i++){
  //     if(this.doctorService.roleMatch(allowedRole[i])) return true;
  //   }
  //   return false;
  // }
=======
>>>>>>> patientCard

}
