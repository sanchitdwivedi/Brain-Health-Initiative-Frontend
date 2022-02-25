import {Component, Input, OnInit} from '@angular/core';
import {Row} from '../../../../interfaces/Row';

@Component({
  selector: 'app-consultation-table-row',
  templateUrl: './consultation-table-row.component.html',
  styleUrls: ['./consultation-table-row.component.css']
})
export class ConsultationTableRowComponent implements OnInit {

  @Input() row: Row;
  constructor() {
  }

  ngOnInit(): void {
  }

}
