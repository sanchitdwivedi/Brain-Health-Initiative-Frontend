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
  reports: [];

  constructor(private abhaDetailService: AbhaDetailService) { }

  ngOnInit(): void {
  }

  search() {
    if (this.abhaId === '' && this.mobileNumber === '') {
      alert("Please enter either ABHA ID or Mobile Number to search patient!!")
    }else if(this.abhaId !== ''){
      this.getPatientConsultationByAbhaId(this.abhaId);
      if(this.reports===[]){
        this.getPatientConsultationByMobileNo(this.mobileNumber);
      }else{
        alert("Either ABAH ID & Mobile Number Or Patient is not registered (this is no consultataion form exist)")
      }
    }else if(this.mobileNumber !== ''){
      this.getPatientConsultationByMobileNo(this.mobileNumber);
    }else{
      alert("Either ABAH ID & Mobile Number Or Patient is not registered (this is no consultataion form exist)")
    }
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


}
