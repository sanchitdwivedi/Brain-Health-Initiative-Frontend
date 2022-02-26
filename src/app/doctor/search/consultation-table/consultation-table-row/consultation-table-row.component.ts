import {Component, Input, OnInit} from '@angular/core';
import {ConsultationCard} from '../../../../interfaces/ConsultationCard';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {

  dateAndTime: Date;
  formatedDateAndTime: string;

  @Input() reportDetail: ConsultationCard;
  constructor() {
  }

  ngOnInit(): void {
    this.formatDate(this.reportDetail.dateAndTime);
  }

  formatDate(date: Date) {
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
