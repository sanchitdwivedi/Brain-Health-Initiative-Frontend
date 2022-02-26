import {Component, Input, OnInit} from '@angular/core';
import {ConsultationCard} from '../../../../interfaces/ConsultationCard';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {

  @Input() reportDetail: ConsultationCard;
  constructor() {
  }

  ngOnInit(): void {
  }

}
