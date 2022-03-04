import { Component, OnInit } from '@angular/core';
import { ConsultationCard } from 'src/app/interfaces/ConsultationCard';
import { DateShareService } from 'src/app/_services/date-share.service';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {

  reports: ConsultationCard[] = [];
  name: string = '';
  constructor(private dataShareService: DateShareService) { }

  ngOnInit(): void {
    this.reports = this.dataShareService.getReports();
    this.name = this.reports[0].patient.first_name +" "+ this.reports[0].patient.last_name;
    console.log(this.reports[0].patient);
  }

}
