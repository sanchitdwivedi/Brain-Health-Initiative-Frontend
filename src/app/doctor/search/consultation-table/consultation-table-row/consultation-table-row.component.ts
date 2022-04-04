import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {
  dateAndTime: Date;
  formatedDateAndTime: string;
  uniqueId: string;
  followUp: string;
  referTo: string;

  @Input() reportDetail: any;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.reportDetail)
    this.formatDate(this.reportDetail.dateAndTime);
    this.getReferedDoctor(this.reportDetail.refer);
    this.uniqueId = "#" + this.reportDetail.formId;
  }

  formatDate(date: Date): void {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    this.formatedDateAndTime = [year, month, day].join('-');

    if(this.reportDetail.followUp.length>0){
      var da = new Date(this.reportDetail.followUp);
      this.followUp = [da.getFullYear(), '' + (da.getMonth()+1), '' + (da.getDate())].join('-');
    }
    else{
      this.followUp = '-';
    }
  }

  getReferedDoctor(refer: any){
    if(this.reportDetail.refer===null){
      this.referTo = '-';
    }
    else{
      this.referTo = 'Dr. ' + refer.firstName + ' ' + refer.lastName;
    }
  }

}
