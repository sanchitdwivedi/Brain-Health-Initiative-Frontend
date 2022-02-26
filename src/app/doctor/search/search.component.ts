import { Component, OnInit } from '@angular/core';
import { AbhaDetailService } from './../../_services/abha-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  abhaId: string;
  reports: [];

  constructor(private abhaDetailService: AbhaDetailService) { }

  ngOnInit(): void {
  }

  search(){
    console.log("Abha: ",this.abhaId);
    this.abhaDetailService.getPatientConsultation(this.abhaId).subscribe({
      next: (response: any) => {
        if(response.length===0) {
          alert(`Patient has no consultation forms`);
        }else{
          this.reports = response;
          console.log(response);
        }
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
}
