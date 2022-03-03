import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ConsultationCard } from '../../../../interfaces/ConsultationCard';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {
  // @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  dateAndTime: Date;
  formatedDateAndTime: string;
  uniqueId: string;

  @Input() reportDetail: any;
  constructor() {
  }

  ngOnInit(): void {
    this.formatDate(this.reportDetail.dateAndTime);
    console.log("Report: ", this.reportDetail);
    this.uniqueId = "#" + this.reportDetail.formId;
    console.log("uniqueId:", this.uniqueId);
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
  }

}
